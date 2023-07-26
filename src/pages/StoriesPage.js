import { useEffect, useState } from "react";
import { v4 } from 'uuid';

export default function Stories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        const getStories = async () => {
            try {
                const response = await fetch('https://adventshare.onrender.com/stories')
                const entries = await response.json()
                let posts = entries.map(e => e.Story)
                setStories(posts)
                console.log(posts[0])
            } catch (err) {
                console.log(err)
            }
        }

        (async () => await getStories())();
    }, [])

    return (
        <>
            {stories.map((item) => {
                return (
                    <>
                        <h1 key={v4()}>Name: {item.character}</h1>
                        <h2 key={v4()}>Party: {item.party}</h2>
                        <p key={v4()}>{item.story}</p>
                        <span key={v4()}>Created by: {item.user.display_name}, ID: {item.id}</span>
                    </>
                )   
            })}
        </>
    )
}

