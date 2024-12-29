import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";

function Loginpage() {
  // hook to change url when login button click
  const navigate = useNavigate();

  // access the data from context.
  const { setUsername, setPassword } = useUserContext();

  // function to get Username
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  // function to get Password
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div
        id="mainbox"
        className="h-screen flex justify-center items-center dark:bg-black"
      >
        <section>
          <div className="text-center mx-4 p-3 max-w-[600px] space-y-3">
            <h1 className="text-3xl font-semibold dark:text-slate-50">
              Welcome
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="text"
                placeholder="Username"
                required
                onChange={handleUsername}
                className="text-lg pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none dark:bg-gray-700 dark:text-gray-50"
              />
              <input
                type="password"
                placeholder="Password"
                required
                onChange={handlePassword}
                className="text-lg pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none dark:bg-gray-700 dark:text-gray-50"
              />
              <button
                type="submit"
                className="w-full py-3 font-normal rounded-md text-xl text-white bg-blue-400 hover:bg-blue-500 dark:bg-slate-100 dark:text-black dark:hover:bg-white"
              >
                Login
              </button>
            </form>

            <p className="dark:text-slate-400">
              Don't have an account?{" "}
              <a href="#" className="text-[#187bcd] dark:text-slate-300">
                Sign Up
              </a>
            </p>

            <div className="flex justify-center items-center">
              <hr className="flex-grow h-[0.5px] bg-black border-0 dark:bg-gray-300" />
              <p className="m-2 dark:text-gray-300">OR</p>
              <hr className="flex-grow h-[0.5px] bg-black border-0 dark:bg-gray-300" />
            </div>

            <button className="w-full border-[0.5px] border-solid border-gray-500 hover:bg-slate-800 py-4 text-lg flex pr-4 rounded-md">
              <span className="ml-4">
                <img
                  src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
                  alt="Google"
                />
              </span>
              <span className="ml-4 text-gray-700  dark:text-slate-300">
                Continue with Google
              </span>
            </button>

            <button className="w-full border-[0.5px] border-solid border-gray-500 hover:bg-slate-800 py-4 text-lg flex pr-4 rounded-md">
              <span className="ml-4">
                <img
                  className="h-[20px] w-[20px]"
                  src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
                  alt="Apple"
                />
              </span>
              <span className="ml-4 text-gray-700 dark:text-slate-300">
                Continue with Microsoft Account
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Loginpage;
