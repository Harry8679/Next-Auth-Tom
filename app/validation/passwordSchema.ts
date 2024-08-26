import { z } from 'zod';

export const passwordSchema = z.string().nonempty({ message: "Password must be not empty." }).min(5, { message: "Password must have at least 5 characters" });