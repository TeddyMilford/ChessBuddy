import React from "react";
import Nav from "./Nav";
import Board from "./Board";

function Favorites({ favorites, setUser, setFavorites, handleFavorites }) {
  let deck = favorites.map((game) => {
    return (
      <Board
        game={game}
        handleFavorites={handleFavorites}
        favorites={favorites}
      />
    );
  });
  return (
    <div>
      <Nav setUser={setUser} setFavorites={setFavorites} />
      <div className="container mx-auto pl-12">
        <button
          onClick={() => {
            console.log(favorites);
          }}
        >
          Show Favorites
        </button>
        <div className="grid justify-center gap-y-7 content-center grid-cols-2">
          {deck}
        </div>
      </div>
      {/* <div className="flex justify-center">{deck}</div> */}
      {/* <div className="wrapper justify-center">{deck}</div> */}
    </div>
  );
}

export default Favorites;
