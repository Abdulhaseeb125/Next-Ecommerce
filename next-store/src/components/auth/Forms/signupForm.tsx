// import React from "react";
"use client"
// import "#/css/style.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SubmitButton from "@/components/Buttons/SubmitButton";
import { SignUpAction } from "@/actions/signUpActions";
import { useFormState } from "react-dom";
import clsx from "clsx";
import { useEffect, useRef } from "react";


// Sign up Component
export default function SignUpForm() {

    const [state, formAction]: any = useFormState(SignUpAction, null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.message.success) {
            // Reset form fields on success
            formRef?.current?.reset();
        }
    }, [state?.message.success]);

    return (
        <>
            <div className=" px-10 py-10 rounded-lg sm:input_box my-auto border">
                <div className="flex justify-between items-center mb-3">
                    <Label className="text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Welcome</Label>
                </div>
                <form action={formAction} ref={formRef}>
                    {state?.message?.serverError && <div className=" text-xs flex items-center p-3 h-12 bg-opacity-30 rounded bg-red-500 ">{state.message.serverError}</div>}
                    {state?.message?.success && <div className="text-xs flex items-center p-3 h-11 bg-opacity-30 rounded bg-green-500  ">{state.message.success}</div>}
                    <div className="grid  gap-1">
                        <div>
                            <Label>Name</Label>
                            <Input
                                type="name"
                                placeholder="Enter you full name"
                                name="name"
                                className={clsx({
                                    "ring-1 ring-red-500": state?.message?.name
                                })}
                            />
                            <span className="text-xs text-red-500">{state?.message?.name}</span>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                name="email"
                                className={clsx({
                                    "ring-1 ring-red-500": state?.message?.email
                                })}
                            />
                            <span className="text-xs text-red-500">{state?.message?.email}</span>
                        </div>

                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                className={clsx({
                                    "ring-1 ring-red-500": state?.message?.password
                                })}
                            />
                            <span className="text-xs text-red-500">{state?.message?.password}</span>
                        </div>

                        <div>
                            <Label>Confirm Password</Label>
                            <Input
                                type="password"
                                placeholder="Re enter password"
                                name="confirm"
                                className={clsx({
                                    "ring-1 ring-red-500": state?.message?.confirm
                                })}
                            />
                            <span className="text-xs text-red-500">{state?.message?.confirm}</span>
                        </div>
                    </div>
                    <br />
                    <div className="flex gap-3 items-center">
                        <SubmitButton />
                    </div>
                </form>

                <div className="mt-4">
                    Already have an account?
                    <Link
                        href={"/login"}
                        className="hover:underline text-primary px-2"
                    >
                        Log in
                    </Link>
                </div>
            </div>
        </>
    );
}
