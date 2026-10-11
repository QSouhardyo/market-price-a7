# 🛒 Bazar Dor (বাজার দর)

**Essential product prices at a glance**

A modern web application to check today's market prices of essential commodities in Bangladesh (rice, lentils, oil, vegetables, fish, meat, etc.). Features market-wise pricing, price increase/decrease indicators, and full user authentication.

🔗 **Live Link:** [https://bazar-dor-beta-five.vercel.app/](https://bazar-dor-beta-five.vercel.app/)

## 🛠️ Technologies Used

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4** + **DaisyUI**
- **Better Auth** (Email/Password + Google + GitHub)
- **react-hot-toast**
- **JavaScript**

## ✨ Key Features

1. **Real-time Market Prices** — Displays today's prices of all products from the API along with change percentage (▲/▼ %)
2. **Category Filtering & Sorting** — Filter by rice, lentils, vegetables, etc. + sort by price (low to high / high to low)
3. **Product Details** — Market-wise min/max/average prices with division-based table (login required)
4. **Authentication** — Email/Password, Google & GitHub login using Better Auth + profile update
5. **Fully Responsive Design** — Works perfectly on mobile, tablet, and desktop + infinite price ticker marquee

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended 22+)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bazar-dor

# Install dependencies
npm install

# Create environment file
cp .env
# Edit .env with your keys (optional for social login)

# Run the development server
npm run dev