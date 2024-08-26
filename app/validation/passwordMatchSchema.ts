import { z } from 'zod';
import { passwordSchema } from './passwordSchema';
import { passwordConfirmSchema } from './passwordConfirmSchema';

export const passwordMatchSchema = z
    .object({ 
        password: passwordSchema,
        passwordConfirm: passwordConfirmSchema 
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.passwordConfirm) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['passwordConfirm'],
                message: 'Passwords do not match'
            });
        }
    });