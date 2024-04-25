"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
export default function SubmitButton({ text }: any) {
    const { pending } = useFormStatus()
    return (

        <Button type="submit" disabled={pending} variant="default">
            {pending && <svg className="border-t-2 rounded-full animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
            }
            {text ? text : 'Submit'}
        </Button>

    )
}
