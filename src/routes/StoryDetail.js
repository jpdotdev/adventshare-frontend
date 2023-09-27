import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoriesContext } from "../context/StoriesContext";
import Adventshare from "../APIs/Adventshare";
import useLocalState from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const StoryDetail = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const { selectedStory, setSelectedStory } = useContext(StoriesContext);
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await Adventshare.get(`/stories/${id}`);
        setSelectedStory(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStory();
  }, []);

  const handleUserSelect = (id) => {
    navigate(`/users/${id}`);
  };

  const likeStory = async (id) => {
    try {
      const response = await Adventshare.post(
        "/likes",
        {
          story_id: id,
          direction: 1,
        },
        {
          headers: {
            authorization: `bearer ${jwt}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      if (err.response.status == 401) {
        setJwt("");
        window.location.href = "/login";
      }
    }
  };

  const dislikeStory = async (id) => {
    try {
      const response = await Adventshare.post(
        "/likes",
        {
          story_id: id,
          direction: 0,
        },
        {
          headers: {
            authorization: `bearer ${jwt}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      if (err.response.status == 401) {
        setJwt("");
        window.location.href = "/login";
      }
    }
  };

  return (
    <div>
      <h1>Name: {selectedStory && selectedStory.Story.character}</h1>
      <h2>Party: {selectedStory && selectedStory.Story.party}</h2>
      <p>{selectedStory && selectedStory.Story.story}</p>
      <p onClick={() => handleUserSelect(selectedStory.Story.user.id)}>
        Created by: {selectedStory && selectedStory.Story.user.display_name}
      </p>
      <p>Likes: {selectedStory && selectedStory.likes}</p>
      <button onClick={() => likeStory(selectedStory.Story.id)}>Like</button>
      <button onClick={() => dislikeStory(selectedStory.Story.id)}>
        Dislike
      </button>
    </div>
  );
};

export default StoryDetail;
