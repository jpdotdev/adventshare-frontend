import { useContext, useEffect } from "react";
import Adventshare from "../APIs/Adventshare";
import { StoriesContext } from "../context/StoriesContext";

const StoriesList = (props) => {
    const {stories, setStories} = useContext(StoriesContext)

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await Adventshare.get('/')
                setStories(response.data)
               } catch(err) {
                    console.log(err)
               }
        }  

        fetchStories();

    }, [])

    return (
        <>
            {stories && stories.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>Name: {item.Story.character}</h1> 
                        <h2>Party: {item.Story.party}</h2>
                        <p>{item.Story.story}</p>
                        <p>Created by: {item.Story.user.display_name}</p>
                        <p>ID: {item.Story.id}</p>
                        <p>Likes: {item.likes}</p>
                    </div>
                )   
            })}
        </>
    )
}

export default StoriesList