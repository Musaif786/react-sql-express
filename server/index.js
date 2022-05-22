const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//import extension need to be install and write here
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//sql connection
const mysql = require("mysql");  
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Musaif@8143",
    database: "cruddatabase",
});

app.post("/signup", (req,res)=>{
    //this both are coming from frontend
    const movie = req.body.movie;
    const review = req.body.review;
    const rating = req.body.rating;

    const sqlInsert = "INSERT INTO movie_reviews (moviename,moviereview,rating) values(?,?,?);"
    db.query(sqlInsert,[movie,review,rating], (err,result) => {
       console.log(err)  
    });
})

app.listen(3001, ()=>{
    console.log("3001 server running")
})



// const sqlInsert = "INSERT INTO movietwo (moviename,moviereview) values('Musaif','good good');"