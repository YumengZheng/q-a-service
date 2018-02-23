
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const dumbData = require('../dumbData');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static('../client/public'))

app.get('/test', (req, res) => {
    if (!dumbData.simpleData){
        res.status(404).json({message: 'no data here'})
    }
    res.json(dumbData.simpleData);
});

app.get('/test/:id', (req, res) => {
    const requestId = req.params.id;

    let item = dumbData.simpleData.filter((question) => {
        return requestId == question.id;
    })

    res.json(item);
})

app.listen(port, () => console.log('Example app listening on port 3000!')); 
