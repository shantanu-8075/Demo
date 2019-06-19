const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app =  express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.post('/demoResponse', (req, res) => {
    console.log(req.body);
    var user = req.body;

    if( user.userName === user.password ) {
        res.send({
            message: user.userName
        });
    } else {
        res.status(401).json({
            "message": "Error"
        });
    }
});

app.listen(PORT, () => {
    console.log('Server Listening to '+PORT);
});

