# Deployment Guide - HW4

## Backend Deployment (Render)

### Step 1: Prepare Repository
1. Make sure all code is committed and pushed to GitHub
2. The `server/` folder should be in your repository

### Step 2: Deploy to Render
1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** `feane-bistro-api` (or your choice)
   - **Root Directory:** `server` (important!)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

### Step 3: Environment Variables
Add these in Render dashboard:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NODE_ENV`: `production`
- `PORT`: Render will set this automatically

### Step 4: Deploy
- Click "Create Web Service"
- Wait for deployment to complete
- Copy your backend URL (e.g., `https://feane-bistro-api.onrender.com`)

### Step 5: Seed Database
After deployment, you can seed the database by:
- Using Render's shell: `cd server && npm run seed`
- Or run locally with the Render database URL

## Frontend Deployment (Vercel)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Set Environment Variable
Create `.env.production` in the root:
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```
(Replace with your actual Render backend URL)

### Step 3: Deploy to Vercel
```bash
cd "C:\Users\tanki\Web Dev Class\HW4"
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **feane-bistro** (or your choice)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Add Environment Variable in Vercel
1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add: `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
4. Redeploy

### Alternative: Deploy via GitHub
1. Go to https://vercel.com
2. Import your GitHub repository
3. Configure:
   - Framework Preset: **Vite**
   - Root Directory: **./** (root)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variable: `VITE_API_URL`
5. Deploy

## After Deployment

1. **Test Backend:** Visit `https://your-backend.onrender.com/api/health`
2. **Test Frontend:** Visit your Vercel URL
3. **Verify:**
   - Menu loads from database
   - Orders save to database
   - Check MongoDB Atlas to see orders

## Troubleshooting

- **CORS errors:** Backend CORS is already configured to allow all origins
- **API not connecting:** Check `VITE_API_URL` environment variable
- **Database connection:** Verify MongoDB Atlas network access allows Render's IPs

