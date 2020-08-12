import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => { 
    return response.json({ message: 'Olar' });
});

app.listen(3333);