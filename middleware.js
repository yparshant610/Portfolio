import { NextResponse } from 'next/server'

export function middleware(request) {
  // 1. Get the IP address
  // Vercel usually puts the real IP in 'x-forwarded-for'
  const ip = request.headers.get('x-forwarded-for') || request.ip || 'Unknown IP'
  
  // 2. Get Location (City/Country) provided by Vercel
  // These headers are specific to Vercel deployments
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown City'
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown Country'
  
  // 3. Get the page they are visiting
  const url = request.nextUrl.pathname

  // 4. Print this info to your Vercel Logs
  console.log(`👀 NEW VISITOR DETECTED:`)
  console.log(`   IP: ${ip}`)
  console.log(`   Location: ${city}, ${country}`)
  console.log(`   Page: ${url}`)
  console.log('---------------------------------')

  // Continue loading the page as normal
  return NextResponse.next()
}

// Configuration to prevent logging static files (like images, favicon, etc.)
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
}