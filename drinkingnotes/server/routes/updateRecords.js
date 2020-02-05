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


router.update()