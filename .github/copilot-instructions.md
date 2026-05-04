<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Ghibli Portfolio - Development Guidelines

## Project Overview
This is a modern React portfolio website with Studio Ghibli-inspired aesthetics, featuring dark/light mode toggle and glassmorphic floating project cards.

## Key Features
- Dark/Light mode toggle in Header component
- Glassmorphic floating cards for projects with hover animations
- Studio Ghibli color palette for consistent design
- Responsive design with Tailwind CSS
- Built with React, TypeScript, and Vite

## Development Workflow

### When Adding New Components
1. Create component in `src/components/`
2. Use the `glass` or `glass-dark` Tailwind classes for glassmorphic effects
3. Accept `isDark` prop for theme-aware styling
4. Use Lucide React icons for consistency
5. Follow the naming pattern: `ComponentName.tsx`

### When Adding New Sections
1. Create a new component file
2. Import in `App.tsx`
3. Add ID for anchor links (e.g., `id="projects"`)
4. Update navigation in `Header.tsx` if needed
5. Maintain consistent spacing with `py-20 px-4`

### When Styling
1. Use Tailwind CSS utilities primarily
2. Add custom styles to `src/index.css` if needed
3. Use the Ghibli color palette from `tailwind.config.ts`
4. Apply dark mode classes consistently: `dark:` prefix
5. Use custom animations: `animate-float`, `animate-shimmer`

### Color References
- Primary: `ghibli-coral` (#E5815C)
- Secondary: `ghibli-softblue` (#6B9BC3)
- Accent: `ghibli-sage` (#7FA99D)
- Light Background: `ghibli-cream` (#FAF6F1)
- Dark Background: `gray-900`

## Common Patterns

### Glassmorphic Card
```tsx
<div className="glass dark:glass-dark p-6 rounded-2xl">
  {/* content */}
</div>
```

### Theme-Aware Gradient Text
```tsx
<span className="ghibli-text-gradient">Text</span>
```

### Floating Animation
```tsx
<div className="animate-float" style={{ animationDelay: '2s' }}>
  {/* content */}
</div>
```

## Build & Deployment
- Development: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Important Notes
- Always test dark/light mode toggle when adding new elements
- Ensure animations respect `prefers-reduced-motion` for accessibility
- Keep animations subtle to maintain the calm Ghibli aesthetic
- Use semantic HTML for better accessibility
