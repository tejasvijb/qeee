"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 1000)
        return () => clearTimeout(timer)
    }, [])

    return <Progress className="h-1" value={progress} />
}
