# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

1. **Create Account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select a cloud provider and region
   - Click "Create"

3. **Create Database User:**
   - Username: `feaneuser` (or your choice)
   - Password: Create a strong password (save it!)
   - Click "Create Database User"

4. **Network Access:**
   - Click "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add your current IP address

5. **Get Connection String:**
   - Click "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

6. **Update .env file:**
   - Replace `<username>` and `<password>` with your database user credentials
   - Add database name: `mongodb+srv://feaneuser:yourpassword@cluster0.xxxxx.mongodb.net/feane-bistro?retryWrites=true&w=majority`

## Option 2: Local MongoDB

1. **Install MongoDB:**
   - Download from https://www.mongodb.com/try/download/community
   - Install and start MongoDB service

2. **Start MongoDB:**
   - Windows: MongoDB should start automatically as a service
   - Or run: `mongod` in terminal

3. **Use default connection:**
   - Already set in `.env`: `mongodb://localhost:27017/feane-bistro`

