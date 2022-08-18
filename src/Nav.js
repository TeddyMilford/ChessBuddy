import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ setUser, setGames, setFavorites }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [search, setSearch] = useState("");

  function handleLogOut() {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(true);
    window.location.assign("/landing");
  }

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
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/landing">
            <button
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href=""
            >
              ♟ chessbuddy
            </button>
          </Link>

          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <form
              className="flex items-center"
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
                  type="text"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Games..."
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
                <span className="sr-only">Search Games...</span>
              </button>
            </form>
            <li className="nav-item">
              <Link to="/explore">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Explore</span>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites">
                <button
                  // onClick={() => {
                  //   loadFavorites();
                  // }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Favorites</span>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/landing">
                <button
                  onClick={() => {
                    handleLogOut();
                  }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Log Out</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
