const { response } = require('express');
const express = require('express'); //hoiab endas express faile, et meie 2pp t88taks
const app = express(); //meie rakendus kasutab expressi, paneme muutujad valmis



app.get('/', (req, res)=>{ // geti sisse kust tuleb p2ring, req ehk request adnmed tulevad kasutajalt
    console.log(req);
    res.send('Hello World!'); // res ehk response
}); 

app.get('/contact', (req, res)=>{ 
    console.log(req);
    res.send('Tel: 123 456 789'); 
});
app.get('*', (req, res)=>{ // t2rn on n8 k6ik, et kui neid kindlaid vsteid pole, siis tuleb
    res.send("404 not found");
});

app.listen(3000, function(){ //minu 2pp ootab p2ringut, 3000 on pordinr
    console.log("Server is running on 3000"); // k2sureale -> npm start -> ctrl c server peatab t88
});