'use client'

import { useState, useEffect } from 'react'
import { useContent } from '@/contexts/ContentContext'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type FieldConfig = {
  label: string
  type: 'text' | 'textarea' | 'image' | 'array' | 'object'
  children?: Record<string, FieldConfig>
}

const FIELD_CONFIG: Record<string, FieldConfig> = {
  general: {
    label: 'General Settings',
    type: 'object',
    children: {
      siteName: { label: 'Site Name', type: 'text' },
      siteDescription: { label: 'Site Description', type: 'text' },
      contactInfo: {
        label: 'Contact Information',
        type: 'object',
        children: {
          title: { label: 'Title', type: 'text' },
          description: { label: 'Description', type: 'text' },
          address: { label: 'Address', type: 'text' },
          phone: { label: 'Phone', type: 'text' },
          email: { label: 'Email', type: 'text' },
        },
      },
      socialMedia: {
        label: 'Social Media',
        type: 'object',
        children: {
          facebook: { label: 'Facebook URL', type: 'text' },
          instagram: { label: 'Instagram URL', type: 'text' },
          twitter: { label: 'Twitter URL', type: 'text' },
        },
      },
    },
  },
  home: {
    label: 'Home Page',
    type: 'object',
    children: {
      hero: {
        label: 'Hero Section',
        type: 'object',
        children: {
          title: { label: 'Title', type: 'text' },
          subtitle: { label: 'Subtitle', type: 'text' },
          ctaButton: { label: 'Button Text', type: 'text' },
          backgroundImage: { label: 'Background Image URL', type: 'image' },
        },
      },
      facilities: {
        label: 'Facilities Section',
        type: 'object',
        children: {
          title: { label: 'Section Title', type: 'text' },
          items: {
            label: 'Facility Items',
            type: 'array',
            children: {
              title: { label: 'Title', type: 'text' },
              description: { label: 'Description', type: 'textarea' },
              image: { label: 'Image URL', type: 'image' },
            },
          },
        },
      },
      features: {
        label: 'Features Section',
        type: 'object',
        children: {
          title: { label: 'Section Title', type: 'text' },
          items: {
            label: 'Feature Items',
            type: 'array',
            children: {
              title: { label: 'Title', type: 'text' },
              description: { label: 'Description', type: 'textarea' },
            },
          },
        },
      },
    },
  },
  services: {
    label: 'Services Page',
    type: 'object',
    children: {
      hero: {
        label: 'Hero Section',
        type: 'object',
        children: {
          title: { label: 'Title', type: 'text' },
          subtitle: { label: 'Subtitle', type: 'text' },
          backgroundImage: { label: 'Background Image URL', type: 'image' },
        },
      },
      items: {
        label: 'Service Items',
        type: 'array',
        children: {
          title: { label: 'Title', type: 'text' },
          description: { label: 'Description', type: 'textarea' },
          image: { label: 'Image URL', type: 'image' }
        },
      },
    },
  },
}

const AdminPage = () => {
  const { content, updateContent } = useContent()
  const [activeSection, setActiveSection] = useState('general')
  const [formData, setFormData] = useState(content)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'success' | 'error' | null>(null)
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus(null)
    
    try {
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Save failed')

      updateContent(formData)
      setSaveStatus('success')
    } catch (error) {
      console.error('Save error:', error)
      setSaveStatus('error')
    } finally {
      setIsSaving(false)
    }
  }

  const updateField = (path: string[], value: any) => {
    setFormData(prev => {
      const newData = { ...prev }
      let current = newData
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return newData
    })
  }

  const renderField = (config: FieldConfig, path: string[], value: any) => {
    switch (config.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => updateField(path, e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white p-2"
          />
        )

      case 'textarea':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => updateField(path, e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white p-2"
            rows={3}
          />
        )

      case 'image':
        return (
          <div className="space-y-2">
            <input
              type="text"
              value={value || ''}
              onChange={(e) => updateField(path, e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white p-2"
            />
            {value && (
              <img
                src={value}
                alt="Preview"
                className="w-32 h-32 object-cover rounded border border-gray-600"
              />
            )}
          </div>
        )

      case 'array':
        return (
          <div className="space-y-4">
            {Array.isArray(value) && value.map((item, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-medium">{config.label} {index + 1}</h4>
                  <button
                    onClick={() => {
                      const newArray = [...value]
                      newArray.splice(index, 1)
                      updateField(path, newArray)
                    }}
                    className="text-red-400 hover:text-red-300 px-2 py-1 rounded border border-red-400 hover:border-red-300"
                  >
                    Remove
                  </button>
                </div>
                {config.children && Object.entries(config.children).map(([childKey, childConfig]) => (
                  <div key={childKey} className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {childConfig.label}
                    </label>
                    {renderField(childConfig, [...path, index, childKey], item[childKey])}
                  </div>
                ))}
              </div>
            ))}
            <button
              onClick={() => {
                const newItem = {}
                if (config.children) {
                  Object.keys(config.children).forEach(key => {
                    newItem[key] = config.children[key].type === 'array' ? [] : ''
                  })
                }
                updateField(path, [...(value || []), newItem])
              }}
              className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded border border-blue-400 hover:border-blue-300"
            >
              Add {config.label}
            </button>
          </div>
        )

      case 'object':
        return (
          <div className="space-y-4">
            {config.children && Object.entries(config.children).map(([childKey, childConfig]) => (
              <div key={childKey}>
                <label className="block text-sm font-medium text-gray-300">
                  {childConfig.label}
                </label>
                {renderField(childConfig, [...path, childKey], value?.[childKey])}
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          {content.admin.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <nav className="space-y-2">
              {Object.entries(FIELD_CONFIG).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeSection === key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3 bg-gray-800 p-6 rounded-lg">
            {FIELD_CONFIG[activeSection] && (
              renderField(
                FIELD_CONFIG[activeSection],
                [activeSection],
                formData[activeSection]
              )
            )}

            {/* Save Button */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`px-4 py-2 rounded ${
                  isSaving
                    ? 'bg-gray-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSaving ? 'Saving...' : content.admin.saveButton}
              </button>

              {saveStatus && (
                <p className={`text-sm ${
                  saveStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {saveStatus === 'success' 
                    ? content.admin.saveSuccess 
                    : content.admin.saveError}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage 