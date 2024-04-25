"use server";
import { signIn } from "@/lib/auth";
import { CredentialsSignin } from "next-auth";

export async function getUser(credentials: any) {
  try {
    await signIn("credentials", credentials);
    return { ok: true, message: "Success" };
  } catch (err) {
    if (err instanceof CredentialsSignin) {
      return { ok: false, message: "Invalid credentials" };
    }
    throw err;
  }
}
