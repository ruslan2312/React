const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost/user-db", { useNewUrlParser: true,  });


app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(27017, () => {
    console.log('server.listen')
});