const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const itemsRouter = require('./routes/items');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
