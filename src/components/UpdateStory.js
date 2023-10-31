import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useLocalState from "../hooks/useLocalStorage";
import Adventshare from "../APIs/Adventshare";

const UpdateStory = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [character, setCharacter] = useState("");
  const [party, setParty] = useState("");
  const [story, setStory] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    const fetchStoryData = async () => {
      const response = await Adventshare.get(`/stories/${id}`);
      setCharacter(response.data.Story.character);
      setParty(response.data.Story.party);
      setStory(response.data.Story.story);
    };
    fetchStoryData();
  }, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Adventshare.put(
        `/stories/${id}`,
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
      console.log(response);
      navigate("/stories");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-32 h-[80vh]">
      <h1 className="header-create-story mb-10 text-center font-CinzelDeco font-bold mx-auto max-w-xl min-w-2/5">
        {" "}
        Update Story{" "}
      </h1>
      <div className="create-story min-w-[50%] max-w-xl border border-white mx-auto py-8 px-10 font-CinzelDeco">
        <form className=" mx-auto">
          <div className="flex flex-row justify-between min-w-[60%] max-w-lg m-3 items-center">
            <label for="character-name">Character Name:</label>
            <input
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              type="text"
              placeholder="Character Name"
              className="text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
          <div className="flex flex-row justify-between min-w-[60%] max-w-lg m-3 items-center">
            <label for="party-name">Party Name:</label>
            <input
              value={party}
              onChange={(e) => setParty(e.target.value)}
              type="text"
              placeholder="Party Name"
              className="text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
          <div className="flex flex-col justify-between m-3 items-start">
            <label for="story-area">Story Entry:</label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              type="text"
              placeholder="Story Entry"
              className="w-full h-56 my-3 p-3 text-dkpurple bg-beige shadow-inner shadow-dkpurple"
            />
          </div>
          <button
            type="submit"
            onClick={handleUpdateSubmit}
            className="bg-asred rounded-full py-2 px-4"
          >
            {" "}
            Update Story{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStory;
