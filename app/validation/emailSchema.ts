import { z } from 'zod';

export const emailSchema = z.string().nonempty({ message: "Email must be not empty." }).email({ message: "Please, enter a valid email." });