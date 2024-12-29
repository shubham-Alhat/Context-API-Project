import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-gray-600 p-3 flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center">
            Are you sure, you want log out ?
          </h1>
          <div className="w-full flex justify-around items-center">
            <button
              className="bg-blue-400 text-xl border-2 py-2 px-4 rounded-lg hover:bg-blue-500 text-white"
              onClick={() => navigate("/")}
            >
              Yes
            </button>
            <button
              className="bg-blue-400 text-xl border-2 py-2 px-4 rounded-lg hover:bg-blue-500 text-white"
              onClick={() => navigate(-1)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
