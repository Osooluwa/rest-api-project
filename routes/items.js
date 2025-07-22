// routes/items.js
const express = require('express');
const router = express.Router();

let items = []; // In-memory array
let idCounter = 1;

// GET /api/items
router.get('/', (req, res) => {
  res.json(items);
});

// POST /api/items
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newItem = { id: idCounter++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /api/items/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const item = items.find(item => item.id === parseInt(id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  item.name = name || item.name;
  res.json(item);
});

// DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(item => item.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
