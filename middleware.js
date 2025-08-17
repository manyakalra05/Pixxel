import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/editor(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

<!-- 2025-07-19T04:53:14+05:30 -->
<!-- 2025-11-01T08:46:27+05:30 -->
<!-- Update 2024-11-25T17:43:17+05:30 -->
<!-- Update 2025-04-16T18:27:45+05:30 -->
<!-- Update 2025-05-20T13:23:54+05:30 -->
<!-- Update 2025-08-08T12:24:10+05:30 -->
<!-- Update 2025-09-11T12:45:12+05:30 -->
<!-- Update 2024-11-19T16:40:15+05:30 -->
<!-- Update 2025-02-09T10:51:04+05:30 -->
<!-- Update 2025-08-17T17:59:45+05:30 -->