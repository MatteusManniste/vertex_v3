import { z } from "zod";

export const messageSchema = z.object({
  id: z.string().uuid(),
  message: z.string().min(1).max(256),
  author: z.string().min(1).max(32),
  timestamp: z.string().datetime(),
});

export const messageBodySchema = z.object({
  message: z.string().min(1).max(256),
  author: z.string().min(1).max(32),
});
