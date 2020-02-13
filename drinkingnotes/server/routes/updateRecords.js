const express = require('express')
const router = express.Router();

const pg = require('pg');
const {Client} = pg



const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database:'Experimental_DrinkingNotes',
    password:'J0lieknits',
    port:'5432'
});

client.connect()
    .then(()=>{
        console.log('Connected to postgres database for PUT.')
    })
    .catch((err)=>{
        console.log(`Connection error: ${err.stack}`)
})

client.put('/:index',(req,res) =>{
    let query = `UPDATE tnotesapi1.tearecords
                `

});




router.update()