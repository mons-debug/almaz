# ALMAZ — Next.js 14 Landing (RTL Arabic)

Production-ready responsive landing site for ALMAZ cleaning products with cart functionality.

## Tech Stack
- Next.js 14 (App Router) + TypeScript + TailwindCSS
- Icons: lucide-react
- Arabic RTL first design
- Cart system with quantity selection by liters

## Features Implemented
✅ Mobile dropdown menu in header  
✅ Logo centered on mobile (no text)  
✅ Shopping cart with quantity selection by liters  
✅ Consistent product card heights and button alignment  
✅ Image optimization with lazy loading  
✅ Enhanced hero section with better mobile styling  

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Cart System
- Add products with customizable quantities (1-5x)
- Automatic liter calculation based on product volume
- Shopping cart icon with item count in header
- Full cart page with quantity management
- WhatsApp order generation with complete item list

## Customization

### WhatsApp Number
Edit `WHATSAPP_PHONE` in `lib/products.ts`

### Add Products
Add items to `products` array in `lib/products.ts` with:
- `slug`, `name` (Arabic), `priceDh`, `volume`, `benefits`, `category`
- Place product images in `public/almz/`

## Project Structure
```
/app                    # Next.js App Router pages
/components             # Reusable UI components
/lib                    # Data, cart logic, utilities
/public/almz/          # Product images and assets
```

## Performance
- Optimized images with Next.js Image component
- Lazy loading for non-priority images
- Responsive sizes and quality settings
- RTL-optimized layout and animations

## Notes
- Product images placed in `/public/almz/` directory
- Fallback placeholders if images missing
- Console logging for analytics events
- Mobile-first responsive design



