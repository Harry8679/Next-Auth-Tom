'use client';

import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { passwordMatchSchema } from '../validation/passwordMatchSchema';
import { emailSchema } from '../validation/emailSchema';
import { registerUser } from './action';

const formSchema = z.object({
    email: emailSchema,
}).and(passwordMatchSchema);


export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        }
    });

    const handleSubmit = async(data: z.infer<typeof formSchema>) => {
        const response = await registerUser({
            email: data.email,
            password: data.password,
            passwordConfirm: data.passwordConfirm
        });

        console.log(response);
    }

    return (
        <main className="flex justify-center items-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Register for a new account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField control={form.control} name='email' render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='email' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />

                            <FormField control={form.control} name='password' render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='password' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />

                            <FormField control={form.control} name='passwordConfirm' render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password Confirm</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='password' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />

                            <Button type='submit'>Register</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
    );
}