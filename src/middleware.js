import { isAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export function middleware(request) {
  //console.log(request);
  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
//! api pathine girilmemeli
export const config = {
  matcher: ["/account/:path*", "/write/:path*", "/admin/:path*"],
};
