# 🛡️ CCTV Case Guardian

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://ahmedhussein85ah.github.io/security-management-system/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-cyan)](https://tailwindcss.com/)

A comprehensive security case management system designed for modern security teams. CCTV Case Guardian provides centralized incident tracking, role-based access control, real-time notifications, and comprehensive reporting capabilities.
<<<<<<< HEAD
=======
<img width="945" height="407" alt="Screenshot 2025-10-17 195138" src="https://github.com/user-attachments/assets/8381b59c-0562-4e2a-ac46-750a81710714" />
>>>>>>> c70a48416d2164aa4ea4168ae5fb9d81df9a560d

## ✨ Features

### 🔐 Authentication & Authorization
- **Role-based access control** with Admin and User permissions
- **Secure login system** with demo credentials for testing
- **Permission-based UI** that adapts to user roles
- **Session management** with persistent authentication

### 📋 Case Management
- **Create, edit, and track** security incidents
- **Real-time case updates** with status tracking
- **Case categorization** and priority assignment
- **Evidence attachment** and documentation

### 👥 User Management
- **User administration** with role assignment
- **Permission management** for granular access control
- **User status tracking** (active/inactive)
- **Password management** and security controls

### 📊 Reporting & Analytics
- **Comprehensive reports** generation
- **Dashboard analytics** with key metrics
- **Export capabilities** for documentation
- **Real-time statistics** and insights

### 🔔 Notifications
- **Real-time notifications** for case updates
- **Email-style messaging** system
- **Notification management** and read status
- **Alert system** for critical incidents

### 🎨 Modern UI/UX
- **Responsive design** for all devices
- **Dark/Light mode** support
- **Professional interface** with shadcn/ui components
- **Accessibility features** and keyboard navigation

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/security-management-system.git
   cd security-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Windows Quick Start
Double-click `run-dev.bat` or run from PowerShell:
```powershell
cd "path\to\security-management-system"
./run-dev.bat
```

## 🔑 Demo Credentials

Test the application with these pre-configured accounts:

| Role | Email | Password | Permissions |
|------|-------|----------|-------------|
| **Admin** | `admin@demo.local` | `admin123` | Full access to all features |
| **User** | `user@demo.local` | `user123` | Limited access (view cases, reports) |
| **Admin** | `AhmedHusseinElsayed@outlook.com` | `Cas@135$` | Full access (production account) |

## 🏗️ Project Structure

```
security-management-system/
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── auth/        # Authentication components
│   │   ├── cases/       # Case management components
│   │   ├── dashboard/   # Dashboard components
│   │   ├── layout/      # Layout components
│   │   ├── messages/    # Messaging components
│   │   ├── navigation/   # Navigation components
│   │   ├── reports/     # Reporting components
│   │   ├── ui/          # shadcn/ui components
│   │   └── users/       # User management components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── run-dev.bat          # Windows development script
└── README.md            # This file
```

## 🛠️ Technology Stack

### Frontend
- **[React 18.3.1](https://reactjs.org/)** - UI library
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Type safety
- **[Vite 5.4.1](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS 3.4.11](https://tailwindcss.com/)** - Styling framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### State Management & Data
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[Axios](https://axios-http.com/)** - HTTP client

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixes

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Set **Source** to **"GitHub Actions"**

2. **Deploy automatically**
   - Push to `main` branch
   - Workflow runs automatically
   - Site deploys to `https://ahmedhussein85ah.github.io/security-management-system/`

### Manual Deployment

```bash
# Build the project
npm run build

# Preview locally
npm run preview

# Deploy to your hosting provider
# Upload the 'dist' folder contents
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=CCTV Case Guardian
```

### Vite Configuration
The `vite.config.ts` file contains:
- **Base path** configuration for GitHub Pages
- **Path aliases** for clean imports
- **Plugin configuration** for React and development tools

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ahmed Hussein Elsayed**  
Security Coordinator  
Email: AhmedHusseinElsayed@outlook.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
- [React](https://reactjs.org/) for the amazing UI library

---

<div align="center">

**Made with ❤️ for security professionals**

[🔗 Live Demo](https://ahmedhussein85ah.github.io/security-management-system/) | [📖 Documentation](#) | [🐛 Report Bug](#) | [💡 Request Feature](#)

</div>

