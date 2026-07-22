# Strides of Harmony — Nordic Walking for Recovery

A modern, accessible landing page for **Strides of Harmony**, a free Nordic Walking programme run by **The Community Boxing Gym Leicester** in partnership with **Turning Point UK**.

![Strides of Harmony](https://www.stridesofharmony.thecommunityboxinggym.co.uk/logo.png)

---

## 🌿 About the Project

**Strides of Harmony** is a community-led Nordic Walking initiative designed specifically for people in the recovery community and those facing barriers to traditional fitness. The programme is delivered by **INWA-certified instructors** (International Nordic Walking Federation) and offers free, weekly sessions in Leicester.

### Key Features

- **Free Nordic Walking Sessions** — No cost, no commitment, open to everyone
- **INWA Certified Training** — Delivered using the internationally recognised INWA 10 Step Method™
- **Recovery-Focused** — Specifically designed for people overcoming addiction and substance use
- **Inclusive & Accessible** — For anyone facing physical, emotional, social, or financial barriers to fitness
- **Community Support** — Part of a wider support network through Turning Point UK

---

## 🎯 Website Overview

This repository contains the landing page for Strides of Harmony, built with modern web technologies to ensure accessibility, performance, and visual impact.

### Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter (lightweight client-side routing)
- **Build Tool**: Vite
- **Hosting**: Manus (autoscaling serverless)

### Project Structure

```
client/
  public/           # Favicon, robots.txt, manifest.json
  src/
    pages/          # Page components (Home, NotFound)
    components/     # Reusable UI components & shadcn/ui
    contexts/       # React context providers
    hooks/          # Custom React hooks
    lib/            # Utility functions
    index.css       # Global styles & design tokens
    App.tsx         # Routes & layout
    main.tsx        # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22.13.0+
- pnpm (package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/TheCommunityBoxingGym/Strides-Of-Harmony-.git
cd Strides-Of-Harmony-

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm preview
```

---

## 📋 Key Sections

### 1. **Hero Section**
Compelling headline: "Step Into New Possibilities" with a call-to-action to join the first walk.

### 2. **About Strides of Harmony**
Overview of the programme, partnership with Turning Point, and INWA certification.

### 3. **INWA 10 Step Method™**
Educational section detailing the biomechanics of Nordic Walking and the internationally recognised technique taught by INWA-certified instructors.

### 4. **What to Expect on a Session**
Three vibrant gradient-framed cards showing:
- **Warm Welcome** — Arrival and technique instruction
- **Expert Guidance** — Main walk with professional instruction
- **Celebrate Progress** — Cool-down, social time, and community connection

### 5. **Discover the Power of Nordic Walking**
Powerful transformation messaging for the recovery community with:
- Three pillar cards: "Leave It Behind", "Rebuild Yourself", "Never Walk Alone"
- Dynamic entrance animations
- Recovery-focused imagery and messaging

### 6. **Benefits of Nordic Walking**
Detailed breakdown of physical, mental, and social benefits, including:
- 90% body muscle engagement with specific muscle groups named
- Comparison to running and other fitness activities
- Low-impact, accessible movement

### 7. **More Than Just a Walk**
Partnership messaging with Turning Point and holistic support approach.

### 8. **Call-to-Action**
Strong, urgent CTA: "Do not Walk Alone, Join Us" with registration link.

### 9. **Footer**
Contact information, quick links, and partner logos (Turning Point, NHS, INWA).

---

## 🎨 Design Philosophy

The site follows a **Nordic-inspired, recovery-focused design language**:

- **Colour Palette**: Forest greens, ocean blues, warm golds (representing nature, calm, hope)
- **Typography**: Bold, readable fonts with clear hierarchy
- **Imagery**: Authentic community photos, natural landscapes, diverse representation
- **Animations**: Purposeful, energetic motion that reflects transformation and movement
- **Accessibility**: WCAG-compliant contrast, keyboard navigation, semantic HTML

---

## 🔧 Customization

### Updating Content

All text content is in `client/src/pages/Home.tsx`. Edit the JSX directly to update copy, headings, and descriptions.

### Changing Colours

Global design tokens are defined in `client/src/index.css` under the `@layer base` section. Update CSS variables to change the entire site's colour scheme.

### Adding Images

Images are stored in `/home/ubuntu/webdev-static-assets/` and uploaded to Manus storage. Reference them using the returned storage paths in the code.

### Modifying Animations

Animations are defined in `client/src/index.css` under `@keyframes`. Adjust timing, easing, and transforms to customize motion.

---

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1280px and above)
- Tablet (768px to 1279px)
- Mobile (375px to 767px)

All components adapt gracefully to smaller screens with adjusted typography, spacing, and layout.

---

## ♿ Accessibility

- **WCAG 2.1 Level AA** compliance
- Semantic HTML structure
- Keyboard navigation support
- High contrast text and interactive elements
- Alt text for all images
- Focus indicators on interactive elements
- Reduced motion support via `prefers-reduced-motion`

---

## 🌐 Domains

The site is available at:
- **Primary**: www.stridesofharmony.thecommunityboxinggym.co.uk
- **Manus**: strides-harm-5mbyktmv.manus.space

---

## 📞 Contact & Support

**Strides of Harmony**
- Run by: The Community Boxing Gym Leicester
- In partnership with: Turning Point UK
- INWA Certified Instructors
- Email: [contact information]
- Phone: [phone number]

---

## 🤝 Contributing

To contribute to this project:

1. **Fork the repository** on GitHub
2. **Create a feature branch** (`git checkout -b feature/your-feature`)
3. **Make your changes** and commit (`git commit -m 'Add your feature'`)
4. **Push to your branch** (`git push origin feature/your-feature`)
5. **Open a Pull Request** with a clear description of changes

### Code Standards

- Follow the existing code style and structure
- Use TypeScript for type safety
- Keep components modular and reusable
- Write semantic, accessible HTML
- Test changes on mobile and desktop

---

## 📄 License

This project is proprietary to The Community Boxing Gym Leicester and Turning Point UK. Unauthorized use, reproduction, or distribution is prohibited.

---

## 🙏 Acknowledgments

- **INWA (International Nordic Walking Federation)** — For the globally recognised INWA 10 Step Method™ and certification
- **Karen Ingram** — INWA International Trainer and Head of Education
- **Turning Point UK** — For partnership and support in making this programme possible
- **The Community Boxing Gym Leicester** — For hosting and delivering Strides of Harmony

---

## 📊 Project Status

**Status**: Active & Growing  
**Last Updated**: July 2026  
**Version**: 1.0.0

---

## 🚀 Deployment

This site is hosted on **Manus** with autoscaling serverless infrastructure. To publish updates:

1. Make changes to the code
2. Test locally with `pnpm dev`
3. Create a checkpoint in the Manus Management UI
4. Click the **Publish** button to deploy

---

**Start gently. Build confidence. Feel connected.**

*Strides of Harmony — Nordic Walking for Recovery*
