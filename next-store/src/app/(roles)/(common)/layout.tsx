import Footer from '@/components/Custom/Footer'
import Navigation from '@/components/Navigations/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}
