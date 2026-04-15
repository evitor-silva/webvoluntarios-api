const express = require('express');
const router = require('./src/routes');
const cors = require('cors'); // Importe o pacote cors
const app = express()
const port =  process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})