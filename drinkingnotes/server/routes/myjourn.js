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
        console.log('Connected to postgres database for Post.')
    })
    .catch((err)=>{
        console.log(`Connection error: ${err.stack}`)
})


router.post("/", (req,res)=>{
    const submission = {
         teaName:req.body.teaName,
         brew_vessel:req.body.vessel,
         aroma:req.body.aroma,
         head:req.body.head,
         body:req.body.body,
         tail:req.body.tail,
         notes:req.body.comments
    }

    // if(!submission.teaName || !submission.brew_style || !submission.aroma 
    //     || !submission.head || !submission.body || !submission.tail || !submission.field){
    //         res.status(411).send({message:"Empty description recieved"})
    //     }


    // if(!submission.teaName){
    //     res.status(411).send({message:"Empty TeaName"})
    // } else if (!submission.brew_vessel){
    //     res.status(411).send({message:"Empty Vessel"})
    // } else if (!submission.aroma){
    //     res.status(411).send({message:"Empty aroma"})
    // } else if(!submission.head){
    //     res.status(411).send({message:"Empty head"})
    // } else if (!submission.body){
    //     res.status(411).send({message:"Empty body"})
    // } else if(!submission.tail){
    //     res.status(411).send({message:"Empty tail"})
    // }else if(!submission.comments){
    //     res.status(411).send({message:"Empty comments"})
    // }


    let query = `INSERT INTO tnotesapi1.tearecords(date, tea_name, brew_vessel,aroma, 
        head, body, tail, notes)
        Values ( current_date, '${submission.teaName}','${submission.brew_vessel}', 
        '${submission.aroma}','${submission.head}','${submission.body}','${submission.tail}',
        '${submission.notes}') `

    client.query(query,(err,submission)=>{
        if(err){
            res.status(404).send({code:2343,message:`Error: ${err}`})
        }
        res.send(submission)
    })     
        


})


    

module.exports = router;