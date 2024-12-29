'use client'

import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'

export default function Footer() {
  const { content } = useContent()
  const { siteName, contactInfo } = content.general
  const { 
    menu, 
    social, 
    bottomText, 
    brandDescription,
    quickLinksTitle,
    contactTitle,
    socialTitle,
    contactIcons
  } = content.navigation.footer

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              {siteName}
            </Link>
            <p className="mt-4 text-gray-400">
              {brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              {quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              {contactTitle}
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contactIcons.location.path} />
                </svg>
                {contactInfo.address}
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contactIcons.phone.path} />
                </svg>
                {contactInfo.phone}
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contactIcons.email.path} />
                </svg>
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              {socialTitle}
            </h3>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 border-t border-gray-800 pt-8">
          {bottomText}
        </div>
      </div>
    </footer>
  )
}