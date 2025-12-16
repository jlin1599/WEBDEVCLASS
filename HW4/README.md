# Homework 4 - Full Stack Restaurant Application

Full-stack restaurant web application with React frontend, Node.js/Express backend, and MongoDB database.

## Features

- ✅ **Menu Management**: All menu items stored in MongoDB
- ✅ **Order Processing**: Orders saved to database
- ✅ **Data Persistence**: All changes persisted in MongoDB
- ✅ **REST API**: Complete API endpoints for menu and orders
- ✅ **React Frontend**: Fetches data from API
- ✅ **Shopping Cart**: Full cart functionality with API integration

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- CORS

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running (or MongoDB Atlas account)

### 1. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
npm install
```

### 2. Configure MongoDB

**Option A: Local MongoDB**
1. Make sure MongoDB is running on `localhost:27017`
2. The default connection string is already set in `server/.env`

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string
3. Update `server/.env`:
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   ```

### 3. Seed the Database

```bash
cd server
npm run seed
```

This will populate the database with menu items.

### 4. Start the Backend Server

```bash
cd server
npm run dev
```

Server will run on `http://localhost:5000`

### 5. Start the Frontend

In a new terminal:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/featured` - Get featured menu items
- `GET /api/menu/category/:category` - Get items by category (starters, mains, desserts)
- `GET /api/menu/:id` - Get single menu item

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `PATCH /api/orders/:id/status` - Update order status

## Project Structure

```
HW4/
├── server/           # Backend (Node.js/Express)
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── scripts/      # Database seeding
│   └── server.js     # Main server file
├── src/              # Frontend (React)
│   ├── components/   # React components
│   └── services/     # API service functions
└── public/           # Static assets
```

## Environment Variables

**Backend (`server/.env`):**
```
MONGODB_URI=mongodb://localhost:27017/feane-bistro
PORT=5000
```

**Frontend (`.env`):**
```
VITE_API_URL=http://localhost:5000/api
```

## Deployment

### Backend (Render)
1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repo
5. Set Root Directory to `server`
6. Add environment variable: `MONGODB_URI` (your Atlas connection string)
7. Deploy and copy your backend URL

### Frontend (Vercel)
1. Install Vercel CLI: `npm i -g vercel`
2. Create `.env.production` with: `VITE_API_URL=https://your-backend.onrender.com/api`
3. Run: `vercel` in the root directory
4. Or deploy via GitHub: Import repo → Add `VITE_API_URL` env var → Deploy

See `DEPLOYMENT.md` for detailed step-by-step instructions.

## Development

- Backend: `cd server && npm run dev`
- Frontend: `npm run dev`
- Seed DB: `cd server && npm run seed`
