import { NextResponse } from "next/server";

export async function middleware(request, response) {
  var tokenUser = request.cookies.get("STUD");

  if (tokenUser == undefined || tokenUser == null || tokenUser == "") {
    if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (
      request.nextUrl.pathname == "/admin" ||
      request.nextUrl.pathname == "/shop"
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    var token = JSON.parse(tokenUser.value).user;

    if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (
      (token == null || token == undefined || token == "") &&
      (request.nextUrl.pathname == "/admin" ||
        request.nextUrl.pathname == "/shop")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      (token != null && request.nextUrl.pathname == "/") ||
      request.nextUrl.pathname == "/login"
    ) {
      let user = token?.role === "admin" ? "/admin" : "/shop";
      return NextResponse.redirect(new URL(user, request.url));
    }
  }
  var url = request.url;
}
