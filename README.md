# StudioRes Newnan - Extended Stay Landing Page

A professional marketing landing page for StudioRes by Marriott in Newnan, Georgia, designed to attract project workers from major employers and data center developments in Coweta County.

## Overview

This landing page targets three key customer segments:
- **Construction Professionals** - Working on extended projects in the area
- **Tech Professionals** - Relocating for data center positions
- **Corporate Trainers** - Making recurring visits to the region

## Features

- **Cost Savings Calculator** - Shows $750/month savings with detailed breakdown
- **Professional Lifestyle Images** - Relatable imagery for each customer type
- **Amenities Showcase** - Full kitchen, free parking, on-site laundry, mobile key access
- **Location Information** - Proximity to major employers and project sites
- **Responsive Design** - Mobile-friendly and optimized for all devices
- **StudioRes Branding** - Matches official Marriott StudioRes brand colors and style

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd studiores-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
studiores-landing/
├── src/
│   ├── assets/           # Images (hotel photos, lifestyle images)
│   ├── components/       # Reusable UI components
│   ├── App.jsx          # Main landing page component
│   ├── App.css          # Styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Customization

### Update Booking Link

Find the "Book Now" button in `src/App.jsx` and replace the placeholder text with your actual booking system URL.

### Update Contact Information

Update phone numbers and email addresses in the contact sections throughout `src/App.jsx`.

### Modify Savings Calculations

The savings breakdown is in the "Cost Savings Section" of `src/App.jsx`. Adjust the numbers based on your local market research.

## Key Sections

1. **Hero Section** - Eye-catching header with call-to-action
2. **Special Offer Banner** - 15% discount for extended stays
3. **Why StudioRes** - Three key value propositions
4. **Room Showcase** - Photo gallery of studio rooms
5. **Cost Savings** - Detailed breakdown of monthly savings
6. **Amenities Grid** - 8 key amenities with icons
7. **Location Section** - Address and proximity information
8. **Use Cases** - Three customer personas with lifestyle images
9. **Marriott Trust** - Brand credibility section
10. **Booking Section** - Call-to-action with contact options
11. **FAQ** - Common questions from project workers

## Brand Colors

- Primary (Teal): `#006B7D`
- Accent (Orange): `#FF6B35`
- Text: Gray scale

## Images

All hotel images are located in `src/assets/` and include:
- Exterior shots (day and twilight)
- Studio room layouts
- Kitchen details
- Lobby and common areas
- Outdoor patio with EV charging

Lifestyle images for customer personas are also included.

## License

This project was created for StudioRes Newnan marketing purposes.

## Support

For questions or issues, contact the property management team at (470) 686-6730.

