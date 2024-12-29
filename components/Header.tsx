'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'
import MenuIcon from '../components/icons/MenuIcon'

// Add type definition at the top
type NavigationLink = {
  name: string
  href: string
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { content } = useContent()
  const { menu } = content.navigation.header
  const { siteName } = content.general

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
            {siteName}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menu.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 px-2">
            <div className="flex flex-col space-y-6 border-t border-gray-700 pt-6">
              {menu.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition text-lg px-2 py-2 rounded-lg hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}