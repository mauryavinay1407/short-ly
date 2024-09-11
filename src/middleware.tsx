import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest,NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
]);

export default clerkMiddleware((auth, request) => {
  const { userId } = auth();
  const currentUrl = new URL(request.url);

  if(!userId){
    if(!isPublicRoute(request))
      return NextResponse.redirect(new URL('/sign-in',request.url));
  }

  return NextResponse.next();
});


export const config = {
  matcher: ['/((?!.*\\..*|_next|_oauth).*)', '/', '/(api|trpc)(.*)'],
};