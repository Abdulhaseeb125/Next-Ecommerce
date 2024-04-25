import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

type UserRole = "admin" | "seller" | "user";

export default auth((req: any) => {
  const { nextUrl, auth } = req;
  const user = auth?.user;

  const isSellerPage = nextUrl?.pathname.startsWith("/seller");
  const isUserPage = nextUrl?.pathname.startsWith("/user");

  // Define a function to handle redirection
  const redirect = (path: string) => {
    return NextResponse.redirect(new URL(path, nextUrl ?? "/"));
  };

  // Define a function to check user role
  const checkUserRole = (
    role: UserRole | undefined,
    expectedRole: UserRole
  ) => {
    return role === expectedRole;
  };

  // Redirect if user is not authenticated
  if (!user) {
    if (isSellerPage || isUserPage) {
      return redirect("/login");
    } else {
      return NextResponse.next();
    }
  }

  // Redirect if user does not have the required role
  if (isSellerPage && !checkUserRole(user.role, "seller")) {
    return redirect("/not-found");
  }
  if (isUserPage && !checkUserRole(user.role, "user")) {
    return redirect("/not-found");
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // Exclude paths ending with file extensions, _next, and some API routes
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
