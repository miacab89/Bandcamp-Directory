const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const morgan = require('morgan'); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Welcome to the Directory :)');
});

app.listen(PORT, function() {
    console.log('App listening on port 3000!')
});