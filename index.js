const express = require('express');
const router = require('./src/routes');
const cors = require('cors'); // Importe o pacote cors
const app = express()
const port = 3333;

app.use(cors()); // Use o middleware cors para permitir requisições de outras origens
app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})