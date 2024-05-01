import axios from "@/Axios";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import { ProductSlide } from "@/components/Custom/Carousel";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BiErrorAlt, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";


export default async function ProdDetails({ params }: { params: { productID: string } }) {
  let product;
  try {
    const { productId }: any = params;
    const response = await axios.get(`/api/products?id=${productId}`);
    product = JSON.parse(response.data.json);

  } catch (e: any) {
    console.log(e.message);
    return (<div className="text-2xl py-10 ">
      <span className="p-3 border flex gap-2 items-center justify-center bg-destructive">
        <BiErrorAlt />
        Something went wrong. Please Try Again
      </span>
    </div>)
  }


  return (
    <div className="flex flex-col">
      <section className="  py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="m-auto">
            <ProductSlide images={product.images} />
          </div>
          <div className="space-y-6 ">
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.product_title}
            </h1>
            <div className="flex text-yellow-400" >
              <BiSolidStar size={25} />
              <BiSolidStar size={25} />
              <BiSolidStar size={25} />
              <BiSolidStar size={25} />
              <BiSolidStarHalf size={25} />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">Rs. {product.price}</span>
            </div>
            <div className="flex gap-4">
              <AddToCartButton product={product} />
              <Button size="lg" className=" bg-btn hover:bg-btnHover text-white ">Buy Now</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20  ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Product Details</h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Category: </span>
                  {product.categories.category_name}
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Brand: </span>
                  {product.brand_name}
                </li>
                {product.categories &&
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">Condition: </span>
                    {product.product_condition ? "New" : "Used"}
                  </li>
                }
                {product.product_size &&
                  <li>
                    <span className="font-medium text-gray-900 dark:text-gray-100">Size: </span>
                    {product.product_size.size}
                  </li>
                }
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Specifications</h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Frequency Response:</span>
                  20Hz - 20kHz
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Impedance:</span>
                  32 Ohms
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Sensitivity:</span>
                  98dB
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Weight:</span>
                  250g
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20  ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Product Description</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {product.product_description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="Related Product 1"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">Acme Wireless Earbuds</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience true wireless freedom with our Acme Wireless Earbuds.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$79.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="Related Product 2"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">Acme Wireless Speakers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill your space with rich, immersive sound with our Acme Wireless Speakers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$149.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="Related Product 3"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">Acme Wireless Charger</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Charge your devices wirelessly with our Acme Wireless Charger.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$39.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="Related Product 4"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">Acme Wireless Keyboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience the ultimate in wireless productivity with our Acme Wireless Keyboard.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$59.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

