'use client'

import { createContext, useContext, useState } from 'react'
import { siteContent, type SiteContent } from '@/config/siteContent'

interface ContentContextType {
  content: SiteContent
  updateContent: (path: string, value: any) => void
}

const ContentContext = createContext<ContentContextType>({
  content: siteContent,
  updateContent: () => {}
})

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(siteContent)

  const updateContent = (path: string, value: any) => {
    setContent(prevContent => {
      const newContent = { ...prevContent }
      const pathArray = path.split('.')
      let current: any = newContent
      
      // Navigate to the nested property
      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]]
      }
      
      // Update the value
      current[pathArray[pathArray.length - 1]] = value
      
      return newContent
    })
  }

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext) 