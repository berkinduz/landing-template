# Modern Fitness Gym Website

A modern, fully customizable fitness gym website built with Next.js 14, TypeScript, and Tailwind CSS. This project features a sleek design, responsive layout, and a powerful admin portal for seamless content management.

## Features

### 🎨 Fully Customizable Content
- Comprehensive content management via the admin portal
- Real-time updates for all sections
- Editable sections include:
  - Homepage
  - Services
  - Membership plans
  - Contact information
  - Navigation menus
  - Footer content

### 🛠 Admin Portal
- Secure authentication system
- Intuitive user interface
- Live preview of edits
- Structured content editing tools
- Image management functionality
- Flexible navigation menu customization

### 💻 Technical Features
- Powered by Next.js 14 (App Router)
- TypeScript for enhanced type safety
- Styled with Tailwind CSS
- Fully responsive design
- Server-side rendering (SSR) for improved performance
- API routes for efficient content management
- Authentication handled with NextAuth.js
- Modern UI components for an engaging user experience

### 📱 Responsive Design
- Mobile-first development approach
- Optimized for various screen sizes
- Smooth animations and transitions
- Interactive and user-friendly elements

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitness-gym-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables by creating a `.env.local` file:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ADMIN_USERNAME=your-admin-username
   ADMIN_PASSWORD=your-admin-password
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Admin Access
- Navigate to `/admin/login`
- Log in using the credentials specified in the `.env.local` file
- Begin managing your website content effortlessly!

## Project Structure

```
├── app/                  # Next.js 14 app directory
│   ├── admin/           # Admin portal pages
│   ├── api/             # API routes
│   └── ...             # Other pages
├── components/          # Reusable components
├── config/             # Site configuration
├── contexts/           # React contexts
├── providers/          # Provider components
└── public/            # Static assets
```

## Customization

The website is fully customizable through the admin portal, allowing you to modify:

- Site metadata
- Navigation menus
- Homepage sections
- Service offerings
- Membership plans
- Contact details
- Social media links
- Footer content

## Contributing

Contributions are welcome! Feel free to submit a Pull Request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
