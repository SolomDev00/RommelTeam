import { auth as middleware } from "@/server/auth";

export default middleware((req) => {
  console.log("Middleware called for", req.nextUrl.pathname);
});

export const config = { matchers: ["/login"] };
