// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: { method: string; }) {
  const response = NextResponse.next();
  
  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Optionally, respond to OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  return response;
}
