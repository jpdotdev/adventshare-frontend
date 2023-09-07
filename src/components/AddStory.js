import React, { useContext, useState } from 'react'
import Adventshare from '../APIs/Adventshare'
import { StoriesContext } from '../context/StoriesContext'
import useLocalState from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'

const AddStory = () => {


    const {addStories} = useContext(StoriesContext)
    const [character, setCharacter] = useState("")
    const [party, setParty] = useState("")
    const [story, setStory] = useState("")
    const [jwt, setJwt] = useLocalState('', 'jwt')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Adventshare.post("/stories", {
                character: character,
                party: party,
                story: story
            }, {
                headers: {
                  authorization: `bearer ${jwt}`
                }
            });
            addStories(response.data)
            console.log(response)
            window.location.href = '/stories'
            
        } 
        catch (err) {
            console.log(err)
            if (err.response.status == 401) {
                setJwt('')
                window.location.href = '/login'
            }
        }
    }

    return (

        <div>
            <form>
                <input value={character} onChange={e => setCharacter(e.target.value)} type="text" placeholder='Character Name' /> 
                <input value={party} onChange={e => setParty(e.target.value)} type="text" placeholder='Party Name' /> 
                <textarea value={story} onChange={e => setStory(e.target.value)} type="text" placeholder='Story Entry' /> 
            </form>

            <button type="submit" onClick={handleSubmit}> Add Story </button>
        </div>
       
    )
}

export default AddStory