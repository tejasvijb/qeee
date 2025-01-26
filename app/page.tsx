import DragAndDropUpload from "@/components/custom/FileUpload";


export default function Home() {
    return (
        <div className="h-screen grid grid-cols-3">

            <div className="col-span-2 max-sm:col-span-3 bg-[rgb(170,198,255)] p-10 max-sm:p-4">
                <div className="bg-[#CCDDFF] p-10 max-sm:p-4 h-full rounded-3xl">
                    <DragAndDropUpload />
                </div>
            </div>
            <div className="h-full bg-[url('/doctor.png')] bg-cover bg-center max-sm:hidden"></div>
        </div>
    );
}
