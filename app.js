var express = require('express');
var app = express();
const axios = require('axios');
app.set("view engine", "ejs");
app.use('/static', express.static("public"));

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  imgURL = ["https://xkcd.com/{}/info.0.json".replace("{}", between(1,999))]


app.get('/', function (req, res) {
    axios.get(imgURL).then(function (response) {
        res.render('todo.ejs', { comicData: response.data });
    });
});



app.listen(3000, function () {
    console.log('App listening on port 3000')
})