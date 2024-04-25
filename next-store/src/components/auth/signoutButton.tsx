"use client";

import React from 'react'
import { CgLogOut } from 'react-icons/cg';
import { signOut } from 'next-auth/react';
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
export function SignOutButton() {
    return (
        <DropdownMenuItem onClick={() => { signOut() }}>
            <CgLogOut className="mr-2" size={19} />
            <span>Log Out</span>
        </DropdownMenuItem>
    )
}