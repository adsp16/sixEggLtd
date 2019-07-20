const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');



//initialise app
const app = express();

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//body-parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure dotenv
dotenv.config()

//ejs middleware
app.set('view engine', 'ejs');
app.set('views', 'views');


//Set Router
const pageRoutes = require('./routes/page');

app.use(pageRoutes);





//compression middleware 
app.use(compression());

//var for port 
const port = process.env.PORT || 5000;

//listen to ports for requests
app.listen(port, () => {

    console.log(`Server started on port ${port}`);

});