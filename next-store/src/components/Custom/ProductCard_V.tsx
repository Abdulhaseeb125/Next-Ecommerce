// import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Image from "next/image";

// import {
// Tooltip,
// TooltipContent,
// TooltipProvider,
// TooltipTrigger,
// } from "@/components/ui/tooltip";

type ProductCard = {
    image_src: string
    category: string,
    title: string,
    price: string,
    extra?: string
}

export default function ProductCardVertical({ image_src, category, price, title, extra }: ProductCard) {
    return (
        <div>
            <Link href={'#'}>
                <Card
                    className="hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-800 transition-all m-auto max-w-full w-[13.8rem] rounded border  dark:border-neutral-700"
                >
                    <CardHeader className="">
                        <Image
                            src={image_src}
                            alt=""
                            className="w-full h-full rounded aspect-[6/5]"
                            width={1000}
                            height={1000}
                        />
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{category}</CardDescription>
                        <CardTitle className="text-pretty text-sm line-clamp-2">
                            <p>{title}</p>
                        </CardTitle>
                    </CardContent>
                    <CardFooter className="font-semibold py-3 flex justify-between items-center">
                        Rs. {price}
                        {/* <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <button className="">
                                        <ShoppingCart color="orange" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent className="dark:bg-neutral-700 bg-neutral-100 dark:text-white text-black border dark:border-neutral-500">
                                    <p>Add to Cart</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider> */}
                    </CardFooter>
                </Card>
            </Link>
        </div>
    );
}
