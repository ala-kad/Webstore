const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

async function main() {
    app.get('/', (req, res) => {
        res.send('Hello World!');
        });
    
    app.listen(process.env.PORT, () => {
        console.log('Example app listening on port 3000!');
    });    
    try {
        await mongoose.connect('mongodb+srv://alakad:admin@mycluster.8ygtgeo.mongodb.net/?retryWrites=true&w=majority/webstore', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to database');
    }catch(err) {
        console.log(err);
    }
    mongoose.connection.on('error', err => {
        console.log(err);
    });
}

main();
