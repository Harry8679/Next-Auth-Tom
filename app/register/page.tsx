'use client';

import { z } from 'zod';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from 'react-hook-form/dist';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().email(),
    passwordConfirm: z.string(),
});

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        }
    });

    const handleSubmit = async(data: z.infer<typeof formSchema>) => {}

    return (
        <main className="flex justify-center items-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Register for a new account.</CardDescription>
                </CardHeader>
            </Card>
        </main>
    );
}