# Ghibli Portfolio 🎨

A beautiful, aesthetic portfolio website inspired by Studio Ghibli with dark/light mode toggle and glassmorphic floating project cards.

## Features ✨

- **Studio Ghibli Aesthetic**: Soft colors, gentle animations, and beautiful typography
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Glassmorphic Design**: Modern glass effect cards with frosted glass aesthetic
- **Floating Animations**: Smooth floating animations on project cards
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Vite

## Color Palette 🎭

- **Cream**: #FAF6F1 (Light background)
- **Sage**: #7FA99D (Accent color)
- **Coral**: #E5815C (Primary accent)
- **Soft Blue**: #6B9BC3 (Secondary accent)
- **Forest**: #2D5016 (Dark accent)

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure 📁

```
src/
├── components/
│   ├── Header.tsx      # Navigation and theme toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── Projects.tsx    # Glassmorphic project cards
│   ├── About.tsx       # About section
│   └── Contact.tsx     # Contact section
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Tailwind styles

Configuration files:
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization 🎨

### Change Colors

Edit `tailwind.config.ts` to customize the Ghibli color palette:

```typescript
colors: {
  ghibli: {
    cream: '#FAF6F1',
    sage: '#7FA99D',
    coral: '#E5815C',
    softblue: '#6B9BC3',
    forest: '#2D5016',
  },
}
```

### Add Your Projects

Edit `src/components/Projects.tsx` and update the `projects` array with your own project data.

### Customize Text

Update content in individual components:
- `Header.tsx` - Navigation links
- `Hero.tsx` - Welcome message
- `About.tsx` - About section
- `Contact.tsx` - Contact information

## Technologies Used 🛠️

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS transformations

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips ⚡

- The portfolio uses smooth transitions and animations
- Glassmorphism effects use `backdrop-blur-md` for performance
- Images and animations are optimized for 60fps

## License 📄

This project is open source and available under the MIT License.

## Credits 🙏

Inspired by the beautiful aesthetics of Studio Ghibli films and modern glassmorphism design trends.

---

Made with 💜 and artistic inspiration
