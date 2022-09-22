import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MOSSIFY_ACCESS_TOKEN;
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    if (!token) {
      return NextResponse.redirect(url);
      // return NextResponse.rewrite(new URL("/signin", req.url));
      // return NextResponse.redirect("https://localhost:3000/signin");
    }
  }
}
