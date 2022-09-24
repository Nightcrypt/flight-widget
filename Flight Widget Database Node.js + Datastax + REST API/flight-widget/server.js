const PORT = 8000
const axios = require('axios').default // help to make GET request with the database
const express = require('express') // help with routing
const cors = require('cors') // help when the
const { response } = require('express')
require('dotenv').config() // help to get info from .env(where the API will be stored) 

const app = express()  
app.use(cors())

//syntax to do a GET request in express
app.get('/flights', (req, res) =>{
    const options = {
        url : `${process.env.URL}?page-size=6`,
        headers : {
            accept: 'application/json',
            'X-Cassandra-Token' : process.env.TOKEN
        }
    }

    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })


})

app.listen(PORT, () => console.log('running on port ' + PORT))