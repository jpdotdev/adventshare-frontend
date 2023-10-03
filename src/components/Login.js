import React, { useState } from "react";
import Adventshare from "../APIs/Adventshare";
import useLocalState from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [user_id, setUser_id] = useLocalState("", "user_id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Adventshare.post(
        "/login",
        {
          username: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setJwt(response.data.access_token);
      setUser_id(response.data.user_id);
      window.location.href = "/stories";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="text-p4 flex flex-col items-center mt-[10rem] mb-6 mx-auto px-2 py-16 border border-white w-[80%] max-w-xl text-center font-CinzelDeco"
      >
        <p className="text-h3 mb-10 text-hYellow">Welcome Adventurer</p>
        <label className="flex flex-row mx-auto mb-6 w-4/5 items-center justify-between">
          <p className="mr-4">Email:</p>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="font-Fauna text-dkpurple p-2"
          />
        </label>
        <label className="flex flex-row mx-auto mb-10 items-center justify-between">
          <p className="mr-4">Password:</p>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="font-Fauna text-dkpurple p-2"
          />
        </label>
        <div>
          <button type="submit" className="bg-asred px-4 py-2">
            Login
          </button>
        </div>
      </form>
      <Link
        to="/signup"
        className="font-CinzelDeco underline underline-offset-4"
      >
        Sign up Instead
      </Link>
    </div>
  );
};

export default Login;
