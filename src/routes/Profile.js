import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useLocalState from "../hooks/useLocalStorage"

import Adventshare from "../APIs/Adventshare"


const Profile = () => {

    let navigate = useNavigate()
    const [jwt, setJwt] = useLocalState('', 'jwt')

    const { id } = useParams()
    const [user, setUser] = useState('')
    const [userStories, setUserStories] = useState()

    useEffect(() => {
        const fetchProfile = async () => {

            try {
                const response = await Adventshare.get(`/users/${id}`)
                setUser(response.data)
            }
            catch (err) {
                console.log(err)
            }
            
        };

        fetchProfile()
    }, [id])


    useEffect(() => {
        const fetchUserStories = async () => {
            try {
                const response = await Adventshare.get('/stories')
                setUserStories(response.data)
            } catch(err) {
                    console.log(err)
            }
    }  

    fetchUserStories();

    }, [])

    const handleStorySelect = (id) => {
        navigate(`/stories/${id}`)
    }

    const filteredUserStories = userStories?.filter((s) => s.Story.user.id === id)
    console.log(filteredUserStories)


    const handleUserDelete = async (id) => {
        try { 
            const response = await Adventshare.delete(`/users/${id}`, {
            headers : {
                authorization: `bearer ${jwt}`
              }
        });
        console.log(response)
        navigate('/');

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <h1> {user.display_name} </h1>
            {filteredUserStories && filteredUserStories.map((item) => {
                return (
                    <div key={item.id}>
                        <h1 onClick={() => handleStorySelect(item.Story.id)}>Name: {item.Story.character}</h1> 
                        <h2>Party: {item.Story.party}</h2>
                        <p>{item.Story.story}</p>
                        <p>Created by: {item.Story.user.display_name}</p>
                        <p>Likes: {item.likes}</p>
                    </div>
                )   
            })}

            <button onClick={() => handleUserDelete(id)}>
                <span> Delete Account </span>
            </button>
        </div>
    )
}

export default Profile