import React from "react";
import LandingNav from "./LandingNav";
import { useState } from "react";
import LandingBoard from "./LandingBoard";
import LandingCard from "./LandingCard";
function LandingPage({ games, setGames, setDetailGame }) {
  const [search, setSearch] = useState("");

  let deck = games.map((game) => {
    return <LandingCard game={game} setDetailGame={setDetailGame} />;
  });

  function handleSearch(e) {
    e.preventDefault();
    console.log(search);
    fetch(`https://check-back-tm.herokuapp.com/search_game?search="${search}"`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 10) {
          setGames(data.slice(0, 9));
        } else {
          setGames(data);
        }
      });
  }

  return (
    <>
      <LandingNav games={games} />
      <div className="lg:px-6 xl:px-8">
        <div className="mx-auto container relative z-0 px-4 xl:px-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-3/5 md:pt-24 pb-10 lg:pb-20 xl:pb-48">
              <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color ">
                ChessBuddy
              </h1>

              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-6 text-primary font-medium text-lg lg:text-2xl">
                A collection of over 10,000 master games
              </h2>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OCSbzArwB10"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <h2 className="pt-8 text-3xl lg:text-5xl xl:text-6xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color ">
                Explore below ♞♖♚
              </h2>

              <div id="signInDiv"></div>
            </div>

            <LandingBoard />
          </div>
        </div>
        <form
          className="flex items-center pt-10"
          onSubmit={(e) => handleSearch(e)}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            ></input>
          </div>
          <button
            onSubmit={(e) => {
              handleSearch(e);
            }}
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="container grid mx-auto pt-10">{deck}</div>
      </div>
    </>
  );
}

export default LandingPage;
