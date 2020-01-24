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


router.delete('/',(req,res)=>{
    let deletion = `DELETE FROM tnotesapi1.tearecords
       WHERE primary_key = ${req.params.index}`
     console.log(`req.params.index is ${req.params.index}`)


    client.query(deletion, (err)=>{
        if(err){
            console.error(`Record Query error, ${err.stack}`)
            res.end();
        }else{
            console.log('Item has been deleted from dB')
            res.send()
        }
    })
   

})

module.exports = router;