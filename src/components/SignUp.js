import React, { useState } from "react";
import Adventshare from "../APIs/Adventshare";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  const [display, setDisplay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Adventshare.post(
        "/users",
        {
          email: email,
          display_name: display,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/stories");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="login-signup mt-[10rem] mb-6 mx-auto px-2 py-16 border border-white w-[80%] max-w-xl font-CinzelDeco flex flex-col items-center"
      >
        <p className="welcomels mb-10 text-hYellow">Welcome Adventurer</p>
        <label className="flex flex-row mx-auto mb-6 w-4/5 items-center justify-between">
          <p className="mr-4">Display Name:</p>
          <input
            value={display}
            type="text"
            onChange={(e) => setDisplay(e.target.value)}
            className="font-Fauna text-dkpurple p-2 w-3/5"
          />
        </label>
        <label className="flex flex-row mx-auto mb-10 w-4/5 items-center justify-between">
          <p className="mr-4">Email:</p>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="font-Fauna text-dkpurple p-2 w-3/5"
          />
        </label>
        <label className="flex flex-row mx-auto mb-10 w-4/5 items-center justify-between">
          <p className="mr-4">Password:</p>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="font-Fauna text-dkpurple p-2 w-3/5"
          />
        </label>
        <div>
          <button type="submit" className="bg-asred px-4 py-2">
            Sign Up
          </button>
        </div>
      </form>
      <Link
        to="/login"
        className="font-CinzelDeco underline underline-offset-4"
      >
        Log in Instead
      </Link>
    </div>
  );
};

export default SignUp;
