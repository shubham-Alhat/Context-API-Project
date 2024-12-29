import React, { useEffect } from "react";
import { useUserContext } from "../Contexts/UserContext";

function Settings() {
  // get data from context.
  const { theme, setTheme } = useUserContext();

  // function to handle Theme
  function handleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // actual change in page
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <h1 className="my-16 text-4xl font-bold text-center">Settings</h1>
      <div id="toggleContainer" className="w-full flex justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleTheme}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 font-medium text-sm">{theme}</span>
        </label>
      </div>
    </>
  );
}

export default Settings;
