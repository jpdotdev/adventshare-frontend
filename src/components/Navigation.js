import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalState from "../hooks/useLocalStorage";

import "../styles/nav.css";

import userIcon from "../assets/user.svg";

const Navigation = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [user_id, setUser_id] = useLocalState("", "user_id");
  let navigate = useNavigate();

  const handleLogout = () => {
    setJwt("");
    setUser_id("");
    navigate("/");
  };

  const handleLoginRoute = () => {
    navigate("/login");
  };

  const handleSignupRoute = () => {
    navigate("/signup");
  };

  const handleMyProfile = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div>
      <nav className=" bg-dkgray flex flex-row fixed top-0 left-0 py-4 right-0 justify-between items-center">
        <Link to="/" className="text-h4 font-CinzelDeco w-1/3 pl-4">
          {" "}
          Adventshare{" "}
        </Link>
        <ul className="text-p2 flex flex-row items-center justify-end max-w-lg min-w-[70%] ml-auto">
          <li className="w-1/4 text-center">
            {" "}
            <Link to="/stories"> All Stories </Link>{" "}
          </li>
          <li className="w-1/4 text-center">
            {" "}
            <Link to="/stories/create" className="p-1">
              {" "}
              Create A Story{" "}
            </Link>{" "}
          </li>

          {!jwt && (
            <button
              onClick={() => handleSignupRoute()}
              className="w-1/4 text-center"
            >
              {" "}
              Sign up{" "}
            </button>
          )}
          {!jwt && (
            <button
              onClick={() => handleLoginRoute()}
              className="w-1/4 text-center"
            >
              {" "}
              Log in{" "}
            </button>
          )}
          {jwt && (
            <button
              onClick={() => handleLogout()}
              className="w-1/4 text-center"
            >
              {" "}
              Log out{" "}
            </button>
          )}
          {jwt && (
            <li
              onClick={() => handleMyProfile(user_id)}
              className="cursor-pointer w-1/4 text-center"
            >
              <img
                src={userIcon}
                alt="My Profile"
                className="user-icon w-5 mx-auto"
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
