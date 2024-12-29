'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'

export default function Header() {
  const { content } = useContent()
  const { menu, ctaButton } = content.navigation.header
  const { siteName } = content.general
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            {siteName}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={ctaButton.href}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
              hover:scale-105 transition-all duration-300 text-white font-semibold 
              hover:shadow-lg hover:shadow-blue-500/30"
            >
              {ctaButton.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}