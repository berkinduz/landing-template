'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'

export default function Services() {
  const { content } = useContent()
  const { hero, items } = content.services

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src={hero.backgroundImage}
            alt="Fitness Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {items.map((service, index) => (
              <div key={service.title} 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 
                    text-white rounded-xl font-semibold hover:scale-105 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community today and experience the difference our professional services can make in your fitness journey.
          </p>
          <Link 
            href="/membership" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold 
            hover:scale-105 transition-all duration-200"
          >
            View Membership Options
          </Link>
        </div>
      </section>
    </div>
  )
}

