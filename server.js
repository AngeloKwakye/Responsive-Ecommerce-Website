const express = require('express');
const cors = require('cors');
const axios = require('axios'); // This allows you to make HTTP requests from your server

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/products', async (req, res)=>{
    try{
        const response = await axios('https://fakestoreapi.com/products');
        const data = response.data;
        res.json(data);
    }catch (error){
        res.status(500).send('Error teching data from external API')
    }
});

app.listen(PORT, ()=>{
    console.log(`server is rinning on http://localhost:${PORT}`)
})