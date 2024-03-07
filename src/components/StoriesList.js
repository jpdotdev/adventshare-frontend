import { useContext, useEffect } from "react";
import Adventshare from "../APIs/Adventshare";
import { StoriesContext } from "../context/StoriesContext";
import { useNavigate } from "react-router-dom";

import divider from "../assets/divider.svg";

const StoriesList = (props) => {
  const { stories, setStories } = useContext(StoriesContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await Adventshare.get("/stories");
        const sortedStories = response.data.sort((a, b) => new Date(b.Story.created_at) - new Date(a.Story.created_at)); // this is new
        setStories(sortedStories); // this is new
      } catch (err) {
        console.log(err);
      }
    };

    fetchStories();
  }, []);

  const handleStorySelect = (id) => {
    navigate(`/stories/${id}`);
  };

  const handleUserSelect = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="all-stories h-full pb-20">
      <div className="bg-adventurers bg-cover bg-no-repeat py-52 h-3/5 text-center px-6">
        <h1 className="text-h1 font-CinzelDeco font-bold text-[#000000] bg-trgray my-28 mx-auto min-w-[50%] max-w-md p-6 rounded-xl">
          All Stories
        </h1>
      </div>
      {stories &&
        stories.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-beige md:w-3/5 w-4/5 mx-auto my-6 px-3 text-[#000000] flex flex-row justify-between items-center shadow-inner shadow-dkpurple"
            >
              <div
                className="w-2/5 mx-auto text-center cursor-pointer"
                onClick={() => handleStorySelect(item.Story.id)}
              >
                <p className="text-p2">{`${item.Story.story.substring(
                  0,
                  250
                )}...`}</p>
              </div>
              <img
                src={divider}
                alt=""
                className="py-10 h-[200px] md:h-[400px]"
              />
              <div className="text-p3 w-2/5 mx-auto px-4 justify-center">
                <p className="py-2">Character: {item.Story.character}</p>
                <p className="py-2">Party: {item.Story.party}</p>

                <p
                  onClick={() => handleUserSelect(item.Story.user.id)}
                  className="py-2 cursor-pointer"
                >
                  Author: {item.Story.user.display_name}
                </p>

                <p className="py-2">Likes: {item.likes}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default StoriesList;
