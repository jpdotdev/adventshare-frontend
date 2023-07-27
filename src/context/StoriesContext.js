import React, { useState, createContext } from "react";

export const StoriesContext = createContext()

export const StoriesContextProvider = props => {

    const [stories, setStories] = useState([])

    return (
        <StoriesContext.Provider value={{ stories, setStories }}>
            {props.children}
        </StoriesContext.Provider>
    )

}


//     useEffect(() => {
//         const getStories = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/stories')
//                 const entries = await response.json()
//                 setStories(entries)
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         (async () => await getStories())();
//     }, [])

//     console.log(stories)