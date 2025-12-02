# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Mzansi Money Maven** is an AI-powered financial assistant for Investec clients in South Africa. The application combines spending pattern analysis (Track A: Pattern Finder) with an agentic AI layer (Track B: Agent, Act!) to help users understand their financial behavior and receive personalized recommendations.

## Development Commands

### Setup
```powershell
# Install dependencies
pnpm install

# Set up environment variables (see Environment Variables section)
# Create .env.local file with required keys
```

### Development
```powershell
# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality
```powershell
# Run ESLint
pnpm lint

# ESLint with auto-fix
eslint . --fix
```

### Testing
Currently no test framework is configured. When adding tests, update this section with the appropriate test commands.

## Environment Variables

Required environment variables in `.env.local`:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Investec API (when implemented)
INVESTEC_CLIENT_ID=
INVESTEC_CLIENT_SECRET=
INVESTEC_API_KEY=

# AI/LLM Integration
# Currently configured for OpenAI GPT-5 in generate-nudges route
# Plan mentions Gemini 2.5 Flash - update when switching
GEMINI_API_KEY=

# Notifications (future implementation)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
EMAIL_SERVICE_HOST=
EMAIL_SERVICE_PORT=
EMAIL_SERVICE_USER=
EMAIL_SERVICE_PASS=
```

## Architecture

### Technology Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Tailwind CSS 4, Radix UI components, shadcn/ui patterns
- **Forms**: React Hook Form + Zod validation
- **Authentication**: Clerk
- **AI**: Vercel AI SDK with structured output (currently OpenAI, planned Gemini 2.5 Flash)
- **Charts**: Recharts (specified in dependencies)
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

### Project Structure

```
app/
├── api/
│   └── generate-nudges/route.ts    # AI nudge generation endpoint
├── dashboard/
│   ├── page.tsx                     # Main dashboard with account overview
│   ├── insights/page.tsx            # Spending patterns & analytics
│   └── nudges/page.tsx              # AI recommendations & tips
├── layout.tsx                       # Root layout with Clerk + Header/Footer
└── page.tsx                         # Landing page

components/
├── ai-agent.tsx                     # AI-powered nudge generation UI
├── header.tsx                       # Navigation header
├── footer.tsx                       # Footer component
└── ui/                              # shadcn/ui components (badge, button, card, etc.)

lib/
└── utils.ts                         # Utility functions (cn() for classnames)

hooks/
└── use-mobile.tsx                   # Mobile detection hook
```

### Key Architectural Patterns

#### Path Aliases
The project uses `@/*` as an alias for the project root. Always use this pattern for imports:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

#### Component Architecture
- Client components marked with `"use client"` directive (most dashboard pages and interactive components)
- Server components for static content
- UI components in `components/ui/` follow shadcn/ui patterns
- Custom components directly in `components/`

#### AI Integration Pattern
The AI agent uses structured output generation via Vercel AI SDK:
1. API route at `/api/generate-nudges` accepts user financial data
2. Uses `generateObject()` with Zod schema for type-safe responses
3. Returns structured nudges with priority, savings potential, and reasoning
4. Client component (`ai-agent.tsx`) handles loading states and display

**Important**: The route currently uses `"openai/gpt-5"` as the model, but SOLUTION.md indicates plans to use Gemini 2.5 Flash. When implementing Investec API integration, verify the correct LLM provider.

#### Styling Approach
- Tailwind CSS 4 with custom design tokens (primary, accent, card, border colors)
- Uses CSS variables for theme colors (supports dark/light modes)
- Gradients and glassmorphism effects for modern UI
- Consistent spacing: `p-6` for cards, `gap-4` or `gap-8` for grids

#### Data Flow (Current State)
- **Mock Data**: All financial data is currently hardcoded in components
- **Future**: Will integrate with Investec API for real transaction data
- **Agent Triggers**: Planned real-time monitoring via webhooks or polling (not yet implemented)

### Route Organization

- `/` - Landing page with features overview
- `/dashboard` - Main dashboard with account summary and recent transactions
- `/dashboard/insights` - Spending patterns, categories, and detected patterns
- `/dashboard/nudges` - AI recommendations (supports toggle between standard/AI mode)

## South African Context

This application is specifically designed for South African users and Investec SA:

- **Currency**: All amounts in South African Rand (R)
- **Local Features** (from SOLUTION.md):
  - Load shedding spending analysis
  - Petrol price tracking
  - Public holiday spending patterns (e.g., "Braai Day Budget")
  - Merchant frequency tracking for local spots

When generating content or implementing features, maintain South African context and terminology.

## Authentication

The app uses **Clerk** for authentication:
- ClerkProvider wraps the root layout
- Middleware in `proxy.ts` protects routes
- Currently not enforcing auth on all routes (no sign-in walls visible in code)
- When implementing protected routes, ensure proper Clerk session handling

## Planned Features (Not Yet Implemented)

Based on SOLUTION.md, these features are planned but not yet built:

### Pattern Finder Features (Track A)
- Load Shedding Spikes insight card (correlate spending with Eskom load shedding)
- Petrol Price Tracker insight card (overlay fuel spending with SA petrol prices)
- Braai Day Budget card (holiday spending analysis)
- Favourite Local Spot recognizer

### Agent Features (Track B)
- Real-time transaction monitoring (webhook or polling)
- "Impulse Protector" siren (high-value purchase warnings)
- "Subscription Sleuth" siren (inactive subscription detection)
- "Budget Explainer" (natural language budget overrun explanations)
- "Savings Trigger" (automatic savings suggestions on windfalls)
- User consent management for agent actions
- Email/SMS notifications (via nodemailer/Twilio)
- Agent activity logs

### Data Layer
- Database setup (SQLite for dev, PostgreSQL for production)
- User preferences and consent storage
- Transaction history storage
- Budget tracking

## Code Style Notes

- **TypeScript**: Strict mode enabled (`strict: true`)
- **React**: Using React 19 with new JSX transform
- **Formatting**: Windows line endings (CRLF) - be aware when collaborating cross-platform
- **Icons**: Lucide React for all icons
- **No test files present**: Add tests when implementing new features

## Important Considerations

### API Security
When implementing Investec API integration:
- Never expose API keys in client-side code
- Use Next.js API routes to proxy requests
- Store secrets in environment variables
- Implement proper error handling for API failures

### AI/LLM Integration
The current implementation in `generate-nudges/route.ts`:
- Uses `maxDuration = 30` for longer LLM calls
- Implements structured output with Zod schema
- South Africa-specific prompting for relevant advice
- Returns priority-based nudges with savings potential

When switching to Gemini or other LLMs, update the model identifier and ensure API compatibility.

### Future Database Schema
When implementing the database layer, you'll need tables for:
- User profiles and preferences
- Transaction history (from Investec API)
- Agent consent settings
- Budget definitions
- Agent action logs
- Subscription tracking

## External API Integration Points

Based on the project plan:

- **Investec API**: Transaction data, account balances (auth via OAuth)
- **EskomSePush API**: Load shedding schedules
- **Public Holidays API**: SA public holidays (e.g., date.nager.at)
- **Petrol Prices**: Historical SA fuel prices (source TBD)
- **LLM API**: Gemini 2.5 Flash (or current OpenAI)
- **Twilio**: SMS notifications
- **Email Service**: SMTP for notifications

When adding these integrations, create separate API routes in `app/api/` for each service.
