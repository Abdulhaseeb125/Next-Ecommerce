// import React from "react";
"use client"
// import "#/css/style.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import SubmitButton from "@/components/Buttons/SubmitButton";
import { useRouter } from "next/navigation";
import loginValidator from "@/Validators/loginValidator";
import { getUser } from "@/actions/loginAction";


// Sign up Component
export default function LoginForm() {
    const [error, setError] = useState({ message: '', path: '' });
    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        const email = formData.get('email');
        const password = formData.get('password');
        const { value, error } = loginValidator.validate({ email, password });
        if (error) {
            const validationMessage = error.details[0].message;
            const path: any = error.details[0].path[0];
            setError({
                message: validationMessage,
                path: path
            });
            return;
        }


        const credentials = {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        }

        try {
            const response = await getUser(credentials);
            if (response?.ok) {
                router.push('/');
                router.refresh();
            }
            else {
                setError({
                    message: "Invalid email or password",
                    path: 'server'
                })
            }
        } catch (err) {
            setError({
                message: "Something went wrong, please try again",
                path: 'server'
            })
        }

    }

    return (
        <>
            <div className=" px-10 py-10 rounded-lg sm:input_box my-auto border">
                <div className="flex justify-between items-center mb-3">
                    <Label className="text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Welcome</Label>
                </div>
                <form action={handleSubmit} >
                    {error.path === "server" && <div className=" text-xs flex items-center p-3 h-12 bg-opacity-30 rounded bg-red-500 ">{error.message}</div>}
                    {false && <div className="text-xs flex items-center p-3 h-11 bg-opacity-30 rounded bg-green-500  "></div>}
                    <div className="grid  gap-1">
                        {/* // ? Email */}
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                name="email"
                                onChange={() => setError({ message: "", path: "" })}
                                className={clsx({
                                    "ring-1 ring-red-500": error.path === "email"
                                })}
                            />
                            {error.path === "email" && <span className="text-xs text-red-500">{error.message}</span>}
                        </div>
                        {/* // ? Password */}
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={() => setError({ message: "", path: "" })}
                                className={clsx({
                                    "ring-1 ring-red-500": error.path === "password"
                                })}
                            />
                            {error.path === "password" && <span className="text-xs text-red-500">{error.message}</span>}
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
                        href={"/register"}
                        className="hover:underline text-primary px-2"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}
