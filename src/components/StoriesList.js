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
                    <>
                        <h1 key={item.id}>Name: {item.Story.character}</h1> 
                        <h2 key={item.id}>Party: {item.Story.party}</h2>
                        <p key={item.id}>{item.Story.story}</p>
                        <p key={item.id}>Created by: {item.Story.user.display_name}</p>
                        <p key={item.id}>ID: {item.Story.id}</p>
                        <p key={item.id}>Likes: {item.likes}</p>
                    </>
                )   
            })}
        </>
    )
}

export default StoriesList