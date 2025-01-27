
import { Button } from "@/components/ui/button";
import { Mulish } from "next/font/google";

import Link from 'next/link'


const mullish = Mulish({
    variable: "--font-mullish-sans",
    subsets: ["latin"],
});


export default function GiniNodes() {



    return (
        <div className="min-h-screen max-sm:h-auto bg-[rgb(170,198,255)] p-10">
            <div className="flex flex-col h-full bg-white">

                <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 h-full rounded-3xl px-10 py-4">

                    <div className="flex flex-col gap-2 items-center">
                        <p className={`${mullish.variable} font-bold text-3xl mb-4 text-center`}>
                            Node_ID
                        </p>
                        {Array.from({ length: 14 }, (_, i) => (
                            <div key={i} className="md:w-4/5 w-full h-10 bg-[#DFE8FF]"></div>
                        ))}

                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p className={`${mullish.variable} font-bold text-3xl mb-4 text-center`}>
                            Gini Index
                        </p>
                        {Array.from({ length: 14 }, (_, i) => (
                            <div key={i} className="md:w-4/5 w-full h-10 bg-[#DFE8FF]"></div>
                        ))}

                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p className={`${mullish.variable} font-bold text-3xl mb-4 text-center`}>
                            Status
                        </p>
                        {Array.from({ length: 14 }, (_, i) => (
                            <div key={i} className="md:w-4/5 w-full h-10 bg-[#DFE8FF]"></div>
                        ))}

                    </div>
                </div>
                <div className="flex justify-end w-full mt-auto p-4">
                    <Link href={"/result"}><Button className="bg-[#0047FF] text-center font-semibold text-xl max-sm:w-full">Next</Button></Link>
                </div>
            </div>


        </div>
    )
}