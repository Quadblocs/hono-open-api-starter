import { createRouter } from "@/lib/create-app";

import { handlers } from "./tasks.handlers";
import { routes } from "./tasks.routes";

// This is the old way and works fine, but has to be manually updated when a route method is added
const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne)
  .openapi(routes.patch, handlers.patch)
  .openapi(routes.remove, handlers.remove);

// I want to do something like this to loop through all of the methods and then apply the proper router type.
// It probably needs a workaround, similar to how you did the "export type AppType = typeof routes[number];" for the main app.
const typedRouter = createRouter();
for (const route of Object.keys(routes) as (keyof typeof routes)[]) {
  typedRouter.openapi(routes[route], handlers[route]);
}

export default router;
