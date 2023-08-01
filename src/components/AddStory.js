import React, { useContext, useState } from 'react'
import Adventshare from '../APIs/Adventshare'
import { StoriesContext } from '../context/StoriesContext'

const AddStory = () => {
    const {addStories} = useContext(StoriesContext)
    const [character, setCharacter] = useState("")
    const [party, setParty] = useState("")
    const [story, setStory] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Adventshare.post("/", {
                character: character,
                party: party,
                story: story
            });
            addStories(response.data)
            console.log(response)
        } 
        catch (err) {
            console.log(err)
        }
    }

    return (

        <div>
            <form>
                <input value={character} onChange={e => setCharacter(e.target.value)} type="text" placeholder='Character Name' /> 
                <input value={party} onChange={e => setParty(e.target.value)} type="text" placeholder='Party Name' /> 
                <input value={story} onChange={e => setStory(e.target.value)} type="text" placeholder='Story Entry' /> 
            </form>

            <button type="submit" onClick={handleSubmit}> Add Story </button>
        </div>
       
    )
}

export default AddStory