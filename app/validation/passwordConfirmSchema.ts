import { z } from 'zod';

export const passwordConfirmSchema = z.string().nonempty({ message: "Password confirm must be not empty." });