import { useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { StoriesContext } from "../context/StoriesContext"
import Adventshare from "../APIs/Adventshare"
import useLocalState from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

const StoryDetail = () => {

    let navigate = useNavigate()
    
    const { id } = useParams()
    const {selectedStory, setSelectedStory} = useContext(StoriesContext)
    const [jwt, setJwt] = useLocalState('', 'jwt')
    const [user_id, setUser_id] = useLocalState('', 'user_id')


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


    const handleDelete = async (id) => {
        try { 
            await Adventshare.delete(`/stories/${id}`, {
            headers : {
                authorization: `bearer ${jwt}`
              }
        });
        navigate('/stories');

        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async (id) => {
        navigate(`/stories/${id}/update`)
    }

    const handleUserSelect = (id) => {
        navigate(`/users/${id}`)
    }


    return (
        <div>
            <h1>Name: {selectedStory && selectedStory.Story.character}</h1> 
            <h2>Party: {selectedStory && selectedStory.Story.party}</h2>
            <p>{selectedStory && selectedStory.Story.story}</p>
            <p onClick={() => handleUserSelect(selectedStory.Story.user.id)}>Created by: {selectedStory && selectedStory.Story.user.display_name}</p>
            <p>Likes: {selectedStory && selectedStory.likes}</p>
            <button onClick={() => handleDelete(selectedStory.Story.id)}> Delete Story </button>
            <button onClick={() => handleUpdate(selectedStory.Story.id)}> Update Story </button>
        </div>
    )
}


export default StoryDetail