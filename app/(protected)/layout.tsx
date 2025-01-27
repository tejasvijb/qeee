'use client'

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";


export default function layout({ children }: { children: React.ReactNode }) {

    const { isSignedIn } = useAuth()

    const router = useRouter();

    useEffect(() => {
        if (!isSignedIn) {
            router.push('/auth/signin');
        }
    }, [isSignedIn, router]);



    if (!isSignedIn)
        return null

    return (
        <div>
            {children}
        </div>
    )




}