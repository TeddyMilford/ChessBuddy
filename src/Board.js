// import Card from "react-bootstrap/Card";

import React from "react";
import { Link } from "react-router-dom";

function Board({
  game,
  favorites,
  detailGame,
  handleFavorites,
  setDetailGame,
}) {
  const boardStyleList = [
    "blue",
    "brown",
    "green-white",
    "cadet-grey-gradient",
    "wood-pine",
    "wood-dark2",
    "white-grey",
  ];

  const tog = favorites.find((c) => {
    return c.id === game.id;
  });

  const boardRand = Math.floor(Math.random() * boardStyleList.length - 1);
  // console.log(boardRand);
  // console.log(
  //   boardStyleList[Math.floor(Math.random() * boardStyleList.length)]
  // );

  // function management(game, e) {
  //   handleFavorites(game, e);
  // }

  return (
    <div className="grow p-6 max-w-lg bg-slate-400 rounded-lg border border-gray-200 shadow-md">
      <ct-pgn-viewer
        move-list-folding={true}
        board-pieceStyle={"merida"}
        board-boardStyle={boardStyleList[boardRand]}
        move-list-moveListStyle={"twocolumn"}
        // move-list-size={"100px"}
        // move-list-position={"under"}
        board-allowdrawing={true}
        board-resizable={true}
        board-size={"470px"}
      >
        {game.pgn}
      </ct-pgn-viewer>

      <div>
        <button
          onClick={(e) => {
            handleFavorites(game, e);
          }}
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {tog ? "Unfavorite" : "Favorite"}
        </button>
        <Link to={"/details"}>
          <button
            onClick={() => {
              setDetailGame(game);
            }}
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Inspect
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Board;
