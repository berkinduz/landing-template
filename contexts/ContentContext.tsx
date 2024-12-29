'use client'

import { createContext, useContext, useState } from 'react'
import { siteContent, type SiteContent } from '@/config/siteContent'

export const ContentContext = createContext<{
  content: SiteContent
  updateContent: (newContent: SiteContent) => void
}>({
  content: siteContent,
  updateContent: () => {},
})

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(siteContent)

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent)
  }

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext) 