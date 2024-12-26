import { z } from "zod";

export const Contact = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Name must be at least 3 characters " }),
  lastname: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Lastname must be at least 3 characters " }),
  email: z.string().email(),
  group: z.string(),
});
