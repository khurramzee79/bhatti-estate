# Bhatti Estate & Builders Website

A modern, static real estate website built with Next.js, Tailwind CSS, and Netlify CMS.

## Features
- **Static Site Generation (SSG):** Fast, secure, and SEO friendly.
- **Admin Panel:** Manage Listings and Blog posts via Netlify CMS.
- **Search & Filter:** Find properties by location, price, and type.
- **WhatsApp Integration:** Direct chat link for agents.

## Deployment Instructions

### 1. Connect to Netlify
1. Push this code to a GitHub repository.
2. Log in to [Netlify](https://netlify.com) and click **"Add new site"** -> **"Import from an existing project"**.
3. Select GitHub and choose this repository.

### 2. Configure Build Settings
Netlify should auto-detect these, but ensure they match:
- **Build Command:** `npm run build`
- **Publish Directory:** `out`

### 3. Enable Identity & Git Gateway (Crucial for Admin Panel)
Once the site is deployed:
1. Go to **Site Settings > Identity** and click **"Enable Identity"**.
2. Scroll down to **Registration** and set it to **"Invite only"** (security measure).
3. Scroll further to **Services > Git Gateway** and click **"Enable Git Gateway"**.

### 4. Create the Admin User
1. Go to the **Identity** tab at the top.
2. Click **"Invite users"** and enter `info@bhattiestate.com` (or your email).
3. Check your email for the invite link. **Clicking it will prompt you to set a password.**

### 5. Accessing the CMS
Go to `https://bhattiestate.com/admin/`. Login with your email and new password. You can now add properties and blog posts!

## Project Structure
- `/content`: Markdown files for properties and blogs.
- `/public/assets`: Images and logo.
- `/pages`: Next.js routing.
- `netlify.toml`: Deployment configuration.