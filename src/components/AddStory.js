import React, { useContext, useState } from "react";
import Adventshare from "../APIs/Adventshare";
import { StoriesContext } from "../context/StoriesContext";
import useLocalState from "../hooks/useLocalStorage";

import "../styles/createstory.css";

const AddStory = () => {
  const { addStories } = useContext(StoriesContext);
  const [character, setCharacter] = useState("");
  const [party, setParty] = useState("");
  const [story, setStory] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Adventshare.post(
        "/stories",
        {
          character: character,
          party: party,
          story: story,
        },
        {
          headers: {
            authorization: `bearer ${jwt}`,
          },
        }
      );
      addStories(response.data);
      console.log(response);
      window.location.href = "/stories";
    } catch (err) {
      console.log(err);
      if (err.response.status == 401) {
        setJwt("");
        window.location.href = "/login";
      }
    }
  };

  return (
    <div className="mt-32">
      <h1 className="header-create-story mb-10 text-center font-CinzelDeco font-bold mx-auto max-w-xl min-w-2/5">
        Create a Story
      </h1>
      <div className="create-story min-w-[50%] max-w-xl border border-white mx-auto py-8 px-10 font-CinzelDeco">
        <form className=" mx-auto">
          <div className="flex flex-row justify-between min-w-[60%] max-w-lg m-3 items-center">
            <label for="character-name">Character Name:</label>
            <input
              id="character-name"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              type="text"
              className="text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
          <div className="flex flex-row justify-between min-w-[60%] max-w-lg m-3 items-center">
            <label for="party-name">Party Name:</label>
            <input
              id="party-name"
              value={party}
              onChange={(e) => setParty(e.target.value)}
              type="text"
              className="text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
          <div className="flex flex-col justify-between m-3 items-start">
            <label for="story-area">Story Entry:</label>
            <textarea
              id="story-area"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              type="text"
              placeholder="Enter your story here"
              className="w-full h-56 my-3 p-3 text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
        </form>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-asred rounded-full py-2 px-4"
        >
          {" "}
          Add Story{" "}
        </button>
      </div>
    </div>
  );
};

export default AddStory;
