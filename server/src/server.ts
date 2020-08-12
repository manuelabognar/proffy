import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Manu', age: 31 },
        { name: 'Nat', age: 26 },
    ];

    return response.json(users);
});

app.listen(3333);