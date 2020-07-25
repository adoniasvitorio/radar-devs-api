const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.t2jhc.mongodb.net/omnistack-database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.get('/', (request, response) =>{
    return response.json({message: 'hello world'});
});

app.listen(3333);