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
        console.log('Connected to postgres database for GET.')
    })
    .catch((err)=>{
        console.log(`Connection error: ${err.stack}`)
})

router.get('/',(req,res)=>{
    var records = 
    ` Select * 
      from tnotesapi1.tearecords`

    client.query(records,(err,record_results)=>{
        if(err){
            console.error(`Record Query Error, ${err.stack}`)
        }else {
            res.status(200).send(record_results.rows)
        }

    })
    
})


module.exports = router;