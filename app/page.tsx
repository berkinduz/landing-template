'use client'

import Image from 'next/image'
import { useContent } from '@/contexts/ContentContext'

export default function Home() {
  const { content } = useContent()
  const { hero, facilities, features, contact } = content.home

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image 
          src={hero.backgroundImage}
          alt="Modern Gym Interior" 
          fill
          priority
          className="absolute z-0 brightness-50 object-cover"
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {hero.title}
          </h1>
          <p className="text-2xl mb-12 text-gray-200">{hero.subtitle}</p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {facilities.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.items.map((facility, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image 
                  src={facility.image} 
                  alt={facility.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{facility.title}</h3>
                  <p className="text-gray-300">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.items.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300">
                <FeatureIcon icon={feature.icon} className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {contact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

// Component içinde kullanılan yardımcı bileşenler
const FeatureIcon = ({ icon, className }: { 
  icon: { type: string; path?: string; url?: string }
  className: string 
}) => {
  if (icon.type === 'svg') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
      </svg>
    )
  }

  if (icon.type === 'image' && icon.url) {
    return <Image src={icon.url} alt="" width={24} height={24} className={className} />
  }

  return null
}

const ContactInfo = () => {
  const { content } = useContent()
  const { contactInfo } = content.general

  return (
    <div className="bg-gray-800 p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-6 text-white">{contactInfo.title}</h3>
      <p className="mb-8 text-gray-300">{contactInfo.description}</p>
      <div className="space-y-4">
        <p className="flex items-center text-gray-300">
          <LocationIcon className="w-6 h-6 mr-4 text-blue-400" />
          {contactInfo.address}
        </p>
        <p className="flex items-center text-gray-300">
          <PhoneIcon className="w-6 h-6 mr-4 text-blue-400" />
          {contactInfo.phone}
        </p>
        <p className="flex items-center text-gray-300">
          <EmailIcon className="w-6 h-6 mr-4 text-blue-400" />
          {contactInfo.email}
        </p>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const { content } = useContent()
  const { contact } = content.home

  return (
    <div className="bg-gray-800 p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-6 text-white">{contact.formTitle}</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white 
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white 
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white 
            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="How can we help you?"
          />
        </div>
        <button 
          type="submit" 
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold 
          hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {contact.submitButton}
        </button>
      </form>
    </div>
  )
}

// Icon bileşenleri (SVG'ler)
const LocationIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)