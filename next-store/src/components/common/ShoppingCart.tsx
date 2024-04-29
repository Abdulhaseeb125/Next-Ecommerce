"use client";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cart = useSelector((state: any) => state.cart.products);

  return (
    <Sheet>
      <SheetTrigger className="fixed z-[100] right-4 bottom-4 border p-2 rounded-full">
        <TbShoppingCart size={22} />
      </SheetTrigger>
      <SheetContent
        className="w-full z-[999] max-w-md  p-6 "
        side="right"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          {/* <SheetClose /> */}
        </div>

        <div className="border-t">
          {cart.legth ? (
            cart.map((product: any) => {})
          ) : (
            <div className="text-center p-4">Empty Cart</div>
          )}
        </div>
        <div className="mt-8 border-t pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total</p>
            <p className="text-lg font-semibold">$199.97</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button size="lg">Proceed to Checkout</Button>
            <Button size="lg" variant="outline">
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
