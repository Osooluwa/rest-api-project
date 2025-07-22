let items = []; // In-memory store
let idCounter = 1;

exports.getItems = (req, res) => {
  res.json(items);
};

exports.createItem = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const newItem = { id: idCounter++, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const item = items.find(i => i.id === parseInt(id));
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = name || item.name;
  res.json(item);
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted" });
};
