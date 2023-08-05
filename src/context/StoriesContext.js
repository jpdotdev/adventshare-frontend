import React, { useState, createContext } from "react";

export const StoriesContext = createContext()

export const StoriesContextProvider = props => {

    const [stories, setStories] = useState([])
    const [selectedStory, setSelectedStory] = useState(null)

    const addStories = (story) => {
        setStories([...stories, story])
    }

    return (
        <StoriesContext.Provider value={{ stories, setStories, addStories, selectedStory, setSelectedStory }}>
            {props.children}
        </StoriesContext.Provider>
    )

}

