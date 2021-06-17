const express = require('express');
const helmet = require('helmet');
const pino = require('pino')();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
   res.send('Hello, World!');
});

app.get('/live', (req, res) => res.status(200).json({ status: 'ok' }));


app.listen(PORT, () => {
   pino.info(`Server listening on port ${PORT}`);
});

