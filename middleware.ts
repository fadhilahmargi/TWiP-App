import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export default authMiddleware({
//   ignoredRoutes: ['/((?!api|trpc))(_next.*|.+.[w]+$)', '/'],
// });
