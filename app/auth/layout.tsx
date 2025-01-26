import { Mulish } from "next/font/google";

const mullish = Mulish({
    variable: "--font-mullish-sans",
    subsets: ["latin"],
});

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="h-screen w-screen bg-[url('/steth.png')] bg-cover bg-center">
        <div className="h-full flex flex-col">
            <div className="flex justify-center">
                <h1 className={`${mullish.variable} mt-4 p-8 text-center max-sm:font-medium max-sm:text-3xl max-sm:mx-4 bg-white bg-opacity-40 rounded-xl text-[#4133FF] border border-gray-500 font-bold text-6xl`}>
                    Securing Smart Healthcare CPS
                </h1>
            </div>
            <div className="h-full flex justify-end sm:mr-[20%] max-sm:mx-4 items-center">{children}</div>
        </div>
    </div>
}