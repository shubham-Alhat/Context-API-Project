import React from "react";
import { useUserContext } from "../Contexts/UserContext";

function Profile() {
  // get data from context
  const { username, password } = useUserContext();
  return (
    <>
      <div id="ProfileBox">
        <h1 className="text-4xl text-bold text-center  my-7 font-bold">
          {username}
        </h1>
        <h1 className="text-4xl text-bold text-center  my-4 font-bold">
          Frontend Developer
        </h1>
        <h1 className="text-4xl text-bold text-center font-bold">{password}</h1>
      </div>
    </>
  );
}

export default Profile;
