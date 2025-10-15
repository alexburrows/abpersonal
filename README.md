# Alex Burrows - Personal Portfolio

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Netlify

## 🛠️ Features

- ✨ Modern, clean, and professional design
- 📱 Fully responsive (mobile-first approach)
- 🎨 Uses primary brand color (#00509e)
- 🌓 Dark mode support
- ⚡ Optimized performance with Next.js 15
- 🎯 SEO-friendly with proper metadata
- 👔 Professional CTO & Solution Architect positioning
- 🏢 Showcase of enterprise clients (PwC, BBC, Pfizer, Toyota, etc.)
- 💼 Expertise and leadership areas
- 🔗 Integration with GitHub profile and projects
- 📝 Blog section featuring Medium articles
- 🎯 Drupal.org contributions showcase
- 📊 GitHub achievements and statistics
- 📧 Contact section with social links (GitHub, LinkedIn, Medium, Drupal.org)
- 📱 Mobile-friendly navigation with hamburger menu
- ⬆️ Scroll-to-top button

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This site is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js configuration
3. Deploy settings are configured in `netlify.toml`

Alternatively, you can deploy manually:

```bash
npm run build
```

Then upload the `.next` directory to your Netlify site.

## 📝 Customization

### Update Personal Information

Edit the following components in `/components`:

- `hero.tsx` - Main introduction, title, and call-to-action
- `expertise.tsx` - Leadership areas and expertise domains
- `clients.tsx` - Enterprise clients and organizations
- `tech-stack.tsx` - Your skills and technologies
- `achievements.tsx` - GitHub statistics and achievements
- `drupal-contributions.tsx` - Drupal.org contributions and projects
- `projects.tsx` - Featured GitHub repositories
- `blog.tsx` - Medium articles and blog posts
- `contact.tsx` - Contact information and social links

### Adding Your Medium Articles

To add your actual Medium articles, edit `/components/blog.tsx`:

1. Replace the placeholder articles in the `articles` array with your real Medium posts
2. Update each article object with:
   - `title`: Article title
   - `excerpt`: Brief description
   - `date`: Publication date (YYYY-MM-DD format)
   - `readTime`: Estimated reading time
   - `tags`: Array of relevant tags
   - `url`: Full URL to the Medium article

Example:
```tsx
{
  title: "Your Article Title",
  excerpt: "Brief description of your article...",
  date: "2024-03-15",
  readTime: "5 min read",
  tags: ["Next.js", "React"],
  url: "https://medium.com/@aburrows/your-article-slug"
}
```

**Tip**: You can fetch your Medium RSS feed at `https://medium.com/feed/@aburrows` to get your latest articles programmatically.

### Styling

The primary color is defined in `/app/globals.css`:

```css
--primary: #00509e;
--primary-dark: #003d7a;
```

## 📄 License

© 2024 Alex Burrows. All rights reserved.

## 🔗 Links

- [GitHub](https://github.com/alexburrows)
- [LinkedIn](https://www.linkedin.com/in/alexburrows/)
- [Digidrop](https://digidrop.io)
