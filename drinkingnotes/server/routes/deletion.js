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
        console.log('Connected to postgres database for Delete.')
    })
    .catch((err)=>{
        console.log(`Connection error: ${err.stack}`)
})


router.delete('/:index',(req,res)=>{
    var item = req.params.index;
    console.log(typeof(item))
    console.log(`req.params.index is ${req.params.index}`)
  
    
    let deletion = `DELETE FROM tnotesapi1.tearecords
       WHERE primary_key = ${item}`
     
    console.log(deletion)

    client.query(deletion, (res,err)=>{
        if(err){
            console.log(err)
            console.log(err.stack)
            
        }else{
            console.log('Item has been deleted from dB')
            res.send()
        }
    })
   

})

module.exports = router;