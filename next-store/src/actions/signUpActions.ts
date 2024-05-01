"use server";

import prisma from "@/lib/prismaClient";
import signUpValidator from "@/Validators/signUpValidator";
import bcrypt from "bcryptjs";

interface FormData {
  get: (field: string) => string;
}

const PASSWORD_CONFIRM_ERROR = "Password did not match";
const SERVER_ERROR_MESSAGE = "Something went wrong";
const EMAIL_EXISTS_ERROR = "Email Already Exists";
const SUCCESS = "User Created Successfully, You can now login";
export async function SignUpAction(initialState: any, formData: FormData) {
  // *  Extracting form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  };
  // * Validating the form
  const { error } = signUpValidator.validate(rawFormData);

  if (error) {
    const validationMessage = error.details[0].message;
    const path = error.details[0].path[0];
    return {
      message: {
        [path]: validationMessage,
      },
    };
  }

  // * Raising password not matched custom error message
  if (rawFormData.password !== rawFormData.confirm) {
    return {
      message: {
        confirm: PASSWORD_CONFIRM_ERROR,
      },
    };
  }
  try {
    // * Trying to create a new User
    await prisma.users.create({
      data: {
        username: rawFormData.name,
        email: rawFormData.email,
        password: await bcrypt.hash(rawFormData.password, 10),
        gender_id: 0,
      },
    });
    return {
      message: {
        success: SUCCESS,
      },
    };
  } catch (error: any) {
    // * Catching Errors
    if (error.meta && error.meta.target === "email") {
      return { message: { serverError: EMAIL_EXISTS_ERROR } };
    } else {
      console.error("Error creating user:", error);
      return { message: { serverError: SERVER_ERROR_MESSAGE } };
    }
  }
}
