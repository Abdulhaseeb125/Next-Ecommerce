import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function POST(req: NextRequest) {
  const productData = await req.json();

  try {
    const createdCart = await prisma.shopping_cart.create({
      data: {
        user_id: productData.user_id,
        quantity: productData.quantity,
        products: {
          connect: { product_id: productData.product_id },
        },
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error creating shopping cart:", error);
    return NextResponse.json(
      { error: "Failed to create shopping cart" },
      { status: 500 }
    );
  }
}
