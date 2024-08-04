const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let orders = [];

// Route per ottenere il menu
app.get('/menu', (req, res) => {
    res.json([
        { id: 1, name: 'Moet', price: 80, category: 'Bevande' },
        { id: 2, name: 'Cliquot Vocque', price: 60, category: 'Bevande' },
        { id: 3, name: 'Falanghina Beneventana', price: 13, category: 'Bevande' },
        { id: 4, name: 'Frittura calamari e gamberi', price: 15, category: 'Cibo' },
        { id: 5, name: 'Tagliata black angus', price: 8, category: 'Cibo' },
        { id: 6, name: 'Pepsi spina', price: 2.50, category: 'Bevande' },
        { id: 7, name: 'Fanta', price: 2.50, category: 'Bevande' },
        { id: 8, name: 'Estate pesca limone', price: 2.50, category: 'Bevande' },
        { id: 9, name: 'Becks', price: 3.00, category: 'Bevande' },
        { id: 10, name: 'Corona', price: 3.50, category: 'Bevande' },
        { id: 11, name: 'Tennets', price: 3.50, category: 'Bevande' },
        { id: 12, name: 'Gin tonic special', price: 10, category: 'Bevande', options: ['Gin', 'Tonico'] },
        { id: 13, name: 'Spritz', price: 5, category: 'Bevande' },
        { id: 14, name: 'Granita', price: 3, category: 'Cibo' }
    ]);
});

// Route per gli ordini
app.post('/orders', (req, res) => {
    orders.push(req.body);
    res.status(201).send('Ordine ricevuto');
});

// Route per visualizzare gli ordini
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
