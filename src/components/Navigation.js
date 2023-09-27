import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalState from "../hooks/useLocalStorage";

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
      <nav>
        <ul className="flex flex-row fixed top-0 left-0 right-0">
          <li>
            {" "}
            <Link to="/"> Adventshare </Link>
          </li>
          <ul className="flex flex-row">
            <li>
              {" "}
              <Link to="/stories"> All Stories </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/stories/create"> Create A Story </Link>{" "}
            </li>
          </ul>
          {jwt && (
            <li onClick={() => handleMyProfile(user_id)}> My Profile </li>
          )}
          {!jwt && (
            <button onClick={() => handleSignupRoute()}> Sign up </button>
          )}
          {!jwt && <button onClick={() => handleLoginRoute()}> Log in </button>}
          {jwt && <button onClick={() => handleLogout()}> Log out </button>}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
