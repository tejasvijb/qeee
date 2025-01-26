"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ProgressDemo } from "./ProgressDemo";
import { Button } from "../ui/button";

import { Mulish } from "next/font/google";
import { useRouter } from "next/navigation";

const mullish = Mulish({
    variable: "--font-mullish-sans",
    subsets: ["latin"],
});



const DragAndDropUpload: React.FC = () => {
    const router = useRouter()
    const [files, setFiles] = useState<File[]>([]);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.add("bg-gray-300", "border-blue-500");
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.classList.remove("bg-gray-300", "border-blue-500");
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove("bg-gray-300", "border-blue-500");

        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleClick = () => {
        const inputElement = document.getElementById("fileInput") as HTMLInputElement;
        if (inputElement) inputElement.click();
    };

    return (
        <div className="flex flex-col h-full">
            <p className={`${mullish.variable} text-2xl text-center font-bold mb-8`}>Upload</p>
            <div
                id="dropzone"
                className="flex flex-col items-center justify-center h-64 w-full border-2 border-dashed border-[#384EB74D] rounded-lg bg-[#F8F8FF] text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Image src='/upload.png' alt='upload' width={100} height={100} className="mb-4" />
                <p className="text-center mb-2">
                    <span className="font-bold">Drag and drop your files{" "}</span>
                    <span className="text-blue-500 ">click to upload</span>
                </p>
                <p className="text-slate-500 text-sm">Supported format: CSV</p>
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileInputChange}
                />

            </div>


            <div className="mt-4">
                <p className="font-semibold mb-4 text-[#676767]">Uploaded files</p>
                {files.length > 0 && (
                    <ul className="list-disc text-left">
                        {files.map((file, index) => (
                            <div key={index} className="mb-4">
                                <li className="flex justify-between items-center w-full text-sm p-3 bg-white rounded-md text-gray-600 list-none">
                                    {file.name}
                                    <Button variant={"link"} onClick={() => removeFile(index)} >
                                        <Image src="/cancel.png" alt="cancel" width={18} height={18} />
                                    </Button>
                                </li>
                                <ProgressDemo />
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            {files.length > 0 && <Button onClick={() => router.push('/gini-nodes')} className="bg-[#0047FF] text-center font-semibold text-xl mt-auto w-full">Next</Button>}

        </div>
    );
};

export default DragAndDropUpload;
