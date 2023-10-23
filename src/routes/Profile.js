import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalState from "../hooks/useLocalStorage";
import Adventshare from "../APIs/Adventshare";

const Profile = () => {
  let navigate = useNavigate();

  const [jwt, setJwt] = useLocalState("", "jwt");
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [userStories, setUserStories] = useState();
  const [user_id, setUser_id] = useLocalState("", "user_id");

  let signedIn;
  if (user.id == user_id) {
    signedIn = true;
  } else {
    signedIn = false;
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Adventshare.get(`/users/${id}`);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchUserStories = async () => {
      try {
        const response = await Adventshare.get("/stories");
        setUserStories(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserStories();
  }, []);

  const handleStorySelect = (id) => {
    navigate(`/stories/${id}`);
  };

  const handleLogout = () => {
    setJwt("");
    setUser_id("");
  };

  const handleUserDelete = async (id) => {
    try {
      const response = await Adventshare.delete(`/users/${id}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        }, 
      });
    } catch (err) {
      console.log(err);
    }
    window.location.href = "/";
  };

  let filteredUserStories = userStories?.filter((s) => s.Story.user.id == id);

  const handleDelete = async (id) => {
    try {
      await Adventshare.delete(`/stories/${id}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      navigate(`/stories`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/stories/${id}/update`);
  };

  console.log(signedIn);

  return (
    <div>
      <div className="bg-challenger bg-cover bg-no-repeat pt-52 pb-16 h-3/5 flex flex-col items-center px-auto mb-16">
        <h1 className="text-h1 font-CinzelDeco font-bold text-dkpurple bg-trgray mt-28 mb-52 mx-auto max-w-xl min-w-2/5 p-6 rounded-xl">
          Profile
        </h1>
        <div className="flex flex-row max-w-2xl min-w-[80%] mx-auto justify-between items-center">
          <p className="text-p4">{`@${user?.display_name}`}</p>
          {signedIn && (
            <button
              onClick={() => { handleUserDelete(id); handleLogout(); }}
              className="bg-asred p-2"
            >
              <span> Delete Account </span>
            </button>
          )}
        </div>
      </div>

      {filteredUserStories &&
        filteredUserStories.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-beige max-w-lg min-w-[60%] mx-auto my-6 px-3 py-6 text-[#000000] flex flex-col justify-between shadow-inner shadow-dkpurple"
            >
              <p
                onClick={() => handleStorySelect(item.Story.id)}
                className="text-p4 mb-4"
              >
                Character: {item.Story.character}
              </p>
              <p className="text-p2 mb-3">Party: {item.Story.party}</p>
              <p className="story mb-3">{`${item.Story.story.substring(
                0,
                250
              )}...`}</p>
              <p className="mb-3">Likes: {item.likes}</p>
              <div className="mt-2">
                {signedIn && (
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this story?"
                        )
                      )
                        handleDelete(item.Story.id);
                    }}
                    className="bg-asred p-2 text-[#fff] mr-4"
                  >
                    {" "}
                    Delete Story{" "}
                  </button>
                )}
                {signedIn && (
                  <button
                    onClick={() => handleUpdate(item.Story.id)}
                    className="bg-[#000] p-2 text-[#fff]"
                  >
                    {" "}
                    Update Story{" "}
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profile;
