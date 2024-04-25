import LoginForm from '@/components/auth/Forms/loginForm'
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import { NextResponse } from 'next/server';
import React from 'react'

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect('/not-found');
  
  return (
    <div>
      <LoginForm />
    </div>
  )
}
