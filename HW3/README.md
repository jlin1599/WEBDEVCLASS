# Homework 3 - React Shopping Cart

This is a React rebuild of the shopping cart feature from Homework 2, styled with Tailwind CSS.

## Features

- ✅ Add items to cart
- ✅ View cart with item details
- ✅ Remove items from cart
- ✅ Adjust quantities
- ✅ Calculate total price
- ✅ Clear cart option
- ✅ Checkout functionality
- ✅ Mobile responsive design

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Hosting

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts
4. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`
4. Follow the prompts to create an account if needed

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript

