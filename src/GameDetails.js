import React from "react";

function GameDetails({ game, favorites, setFavorites }) {
  const boardStyleList = [
    "blue",
    "brown",
    "green-white",
    "cadet-grey-gradient",
    "wood-pine",
    "wood-dark2",
    "white-grey",
  ];

  const boardRand = Math.floor(Math.random() * boardStyleList.length - 1);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-400 rounded-lg border border-gray-200 shadow-md">
      <ct-pgn-viewer
        move-list-folding={true}
        board-pieceStyle={"merida"}
        board-boardStyle={boardStyleList[boardRand]}
        move-list-moveListStyle={"twocolumn"}
        // move-list-size={"100px"}
        // move-list-position={"under"}
        board-allowdrawing={true}
        board-resizable={false}
        board-actions-menu-direction={"grid-above"}
        board-size={"750px"}
      >
        {game.pgn}
      </ct-pgn-viewer>
      <div className="pl-3">
        <button
          type="button"
          class="text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Favorite Game
        </button>
      </div>
    </div>
  );
}

export default GameDetails;
