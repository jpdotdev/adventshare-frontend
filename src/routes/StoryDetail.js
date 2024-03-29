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
  const [likes, setLikes] = useState(selectedStory ? selectedStory.likes : 0);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await Adventshare.get(`/stories/${id}`);
        setSelectedStory(response.data);
        setLikes(response.data.likes);
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
      setLikes((prevLikes) => prevLikes + 1);
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
      setLikes((prevLikes) => prevLikes - 1);
    } catch (err) {
      console.log(err);
      if (err.response.status == 401) {
        setJwt("");
        window.location.href = "/login";
      }
    }
  };

  return (
    <div className="bg-castle bg-cover bg-no-repeat h-[100vh] p-10">
      <div className="text-p2 p-10 bg-beige text-[#000] min-w-[70%] max-w-xl mx-auto mt-24">
        <h1 className="mb-2 story-preview">
          Name: {selectedStory && selectedStory.Story.character}
        </h1>
        <h2 className="mb-2 story-preview">
          Party: {selectedStory && selectedStory.Story.party}
        </h2>
        <p className="mb-2 story-preview">
          {selectedStory && selectedStory.Story.story}
        </p>
        <p
          onClick={() => handleUserSelect(selectedStory.Story.user.id)}
          className="mb-2 story-preview cursor-pointer"
        >
          Author: {selectedStory && selectedStory.Story.user.display_name}
        </p>
        <p className="mb-2 story-preview">
          Likes: {likes} 
        </p>
        <button
          onClick={() => likeStory(selectedStory.Story.id)}
          className="mb-2 story-preview"
        >
          Like
        </button>
        <br></br>
        <button
          onClick={() => dislikeStory(selectedStory.Story.id)}
          className="mb-2 story-preview"
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default StoryDetail;
