# Simple Link Website

A clean, minimal single-page website built with React and Vite to showcase all your important links in one place. Perfect for social media bios, business cards, or as a personal landing page.

## Features

- 🎨 **Clean & Modern Design** - Minimal, responsive layout that looks great on all devices
- 📱 **Mobile-First** - Optimized for mobile devices with responsive breakpoints
- ♿ **Accessible** - Built with semantic HTML and ARIA attributes for screen readers
- ⚡ **Fast** - Built with Vite for lightning-fast development and optimized builds
- 🎯 **SEO-Friendly** - Proper meta tags and semantic structure
- 🌈 **Gradient Background** - Beautiful gradient background with glassmorphism card design

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download this project** to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd simple-link-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

**Run the development server**:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173`. The page will automatically reload when you make changes to the source files.

### Building for Production

**Create a production build**:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

**Preview the production build locally**:
```bash
npm run preview
```

## Customization

### Updating Your Information

Edit `src/App.jsx` to customize:

1. **Profile Information** (lines 32-42):
   - Change the avatar initials in `<span className="avatar-text">AF</span>`
   - Update the title: `<h1 className="title">Your Name</h1>`
   - Modify the subtitle/description

2. **Links Array** (lines 5-31):
   - Update the `links` array with your own URLs and descriptions
   - Add or remove links as needed
   - Each link object should have: `id`, `label`, `url`, and `description`

### Styling

- **Colors & Theme**: Edit `src/App.css` to change colors, fonts, and spacing
- **Background**: Modify the gradient in `src/index.css` (body background)
- **Avatar**: Replace the text avatar with an image by updating the avatar section in `App.jsx`

### Adding a Custom Avatar Image

Replace the text avatar with your photo:

1. Add your image file to the `public` folder (e.g., `public/avatar.jpg`)
2. In `App.jsx`, replace the avatar div with:
   ```jsx
   <img 
     src="/avatar.jpg" 
     alt="Your Name" 
     className="avatar-image"
   />
   ```
3. Add corresponding CSS for `.avatar-image` in `App.css`

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm run build
   vercel --prod
   ```

   Or simply push to GitHub and connect your repository at [vercel.com](https://vercel.com).

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy
   - Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **DigitalOcean App Platform**
- **Surge.sh**

## Project Structure

```
simple-link-website/
├── public/
│   └── vite.svg              # Vite favicon
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Component-specific styles
│   ├── index.css            # Global styles and reset
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom CSS with flexbox and grid
- **HTML5** - Semantic markup with accessibility features

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Feel free to submit issues and enhancement requests!

---

**Tip**: This website works great as a GitHub Pages site, Vercel deployment, or any static host. Perfect for your social media bio link!