const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require('./data/hotels.json');
const india = require('./data/india.json');
const bangladesh = require('./data/bangladesh.json');
const switzerland = require('./data/switzerland.json');


app.get('/', (req, res) =>{
    res.send('tour argentina server is running')
});

app.get('/hotels', (req, res) =>{
    res.send(hotels);
})

app.get('/hotels/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const hotel = hotels.find(ht => ht.id === id);
    res.send(hotel);

})

app.get('/india', (req, res) =>{
    res.send(india);
})

app.get('/india/:id', (req, res) =>{
    const id = req.params.id;
    const indiaNews = india.find(n => n.id == id);
    console.log('id', id, indiaNews)
    res.send(indiaNews);
})

app.get('/bangladesh', (req, res) =>{
    res.send(bangladesh);
})

app.get('/bangladesh/:id', (req, res) =>{
    const id = req.params.id;
    const bangladeshNews = bangladesh.find(ba => ba.id == id);
    res.send(bangladeshNews);
})

app.get('/switzerland', (req, res) =>{
    res.send(switzerland);
})

app.listen(port, () =>{
console.log(`Tour argentina running on port, ${port}`);
})