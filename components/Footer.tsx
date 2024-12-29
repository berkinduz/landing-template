'use client'

import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'

export default function Footer() {
  const { content } = useContent()
  const { siteName, contactInfo } = content.general
  const { menu, social } = content.navigation.footer
  const { description, bottomText } = content.footer

  const SocialIcon = ({ path }: { path: string }) => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  )

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
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <LocationIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                {contactInfo.address}
              </p>
              <p className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
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
                  <SocialIcon path={item.icon.path} />
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

// Icon Components
const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)