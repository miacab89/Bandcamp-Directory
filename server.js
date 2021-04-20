const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bands = require('./bands.json')
const PORT = process.env.PORT || 3500; 


// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  res.send(bands); 
})

app.get('/bands', function(req, res) {
  res.json(bands)
})




app.listen(PORT, () => {
  console.log("Server is listening at Port 3500!")
}); 
  