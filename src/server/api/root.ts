import { createTRPCRouter } from "~/server/api/trpc";
import { todoRouter } from "~/server/api/routers/todo";

export const appRouter = createTRPCRouter({
 todo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;