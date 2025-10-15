# Customization Guide

This guide will help you customize your portfolio website with your own content.

## 📝 Blog Section

### Adding Your Medium Articles

The blog section in `/components/blog.tsx` currently contains placeholder articles. Here's how to add your real Medium posts:

1. **Manual Method** (Recommended for curating best posts):
   
   Open `/components/blog.tsx` and update the `articles` array:

   ```tsx
   const articles = [
     {
       title: "Your Actual Article Title",
       excerpt: "A compelling description of what the article covers...",
       date: "2024-03-15", // Publication date in YYYY-MM-DD format
       readTime: "5 min read",
       tags: ["Next.js", "React", "TypeScript"],
       url: "https://medium.com/@aburrows/your-article-slug-here"
     },
     // Add more articles...
   ];
   ```

2. **Finding Your Medium Articles**:
   
   - Visit your Medium profile: https://medium.com/@aburrows
   - Click on each article to get the full URL
   - Copy the title, tags, and estimated reading time
   - Write a brief excerpt (or use the article's subtitle)

3. **Getting Article Metadata**:
   
   You can view your Medium RSS feed to see all your articles:
   ```
   https://medium.com/feed/@aburrows
   ```

### Fetching Medium Posts Automatically (Advanced)

If you want to automatically fetch your latest Medium posts, you can create a server-side function:

1. Install the RSS parser:
   ```bash
   npm install rss-parser
   ```

2. Create a server action or API route to fetch and parse your Medium RSS feed

## 🎯 Drupal Contributions

### Updating Your Drupal.org Profile Information

Edit `/components/drupal-contributions.tsx` to showcase your actual Drupal contributions:

```tsx
const contributions = [
  {
    type: "Module/Distribution",
    name: "Your Module Name",
    description: "What your module does and its key features...",
    role: "Maintainer",
    icon: "🎯" // Choose an appropriate emoji
  },
  // Add more contributions...
];
```

**Finding Your Contributions**:
- Visit: https://www.drupal.org/u/aburrows
- Look at your "Projects" tab
- Check your "Issues" for major contributions
- Review your community involvement

## 📊 GitHub Statistics

### Updating Your GitHub Stats

Edit `/components/achievements.tsx` to reflect your current GitHub statistics:

```tsx
const stats = [
  { label: "Repositories", value: "32", icon: "📦" },
  { label: "Followers", value: "8", icon: "👥" },
  { label: "Following", value: "4", icon: "🤝" },
  { label: "Contributions", value: "1000+", icon: "💻" },
];
```

**Getting Accurate Stats**:
- Visit your GitHub profile: https://github.com/alexburrows
- Check your contribution graph for accurate numbers
- Update the values accordingly

### Adding/Removing Achievements

To add your actual GitHub achievements, update the `achievements` array:

```tsx
const achievements = [
  {
    name: "Achievement Name",
    description: "What you achieved",
    icon: "🏆"
  },
];
```

## 🚀 Featured Projects

### Customizing Your Project Showcase

Edit `/components/projects.tsx` to highlight your best work:

```tsx
const projects = [
  {
    name: "Project Name",
    description: "Brief description of what the project does",
    language: "TypeScript", // Primary language
    stars: 10, // Optional
    forks: 2,  // Optional
    url: "https://github.com/yourusername/project-name"
  },
];
```

**Tips for Choosing Projects**:
- Select projects that best demonstrate your skills
- Include diverse technologies
- Prioritize projects with good documentation
- Consider adding projects with notable stars/forks

## 🎨 Styling & Branding

### Changing the Primary Color

The primary color (#00509e) is defined in `/app/globals.css`:

```css
:root {
  --primary: #00509e;
  --primary-dark: #003d7a;
}
```

### Updating Meta Information

Edit `/app/layout.tsx` to update SEO metadata:

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your custom description...",
  keywords: ["Your", "Keywords"],
  // ... other metadata
};
```

## 📧 Contact & Social Links

### Adding/Removing Social Links

Edit `/components/contact.tsx` to customize your social links:

```tsx
const socialLinks = [
  {
    name: "Platform Name",
    url: "https://yourprofile.url",
    icon: (<svg>...</svg>) // Add the appropriate icon
  },
];
```

**Available Icons**:
- GitHub
- LinkedIn
- Medium
- Drupal.org
- Website/Portfolio
- Twitter/X
- Any other platform with an SVG icon

## 🔄 Keeping Content Updated

### Regular Updates Checklist

- [ ] Update blog section with latest Medium articles
- [ ] Refresh GitHub statistics monthly
- [ ] Add new projects as they're published
- [ ] Update tech stack when learning new technologies
- [ ] Keep Drupal contributions current
- [ ] Verify all links are working

## 🚀 Deployment

After making changes:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Netlify
git add .
git commit -m "Update portfolio content"
git push origin main
```

Netlify will automatically deploy your changes!

## Need Help?

- Check the [README.md](./README.md) for basic setup
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
- Visit [Next.js Documentation](https://nextjs.org/docs) for framework questions

