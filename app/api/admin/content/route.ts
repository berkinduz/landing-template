import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const content = await request.json()
    
    // Dosya yolunu belirle
    const filePath = path.join(process.cwd(), 'config', 'siteContent.ts')
    
    // Yeni içeriği string'e çevir
    const fileContent = `export const siteContent = ${JSON.stringify(content, null, 2)}\n\nexport type SiteContent = typeof siteContent`
    
    // Dosyayı kaydet
    await fs.writeFile(filePath, fileContent, 'utf-8')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Save error:', error)
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    )
  }
} 