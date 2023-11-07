import { NextResponse } from "next/server";
import { isAuth } from "./app/lib/auth";

export function middleware(request) {
  console.log(request);
  //console.log(!isAuth(request.cookies));
  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/account/:path*", "/write/:path*"],
};
