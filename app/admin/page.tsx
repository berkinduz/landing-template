'use client'

import { useState } from 'react'
import { useContent } from '@/contexts/ContentContext'

export default function AdminPanel() {
  const { content, updateContent } = useContent()
  const [activeSection, setActiveSection] = useState('general')
  const { title, subtitle, sections, saveButton } = content.admin

  const handleInputChange = (path: string, value: string) => {
    updateContent(path, value)
  }

  const renderSection = (section: string, data: Record<string, unknown>, parentPath = '') => {
    if (!data || typeof data !== 'object') return null;

    return Object.entries(data).map(([key, value]) => {
      const currentPath = parentPath ? `${parentPath}.${key}` : key

      if (value && typeof value === 'object' && !Array.isArray(value) && !(value instanceof File)) {
        return (
          <div key={key} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="space-y-4 pl-4 border-l-2 border-gray-200">
              {renderSection(section, value as Record<string, unknown>, currentPath)}
            </div>
          </div>
        )
      }

      return (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <input
            type="text"
            value={value as string}
            onChange={(e) => handleInputChange(currentPath, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeSection === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {renderSection(activeSection, content[activeSection as keyof typeof content])}
          </div>

          <div className="mt-8 text-right">
            <button
              onClick={() => console.log('Changes saved')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
              transition-colors duration-200"
            >
              {saveButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 