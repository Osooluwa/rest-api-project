# REST API Project

This is a RESTful API built with Node.js and Express for managing items.

## Endpoints

- GET `/api/items`
- POST `/api/items`
- GET `/api/items/:id`
- PUT `/api/items/:id`
- DELETE `/api/items/:id`


## 📦 Installation

```bash
npm install
npm start### POST /api/items

Create a new item.

**Request:**
```json
{
  "name": "Bread",
  "description": "Freshly baked"
}

