export const themeConfig = {
  // Marka Ayarları
  brand: {
    name: "FitnessTheme",
    logo: "/images/logo.png",
    favicon: "/favicon.ico",
  },

  // Renk Şeması
  colors: {
    primary: "#3B82F6",
    secondary: "#1F2937",
    accent: "#F59E0B",
    background: {
      light: "#F3F4F6",
      dark: "#111827",
    },
    text: {
      light: "#FFFFFF",
      dark: "#1F2937",
    }
  },

  // Font Ayarları
  typography: {
    fontFamily: {
      heading: "Inter",
      body: "Roboto",
    },
    fontSize: {
      base: "16px",
      scale: 1.2,
    }
  },

  // Sayfa İçerikleri
  content: {
    hero: {
      title: "Welcome to FitnessTheme",
      subtitle: "Your journey starts here",
      image: "/images/hero.jpg",
      cta: {
        text: "Get Started",
        link: "/contact"
      }
    },
    services: [
      {
        id: "personal-training",
        title: "Personal Training",
        description: "One-on-one fitness coaching",
        image: "/images/services/personal-training.jpg",
        price: "50",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      },
      // Diğer servisler...
    ],
    // Diğer sayfa içerikleri...
  },

  // SEO Ayarları
  seo: {
    title: "FitnessTheme - Professional Fitness Website Template",
    description: "A modern, customizable fitness website template",
    keywords: ["fitness", "gym", "health", "workout"],
  },

  // Sosyal Medya Linkleri
  socialMedia: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
  },

  // İletişim Bilgileri
  contact: {
    email: "info@example.com",
    phone: "+1 234 567 890",
    address: "123 Fitness Street, City, Country",
  }
} 