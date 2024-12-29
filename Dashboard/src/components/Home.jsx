import React from "react";
import { useUserContext } from "../Contexts/UserContext";

function Home() {
  // get data from context
  const { username, password } = useUserContext();
  return (
    <>
      <div id="HomeBox">
        {/* card */}
        <div id="cardContainer" className=" flex justify-center items-center">
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-800   bg-slate-100 dark:text-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PvGfsC3zdRSv_N0sn6a5WRll9PccfWf3tA&s"
              alt="image"
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {username}
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                {password}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-white">
              username: {username}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
