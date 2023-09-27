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

  const handleUserDelete = async (id) => {
    try {
      const response = await Adventshare.delete(`/users/${id}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
      <h1> {user.display_name} </h1>
      {filteredUserStories &&
        filteredUserStories.map((item) => {
          return (
            <div key={item.id}>
              <h1 onClick={() => handleStorySelect(item.Story.id)}>
                Name: {item.Story.character}
              </h1>
              <h2>Party: {item.Story.party}</h2>
              <p>{item.Story.story.substring(0, 250)}</p>
              <p>Likes: {item.likes}</p>
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
                >
                  {" "}
                  Delete Story{" "}
                </button>
              )}
              {signedIn && (
                <button onClick={() => handleUpdate(item.Story.id)}>
                  {" "}
                  Update Story{" "}
                </button>
              )}
            </div>
          );
        })}

      {signedIn && (
        <button onClick={() => handleUserDelete(id)}>
          <span> Delete Account </span>
        </button>
      )}
    </div>
  );
};

export default Profile;
