import { useEffect, useState } from "react";

export default function Stories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        const getStories = async () => {
            try {
                const response = await fetch('https://adventshare.onrender.com/stories')
                const entries = await response.json()
                let posts = entries.map(e => e.Story)
                setStories(posts)
            } catch (err) {
                console.log(err)
            }
        }

        (async () => await getStories())();
    }, [])

    return (
        <>
            {stories.map((item,index) => {
                return (
                    <>
                        <p key={index}>{item.character}</p>
                        <p key={index}>{item.party}</p>
                        <p key={index}>{item.story}</p>
                    </>
                )   
            })}
        </>
    )
}

 