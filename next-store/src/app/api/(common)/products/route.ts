import prisma from "@/lib/prismaClient";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const toJson = (param: any): string => {
  // Return type for stricter checking
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({}, { status: 404 });
  } else {
    const product = await prisma.products.findUnique({
      select: {
        product_id: true,
        product_title: true,
        product_description: true,
        price: true,
        stock_quantity: true,
        product_condition: true,
        brand_name: true,
        images: true,
        categories: true,
        product_size: true,
        size_id: true,
      },
      where: {
        product_id: Number(id),
      },
    });
    if (product) {
      const json = toJson(product);
      // console.log(product);

      return NextResponse.json({ json }, { status: 200 });
    }
    return NextResponse.json({}, { status: 404 });
  }
}
