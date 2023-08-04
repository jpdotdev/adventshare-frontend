import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:8000'
});


// Dev DB
// http://127.0.0.1:8000/

// Prod DB 
// https://adventshare.onrender.com/