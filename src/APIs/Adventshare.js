import axios from 'axios'

export default axios.create({
    baseURL: 'https://adventshare.onrender.com'
});


// Dev DB
// http://127.0.0.1:8000

// Prod DB 
// https://adventshare.onrender.com