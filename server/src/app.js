
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://poushali26:0U8on2StHP5FNKo2@cluster0.jwwwcc8.mongodb.net/admindashboard?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});



