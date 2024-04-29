import Footer from "@/components/Custom/Footer";
import Navigation from "@/components/Navigations/Navbar";
import ShoppingCart from "@/components/common/ShoppingCart";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navigation />
      {/* Cart button start */}
      <ShoppingCart />
      {children}
      <Footer />
    </div>
  );
}
