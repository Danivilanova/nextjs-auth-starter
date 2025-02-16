# Next.js Authentication Starter with Supabase

A modern, feature-complete authentication starter template built with Next.js 14, Supabase Auth, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 14** with App Router
- 🔒 **Supabase Authentication** with:
  - Email/Password authentication
  - Password reset functionality
  - Email verification
  - Protected routes with middleware
- 🎨 **Modern UI** built with:
  - Tailwind CSS for styling
  - shadcn/ui components
  - Dark mode support
  - Responsive design
- 📱 **Full Authentication Flow**:
  - Login
  - Sign up
  - Password reset
  - Password update
  - Email verification
- ✨ **Additional Features**:
  - TypeScript for type safety
  - Form validation with Zod
  - Toast notifications with Sonner
  - Mobile-responsive layout
  - Custom hooks
  - Server actions

## Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-auth-starter.git
cd nextjs-auth-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a Supabase project and get your credentials:
   - Go to [Supabase](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

4. Set up your environment variables:
   - Copy the `.env.example` file to `.env.local`
   - Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components/            # React components
│   ├── auth/             # Authentication components
│   └── ui/               # UI components (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── supabase/        # Supabase client configuration
├── public/              # Static assets
└── src/
    ├── app/             # Next.js app router pages
    │   ├── (auth)/      # Authentication routes
    │   └── auth/        # Auth API routes
    └── middleware.ts    # Authentication middleware
```

## Authentication Flow

1. **Sign Up**:
   - User fills out the sign-up form
   - Email verification is sent
   - User verifies email
   - Redirect to dashboard

2. **Login**:
   - User enters credentials
   - Redirect to dashboard on success

3. **Password Reset**:
   - User requests password reset
   - Reset email is sent
   - User sets new password
   - Redirect to login

## Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `globals.css` for global styles
- Customize shadcn/ui components in the `components/ui` directory

### Authentication
- Update authentication forms in `components/auth`
- Modify authentication logic in `app/(auth)/actions.ts`
- Customize protected routes in `middleware.ts`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)