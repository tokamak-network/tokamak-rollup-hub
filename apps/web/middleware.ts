import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/discover/:path*'],
};

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set('x-current-path', request.nextUrl.pathname);

  return NextResponse.next({ headers });
}
