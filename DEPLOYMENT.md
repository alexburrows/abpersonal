# Deployment Guide for Netlify

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect Next.js settings
   - Click "Deploy site"

3. **Configure Domain (Optional):**
   - Go to Site settings → Domain management
   - Add your custom domain

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy:**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Build Settings

The site is pre-configured with `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

## Environment Variables

Currently, no environment variables are required. If you add any API keys or secrets in the future:

1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Post-Deployment

After deployment, your site will be available at:
- `https://your-site-name.netlify.app`

You can configure:
- Custom domain
- HTTPS (automatic)
- Build hooks for automatic deployments
- Branch deploys for preview environments

## Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node version matches (20+)

### Site Not Updating

1. Clear Netlify cache: Site settings → Build & deploy → Clear cache
2. Trigger a new deploy

### Performance Optimization

The site is already optimized with:
- Static page generation
- Automatic image optimization
- Code splitting
- Minification

For further optimizations, consider:
- Adding a CDN
- Enabling Netlify's Edge functions
- Configuring caching headers

