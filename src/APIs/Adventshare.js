import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/stories'
});


// Dev DB
// http://127.0.0.1:8000/stories

// Prod DB 
// https://adventshare.onrender.com/stories