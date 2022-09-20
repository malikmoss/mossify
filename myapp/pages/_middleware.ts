import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MOSSIFY_ACCESS_TOKEN;

    if (!token) {
      const { origin } = req.nextUrl;
      return NextResponse.rewrite(new URL('/signin', req.url))
      // return NextResponse.redirect(`${origin}/signin`);
      // return NextResponse.redirect("https://localhost:3000/signin");
    }
  }
}
