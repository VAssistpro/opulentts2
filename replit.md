# Overview

Opulent Transport Solutions is a luxury limousine service application built as a full-stack web platform. The project provides an elegant, interactive website for a premium transportation company offering luxury vehicle services in New York City. The application features a sophisticated design with animations, parallax effects, and an integrated booking system for clients to reserve luxury transportation services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using React 18 with TypeScript, utilizing a modern component-based architecture. The application uses Vite as the build tool and development server for optimal performance and development experience.

**Key Design Patterns:**
- Context-based state management for navigation, themes, and parallax effects
- Responsive design with separate desktop and mobile layouts
- Animation system using Framer Motion for smooth transitions
- Component composition pattern with reusable UI components

**UI Framework:**
- Tailwind CSS for styling with custom design system
- Shadcn/ui components for consistent UI elements
- Custom CSS variables for theme management
- Responsive breakpoints optimized for luxury brand presentation

**State Management:**
- React Context API for global state (navigation, theme, parallax)
- Local component state for UI interactions
- Custom hooks for reusable logic (media queries, event listeners, animations)

## Backend Architecture
The server uses Express.js with TypeScript in a minimal REST API structure. The application follows a clean architecture pattern with separated concerns for routing, storage, and business logic.

**Server Structure:**
- Express middleware for request logging and JSON parsing
- Modular route registration system
- Storage abstraction layer with in-memory implementation
- Development-specific Vite integration for hot reloading

**Database Design:**
- Drizzle ORM with PostgreSQL schema definitions
- User authentication schema with username/password
- Shared types between client and server for type safety

## External Dependencies

**Database & ORM:**
- Drizzle ORM for database operations and migrations
- Neon Database as PostgreSQL provider
- Connection pooling via connect-pg-simple

**UI & Styling:**
- Radix UI components for accessible UI primitives
- Tailwind CSS for utility-first styling
- Framer Motion for animations and transitions
- Lucide React for consistent iconography

**Development Tools:**
- Vite for build tooling and development server
- TypeScript for type safety across the stack
- ESBuild for production bundling
- Replit integration plugins for development environment

**Third-Party Services:**
- MyLimoBiz booking widget integration for reservation system
- EmailJS for contact form functionality
- Custom video hosting for background media content

**Communication & Forms:**
- React Hook Form with Zod validation for form management
- TanStack Query for server state management and caching
- Email service integration for client communications

The application prioritizes performance, accessibility, and luxury brand presentation through sophisticated animations, high-quality visual effects, and seamless user experience across all device types.

## Recent Enhancements (August 2025)

**Migration to Standard Replit Environment (August 18, 2025):**
- Successfully migrated entire project from Replit Agent to standard Replit environment
- Updated console layout centering for optimal screen positioning
- Improved footer layout with proper horizontal distribution:
  - Copyright on left corner
  - V Assist Pro logo and branding in center
  - Phone number on right corner
- All dependencies and workflows confirmed working in new environment

**Video Background Integration:**
- Successfully migrated video background functionality from Replit Agent environment
- Applied working video configuration with w-full, h-full, object-cover classes
- Integrated video background into main content container with proper positioning

**Dramatic Background Enhancement:**
- Implemented multi-layered lighting system with floating orbs and directional light rays
- Added atmospheric effects with particles, shimmer animations, and depth shadows
- Enhanced main content container with dramatic borders, inner glow, and film-like depth
- Created sophisticated vignette effects and noise textures for premium feel

**Visual Depth Features:**
- Multiple gradient layers for enhanced depth perception
- Complex radial lighting system with golden and blue accent lighting
- Floating particle system with individual glow effects and randomized animations
- Enhanced shadow casting with multi-layered vignette effects

**Leonardo.AI Style Glass Enhancement (August 19, 2025):**
- Implemented premium glassmorphic border effects inspired by Leonardo.AI interface design
- Added sophisticated plastic/glass light border with subtle luminous quality using gradient masking
- Enhanced console container with advanced backdrop blur and multi-layer border gradients
- Created authentic glass effect with backgroundImage gradient borders and backgroundClip technique
- Applied Leonardo-style glow animation with enhanced atmospheric lighting effects
- Integrated white light accent borders with colored glow halos for premium glass appearance