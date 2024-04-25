import React from 'react'
import { LiaTruckLoadingSolid } from "react-icons/lia";

// write a code for adding

export default async function Loading() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <div className="">
                <LiaTruckLoadingSolid size={60} />
            </div>
            <span className="text-2xl font-semibold tracking-tighter">Loading</span>
        </div>
    )
}
