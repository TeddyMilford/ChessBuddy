import React from "react";
import Nav from "./Nav";
import Board from "./Board";

function Explore({
  games,
  setUser,
  detailGame,
  setDetailGame,
  setGames,
  setFavorites,
  handleFavorites,
  favorites,
}) {
  let deck = games.map((game) => {
    return (
      <Board
        game={game}
        detailGame={detailGame}
        setDetailGame={setDetailGame}
        handleFavorites={handleFavorites}
        favorites={favorites}
      />
    );
  });
  return (
    <div>
      <Nav setUser={setUser} setGames={setGames} setFavorites={setFavorites} />
      <h1>Explore games...</h1>
      <div className="container mx-auto pl-12">
        <div className="grid justify-center gap-y-7 content-center grid-cols-2">
          {deck}
        </div>
      </div>
      {/* <div className="flex justify-center">{deck}</div> */}
      {/* <div className="wrapper justify-center">{deck}</div> */}
    </div>
  );
}

export default Explore;
