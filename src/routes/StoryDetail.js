import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { StoriesContext } from "../context/StoriesContext"
import Adventshare from "../APIs/Adventshare"
import useLocalState from "../hooks/useLocalStorage"

const StoryDetail = () => {

    const { id } = useParams()
    const {selectedStory, setSelectedStory} = useContext(StoriesContext)
    const [jwt, setJwt] = useLocalState('', 'jwt')

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

    const  handleDelete = async (id) => {
        try { 
            const response = await Adventshare.delete(`/stories/${id}`, {
            headers : {
                authorization: `bearer ${jwt}`
              }
        });
        console.log(response)
        window.location.href = '/stories';

        } catch (err) {
            console.log(err)
        }
    }

    console.log(jwt)
    console.log(selectedStory)

    return (
        <div>
            <h1>Name: {selectedStory && selectedStory.Story.character}</h1> 
            <h2>Party: {selectedStory && selectedStory.Story.party}</h2>
            <p>{selectedStory && selectedStory.Story.story}</p>
            <p>Created by: {selectedStory && selectedStory.Story.user.display_name}</p>
            <p>Likes: {selectedStory && selectedStory.likes}</p>
            <button onClick={() => handleDelete(selectedStory.Story.id)}> Delete Story </button>
        </div>
    )
}

export default StoryDetail