import { useEffect, useState } from "react";

export default function Story() {
    const [story, setStory] = useState({})

    useEffect(() => {
        const getStory = async () => {
            try {
                const response = await fetch(`https://adventshare.onrender.com/stories/${id}`)
                const entry = await response.json()
                setStory(entry.Story)
            } catch (err) {
                console.log(err)
            }
        }

        (async () => await getStory())();
    }, [])

    console.log(story)

    return (
        <>
            <p> Name: {story.character} </p>
            <p> Party: {story.party} </p>
            <p> {story.story} </p>
            <span> ID: {story.id} </span>
        </>
    )
}