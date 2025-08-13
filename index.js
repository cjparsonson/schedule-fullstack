const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.get('/custom-endpoint', (req, res) => {
    res.send('You have reached a custom endpoint!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
