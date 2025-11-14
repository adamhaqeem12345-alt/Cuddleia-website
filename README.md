# PinkStore - E-commerce Storefront

A modern e-commerce storefront built with Next.js 14, TypeScript, and Tailwind CSS featuring a custom pink-forward design system.

## Features

- 🎨 **Pink-themed Design System** - Custom Tailwind configuration with pink color palette
- ⚡ **Next.js 14 App Router** - Modern React framework with server components
- 📱 **Responsive Design** - Mobile-first approach with beautiful UI
- 🛒 **E-commerce Routes** - Complete storefront pages (products, cart, checkout)
- 🔧 **Admin Dashboard** - Manage products, orders, and integrations
- 💳 **PayPal Integration** - Secure payment processing (requires configuration)
- 🔗 **AliExpress Integration** - Import products (requires configuration)
- 📦 **PostgreSQL Database** - Store products and orders (requires configuration)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment example file:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - Database connection string (PostgreSQL)
   - PayPal credentials
   - AliExpress API keys

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── products/          # Product listing and details
│   ├── thank-you/         # Order confirmation
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Button.tsx         # Button component with variants
│   ├── Footer.tsx         # Site footer
│   └── Navigation.tsx     # Site navigation
├── .env.example           # Environment variables template
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Design System

The project uses a custom pink-forward design system with:

- **Primary Color**: Pink (#ec4899)
- **Button Variants**: primary, secondary, outline
- **Custom Spacing**: Extended spacing scale
- **Typography**: Geist Sans and Mono fonts

### Button Classes

- `.btn-primary` - Pink background with hover effects
- `.btn-secondary` - Light pink background
- `.btn-outline` - Pink border with hover fill

## Routes

- `/` - Homepage
- `/products` - Product listing
- `/products/[slug]` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/thank-you` - Order confirmation
- `/admin` - Admin dashboard

## Environment Variables

See `.env.example` for all required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `PAYPAL_CLIENT_ID` - PayPal client ID
- `PAYPAL_CLIENT_SECRET` - PayPal secret
- `PAYPAL_MODE` - 'sandbox' or 'live'
- `ALIEXPRESS_API_KEY` - AliExpress API key
- `ALIEXPRESS_API_SECRET` - AliExpress secret

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Formatting**: Prettier
- **Database**: PostgreSQL (to be configured)
- **Payments**: PayPal (to be configured)
- **Products**: AliExpress API (to be configured)

## Next Steps

1. Configure your environment variables
2. Set up PostgreSQL database
3. Connect PayPal for payments
4. Connect AliExpress for product imports
5. Implement backend API routes for data fetching
6. Add authentication for admin access
7. Implement shopping cart functionality
8. Set up order processing workflow

## License

MIT
