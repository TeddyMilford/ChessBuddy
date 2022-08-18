import React from "react";

function Loader() {
  function theThing() {
    // fetch("./testChessDb/games/twic1415.pgn")
    fetch("/games/twic1415.pgn")
      .then((response) => response.text())
      .then((data) => {
        // let trigger = false;
        let first = data.split("\n\n");

        let closer = [];
        for (let i = 0; i < first.length; i += 2) {
          closer.push(first[i] + " " + first[i + 1]);
        }
        console.log(closer);

        closer.forEach((thing) => {
          console.log(thing);
          function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
          }
          let data = {
            pgn: thing,
          };
          fetch("https://check-back-tm.herokuapp.com/games", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data.id);
            });

          sleep(100);
        });
        //   }
      });
  }

  return (
    <div className="flex w-max gap-4">
      <button
        onClick={() => {
          theThing();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        SEED
      </button>
    </div>
  );
}

export default Loader;
