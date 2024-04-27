
import Navigation from "@/components/Navigations/Navbar";
import CategoryPanel from "@/components/Custom/CategoryPanel";
import Banner from "@/components/Custom/Banner";
import Footer from "@/components/Custom/Footer";
import SalePoint from "@/components/Custom/SalePoint";
import CountDown from "@/components/Custom/TimeCounter";
import { Label } from "@/components/ui/label";
import ProductCardHorizontal from "@/components/Custom/ProductCard_H";
import ShoppingCart from "@/components/common/ShoppingCart";
import FeatureCard from "@/components/common/FeatureCard";

export default async function Index() {
  const birthday = new Date(2025, 0, 1); // Replace with your desired future date

  return (
    <div>
      {/* Cart button start */}
      <ShoppingCart />
      {/* Navigation */}
      <Navigation />


      <div className="max-w-[1400px] m-auto">
        {/* Main Body */}
        <div className="p-2">
          {/* 1st Section (Banner + Category Panel) */}
          <div className="flex gap-2">
            <CategoryPanel />
            <Banner />
          </div>

          <div className="m-4 flex flex-wrap gap-2 justify-center">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>



          {/* 2nd Section Sale Point */}
          <div className="">
            <div className=" mt-6 px-4 bg-neutral-100 dark:bg-neutral-900 p-2 flex flex-wrap gap-2 justify-between ">
              <div className=" flex items-center justify-between gap-4 w-full">
                {/* <Label className="text-xl"> Flash Sale</Label> */}
                <div className="flex items-center">
                  <Label className="text-lg">Sale Point.</Label>
                  {/* <Button>See More</Button> */}
                </div>
                <div className="flex items-center gap-3 ">
                  <Label className="">ending in: </Label>
                  <CountDown targetDate={birthday} />
                </div>
              </div>
            </div>


            <SalePoint />
            <div className="grid grid-cols-3 gap-3">
              <ProductCardHorizontal />
              <ProductCardHorizontal />
              <ProductCardHorizontal />
            </div>
          </div>
          {/* Poster */}
          {/* <Poster /> */}
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
