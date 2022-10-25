var express = require('express');
var app = express();
const axios = require('axios');
app.set("view engine", "ejs");
app.use('/static', express.static("public"));

// function between(min, max) {  
//     return Math.floor(
//       Math.random() * (max - min) + min
//     )
//   }


app.get('/', function (req, res) {
     random = Math.floor(Math.random() * 2500) +1;

let imgURL = `https://xkcd.com/${random}/info.0.json`;
    axios.get(imgURL).then(function (response) {
        res.render('todo.ejs', { comicData: response.data });
    });
});



app.listen(3000, function () {
    console.log('App listening on port 3000')
})