const express = require('express');
const app = express();
const port = 3000;
const tasksRoutes = require('./routes/tasksRoutes');

app.get('/', (req, res) => {
    res.send('Seja bem vindo a API do ToDo List!');
});

app.use(express.json());
app.use('/api', tasksRoutes);

app.listen(port, () => {
    console.log(`Servidor disponivel em http://localhost:${port}`);
});