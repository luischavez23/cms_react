import { z } from "zod";

export const groupContact = ["Family", "Friend", "Other"] as const;

export const Contact = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Name must be at least 3 characters." }),
  lastname: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Lastname must be at least 3 characters." }),
  email: z.string().min(1, { message: "Required" }).email("Email invalid."),
  groupContact: z.enum(groupContact),
});

export type Contact = z.infer<typeof Contact> & { id: string };
