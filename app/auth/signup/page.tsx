"use client"

import { Mulish } from "next/font/google";

import Image from "next/image";

const mullish = Mulish({
    variable: "--font-mullish-sans",
    subsets: ["latin"],
});

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'



import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/app/context/AuthContext";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

export default function Signup() {
    const router = useRouter()
    const { signIn } = useAuth()


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Signed Up",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">Welcome {data.username}</code>
                </pre>
            ),
        })

        router.push("/")
    }

    const onSignin = () => {

        signIn()
    }


    return (
        <div className="bg-white bg-opacity-80 rounded-xl p-10 w-[450px] my-4">
            <div className="flex flex-col items-center justify-center mb-8">
                <h1 className={`${mullish.variable} font-bold text-3xl`}>Register</h1>
                <p className="text-sm text-slate-400">Quick & Simple way to Automate your systems</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Enter email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button onClick={() => onSignin()} className="w-full" type="submit">CREATE AN ACCOUNT</Button>

                </form>
                <p className="text-sm text-slate-500 mt-2">Already have an account? <Button onClick={() => router.push('/auth/signin')} variant={"link"}>Click here</Button></p>
            </Form>


        </div>
    )
}