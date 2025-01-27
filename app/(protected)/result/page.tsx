'use client'
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Mulish } from "next/font/google";

import Link from 'next/link'


const mullish = Mulish({
    variable: "--font-mullish-sans",
    subsets: ["latin"],
});

export default function Result() {

    const { signOut } = useAuth()

    const onSignOut = () => {
        signOut()
    }



    return (

        <div className="h-screen max-sm:h-auto bg-[rgb(170,198,255)] p-10">
            <div className="grid grid-cols-1 h-full bg-white overflow-y-scroll">

                <div className="gap-10 h-full rounded-3xl px-10 py-4">

                    <div className="flex flex-col gap-2 items-center">
                        <p className={`${mullish.variable} font-bold text-3xl mb-4 text-center`}>
                            Result of Uploaded File
                        </p>
                        <p className={`${mullish.variable} font-bold text-2xl mb-4 text-center`}>
                            Legitimate Nodes
                        </p>
                        {Array.from({ length: 14 }, (_, i) => (
                            <div key={i} className="md:w-4/5 w-full h-10 bg-[#DFE8FF]"></div>
                        ))}

                    </div>
                </div>
                <div className="flex justify-end w-full mt-auto p-4">
                    <Link href={"/auth/signin"}><Button onClick={onSignOut} className="bg-[#0047FF] text-center font-semibold text-xl max-sm:w-full">Logout</Button></Link>
                </div>
            </div>


        </div>
    )
}