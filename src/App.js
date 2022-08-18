// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./LandingPage";
import Explore from "./Explore";
import Favorites from "./Favorites";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Navigate, Route, Routes } from "react-router-dom";
import GameDetails from "./GameDetails";
import Loader from "./Loader";
import LandingCard from "./LandingCard";

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [detailGame, setDetailGame] = useState("");
  const [userID, setUserID] = useState(null);

  function handleFavorites(game, e) {
    // console.log(userID);
    // console.log(game);
    // console.log(e.target.innerText);
    if (e.target.innerText === "Favorite") {
      console.log("Favorited");
      setFavorites([game, ...favorites]);
      let data = {
        game_id: game.id,
        user_id: userID,
      };
      fetch("https://check-back-tm.herokuapp.com/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
    }
    if (e.target.innerText === "Unfavorite") {
      console.log("Unfavorited");
      console.log(game);
      console.log(favorites);
      fetch(
        `https://check-back-tm.herokuapp.com/mult?user_id=${userID}&game_id=${game.id}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
      let updated = favorites.filter((c) => {
        return c.id !== game.id;
      });
      setFavorites(updated);
    }
  }

  useEffect(() => {
    function loadUserData() {
      let user = JSON.parse(localStorage.getItem("user"));

      console.log(user);

      if (user) {
        fetch(
          `https://check-back-tm.herokuapp.com/find_thing?email=${user.email}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFavorites(data.games);
            setUserID(data.id);

            console.log(data.id);
          });
      }
    }

    loadUserData();

    // Sets games
    fetch("https://check-back-tm.herokuapp.com/games")
      .then((response) => response.json())
      .then((data) => setGames(data));

    // If there is a local storage user, set user to that
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      // navigate("/explore");
    }
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "817805489414-n1vbq2kuidfu0m9f5clttvr2eubo1jtl.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    setUser(userObject);

    // setNewUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
    console.log(userObject);

    window.location.assign("/explore");

    // If there is not an email associated, create a user with the response data
    fetch(
      `https://check-back-tm.herokuapp.com/find_thing?email=${userObject.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data === null) {
          let data = {
            first_name: userObject.given_name,
            last_name: userObject.family_name,
            email: userObject.email,
            profile_photo: userObject.picture,
          };
          console.log(data);
          fetch("https://check-back-tm.herokuapp.com/new_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            });
        }
      });
  }

  if (!user) {
    <div className="App" style={{ backgroundColor: "#9097C0" }}>
      <LandingPage />
    </div>;
  }
  return (
    <Routes>
      <Route
        path="/details"
        element={
          <GameDetails
            game={detailGame}
            favorites={favorites}
            setFavorites={setFavorites}
            handleFavorites={handleFavorites}
          />
        }
      />
      <Route path="/baby" element={<Loader />} />
      <Route
        path="/landing"
        element={
          <LandingPage
            games={games}
            setGames={setGames}
            setUser={setUser}
            detailGame={detailGame}
            setDetailGame={setDetailGame}
          />
        }
      />
      <Route path="/design" element={<LandingCard />} />
      <Route
        path="/explore"
        element={
          <Explore
            favorites={favorites}
            handleFavorites={handleFavorites}
            setFavorites={setFavorites}
            games={games}
            setGames={setGames}
            setUser={setUser}
            detailGame={detailGame}
            setDetailGame={setDetailGame}
          />
        }
      />
      <Route
        path="/favorites"
        element={
          <Favorites
            setFavorites={setFavorites}
            favorites={favorites}
            handleFavorites={handleFavorites}
          />
        }
      />
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

export default App;
