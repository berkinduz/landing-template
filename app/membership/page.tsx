'use client'

import Image from 'next/image'
import { useContent } from '@/contexts/ContentContext'

const MembershipCard = ({ title, price, features, isPopular, ctaButton }: { 
  title: string
  price: string
  features: string[]
  isPopular?: boolean
  ctaButton: string
}) => {
  const { content } = useContent()
  const { popularBadge } = content.membership

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] relative ${
      isPopular ? 'border-2 border-blue-500' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {popularBadge}
          </span>
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-lg text-gray-600 ml-2">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-600 text-sm">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href="/#contact" 
          className="block w-full py-3 px-6 text-center bg-gradient-to-r from-blue-500 to-blue-600 
          text-white rounded-xl font-semibold hover:scale-[1.02] transition-all duration-200"
        >
          {ctaButton}
        </a>
      </div>
    </div>
  )
}

export default function Membership() {
  const { content } = useContent()
  const { hero, plans, cta } = content.membership

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src={hero.backgroundImage}
            alt="Membership Plans"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <MembershipCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {cta.subtitle}
          </p>
          <a 
            href="/#contact" 
            className="inline-block py-4 px-8 bg-white text-blue-600 rounded-xl font-semibold 
            hover:bg-gray-100 transition-colors duration-200"
          >
            {cta.buttonText}
          </a>
        </div>
      </section>
    </div>
  )
}