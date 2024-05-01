import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { auth } from "@/lib/auth";

const toJson = (param: any): string => {
  // Return type for stricter checking
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};

export async function GET(req: NextRequest) {
  try {
    const session = await auth(); // Pass request for proper cookie handling
    const userID = Number(session?.user?.id);

    if (!userID) {
      // Handle unauthorized access (redirect to login or return error)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const cart = await prisma.shopping_cart.findMany({
      select: {
        products: {
          select: {
            product_id: true,
            product_title: true,
            price: true,
            stock_quantity: true,
            images: true,
          },
        },
      },
      where: {
        user_id: userID,
      },
    });

    const shopping_cart = cart.map((product) => toJson(product));

    return NextResponse.json({ shopping_cart }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
