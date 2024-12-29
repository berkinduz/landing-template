import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPath = request.nextUrl.pathname === '/admin/login'

  // Login sayfasındaysa ve giriş yapmışsa, admin paneline yönlendir
  if (isLoginPath && token) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Admin sayfalarında ve giriş yapmamışsa, login'e yönlendir
  if (isAdminPath && !isLoginPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}