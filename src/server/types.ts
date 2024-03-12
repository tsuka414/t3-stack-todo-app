import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutput["todo"]["all"];
export type Todo = allTodosOutput[number];

export const createInput = z
    .string()
    .min(1, "todo must be at least 1 character long")
    .max(50, "todo must be at most 50 characters long");

export const updateInput = z.object({
    id: z.string(),
    text: z
        .string()
        .min(1, "todo must be at least 1 character long")
        .max(50, "todo must be at most 50 characters long"),
});

export const toggleInput = z.object({
    id: z.string(),
    is_completed: z.boolean(),
});