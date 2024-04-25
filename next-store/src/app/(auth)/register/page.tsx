import SignUpForm from '@/components/auth/Forms/signupForm'
import { auth } from '@/lib/auth';

import { redirect } from 'next/navigation';
import React from 'react'

export default async function SignUpPage() {
    const session = await auth();
    if (session) redirect('/not-found');

    return (
        <div>
            <SignUpForm />
        </div>
    )
}
