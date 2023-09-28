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
    <div>
      <h1> Update Story </h1>
      <form>
        <input
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          type="text"
          placeholder="Character Name"
        />
        <input
          value={party}
          onChange={(e) => setParty(e.target.value)}
          type="text"
          placeholder="Party Name"
        />
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          type="text"
          placeholder="Story Entry"
        />
        <button type="submit" onClick={handleUpdateSubmit}>
          {" "}
          Update Story{" "}
        </button>
      </form>
    </div>
  );
};

export default UpdateStory;
