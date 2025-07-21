# Shantanu Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Modern React components with Framer Motion animations
- Responsive design with Tailwind CSS
- Built with Vite for fast development and optimized builds
- Automated deployment to GitHub Pages

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/shantanu2741/shantanu_portfolio.git
   cd shantanu_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automated deployment to GitHub Pages using the `gh-pages` package.

### Deployment Setup

The following configuration is already in place:

1. **Homepage URL**: Set in `package.json` to match the GitHub Pages URL
2. **Build Configuration**: Vite is configured with the correct base path
3. **Deploy Scripts**: Automated scripts for building and deploying
4. **Dependencies**: `gh-pages` package included as a dev dependency

### Deployment Process

To deploy the portfolio to GitHub Pages:

1. **Ensure all changes are committed and pushed** to the main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Run the `predeploy` script to build the project
   - Push the built files to the `gh-pages` branch
   - Make the site available at https://shantanu2741.github.io/shantanu_portfolio

### Deployment Scripts

The following npm scripts are available for deployment:

- `npm run predeploy`: Builds the project for production
- `npm run deploy`: Deploys the built project to GitHub Pages
- `npm run build`: Creates a production build only

### GitHub Pages Configuration

After the first deployment, ensure GitHub Pages is configured correctly:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **Branch**: `gh-pages`
5. Select **Folder**: `/ (root)`
6. Save the configuration

### Automatic Deployment

The site will be automatically updated whenever you run `npm run deploy`. The deployment process:

1. Builds the project using Vite
2. Optimizes assets for production
3. Pushes the built files to the `gh-pages` branch
4. GitHub Pages automatically serves the updated content

### Troubleshooting

If deployment fails:

1. **Check Node.js version**: Ensure you're using Node.js 16 or higher
2. **Verify dependencies**: Run `npm install` to ensure all packages are installed
3. **Build locally first**: Run `npm run build` to check for build errors
4. **Check GitHub permissions**: Ensure you have push access to the repository
5. **Clear cache**: Try deleting `node_modules` and `package-lock.json`, then run `npm install`

### Live Site

The portfolio is deployed and available at: https://shantanu2741.github.io/shantanu_portfolio

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Swiper** - Modern touch slider
- **gh-pages** - GitHub Pages deployment tool

## License

This project is personal portfolio website.