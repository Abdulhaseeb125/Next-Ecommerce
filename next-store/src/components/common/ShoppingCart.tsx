"use client";
import axios from "@/Axios";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { addToCart } from "@/store/Slices/CartSlice";
import Image from "next/image";
import { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart() {
  const cart = useSelector((state: any) => state.cart.products);
  const dispatch = useDispatch();
  useEffect(() => {
    async function GetCart() {
      const response = await axios.get("/api/getCartItems");

      const shoppingCart = response.data.shopping_cart.map((item: any) => JSON.parse(item));
      // console.log(shoppingCart);

      shoppingCart.map((CartItem: any) => {
        console.log(CartItem);

        dispatch(addToCart(CartItem));
      })
    }
    GetCart()
  }, [dispatch]);

  useEffect(() => {
    console.log(cart);
  }, [cart])




  return (
    <Sheet>
      <SheetTrigger className="fixed z-[100] right-4 bottom-4 border p-2 rounded-full">
        <TbShoppingCart size={22} />
      </SheetTrigger>
      <SheetContent
        className="w-full z-[999] max-w-md p-6 "
        side="right"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          {/* <SheetClose /> */}
        </div>

        <div className="border-t">
          <div className="grid gap-3 pt-2">
            {cart && cart.length ? (
              cart.map((product: any) => (
                <div key={product.product_id}>
                  <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                    <Image
                      alt="Product 1"
                      className="rounded-lg object-cover"
                      height={100}
                      src={product.images[0].image_url}
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width={100}
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">{product.product_title}</h3>
                      <span className="font-semibold">$99.00</span>
                      <div className="flex items-center gap-2">
                        <Button className="p-1" size="icon" variant="outline">
                          <BiMinus className="w-4 h-4" />
                        </Button>
                        <span className="font-medium">1</span>
                        <Button className="p-1" size="icon" variant="outline">
                          <BiPlus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4">Empty Cart</div>
            )}
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total</p>
            <p className="text-lg font-semibold">Rs 0.00</p>
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
