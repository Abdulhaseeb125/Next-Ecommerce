import { Toaster } from '@/components/ui/sonner'
import React, { PropsWithChildren } from 'react'


export default function AuthLayout({ children }: PropsWithChildren) {

    return (
        <div className='max-w-lg flex h-screen items-center justify-center m-auto'>
            <div className="relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                {children}
                <Toaster />
            </div>
        </div>
    )
}
