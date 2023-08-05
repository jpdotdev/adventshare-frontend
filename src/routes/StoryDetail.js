import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { StoriesContext } from "../context/StoriesContext"
import Adventshare from "../APIs/Adventshare"

const StoryDetail = () => {

    const { id } = useParams()
    const {selectedStory, setSelectedStory} = useContext(StoriesContext)

    useEffect(() => {
        const fetchStory = async () => {

            try {
                const response = await Adventshare.get(`/stories/${id}`)
                setSelectedStory(response.data)
            }
            catch (err) {
                console.log(err)
            }
            
        };

        fetchStory()
    }, [])

    console.log(selectedStory)

    return (
        <div>
            <h1>Name: {selectedStory && selectedStory.Story.character}</h1> 
            <h2>Party: {selectedStory && selectedStory.Story.party}</h2>
            <p>{selectedStory && selectedStory.Story.story}</p>
            <p>Created by: {selectedStory && selectedStory.Story.user.display_name}</p>
            <p>Likes: {selectedStory && selectedStory.likes}</p>
        </div>
    )
}

export default StoryDetail