import React from "react";

function LandingBoard() {
  return (
    <div className="grow p-6 max-w-lg bg-slate-400 rounded-lg border border-gray-200 shadow-md">
      <ct-pgn-viewer
        move-list-folding={true}
        board-pieceStyle={"merida"}
        board-boardStyle={"green-white"}
        move-list-moveListStyle={"twocolumn"}
        // move-list-size={"100px"}
        // move-list-position={"under"}
        board-allowdrawing={true}
        board-resizable={true}
        board-size={"470px"}
      >
        [Event "Airthings Masters KO 2020"] [Site "chess24.com INT"] [Date
        "2020.12.30"] [Round "1.21"] [White "Dubov, Daniil"] [Black "Carlsen,
        Magnus"] [Result "1-0"] [WhiteTitle "GM"] [BlackTitle "GM"] [WhiteElo
        "2702"] [BlackElo "2862"] [ECO "E10"] [Opening "Queen's pawn game"]
        [WhiteFideId "24126055"] [BlackFideId "1503014"] [EventDate
        "2020.12.29"] 1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Bb4+ 5. Nbd2 O-O 6. Bg2
        b6 7. O-O Bb7 8. Ne5 a5 9. Qc2 a4 10. Rd1 Bd6 11. cxd5 exd5 12. Ndc4 h6
        13. Bf4 Re8 14. Rac1 Na6 15. a3 Bf8 16. Ne3 c5 17. Nf5 cxd4 18. Nc6 Qd7
        19. Bh3 Kh8 20. Ne5 Rxe5 21. Bxe5 Ne4 22. Bxd4 Rc8 23. Qd3 Nac5 24. Qe3
        Kh7 25. Bxc5 Nxc5 26. Qf3 d4 27. Rxd4 Qe8 28. Qe3 Qc6 29. f3 Re8 30. Qf2
        g6 31. Ne3 Qf6 32. Ng4 Qg7 33. Rcd1 h5 34. Ne3 Nb3 35. R4d3 Qxb2 36. Rd7
        Bc5 37. Rxf7+ Kh6 38. Rdd7 Qa1+ 39. Kg2 Bxe3 40. Rh7+ Kg5 41. Rxb7 Rf8
        42. Qxe3+ 1-0
      </ct-pgn-viewer>
    </div>
  );
}

export default LandingBoard;
