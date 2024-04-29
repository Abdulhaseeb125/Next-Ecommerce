import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { BiStar } from "react-icons/bi"
import { Button } from "../ui/button"

export default function ProductCardHorizontal() {
    return (
        <Link href={`/product/${1}`}>
            <Card>
                <CardContent className="p-6">
                    <div className="grid gap-4 lg:grid-cols-2 ">
                        <Image
                            alt="Product Image"
                            className="aspect-square object-cover rounded-lg border border-gray-200 overflow-hidden dark:border-gray-800"
                            height={400}
                            src="/images/products/productsimage_1713171201786_0.5bknmbn65l1e.png"
                            width={400}
                        />
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <h2 className="font-bold text-xl sm:text-lg">Acme Prism T-Shirt</h2>
                                <div className="flex items-center gap-2">
                                    <BiStar className="w-5 h-5 fill-primary" />
                                    <BiStar className="w-5 h-5 fill-primary" />
                                    <BiStar className="w-5 h-5 fill-primary" />
                                    <BiStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    <BiStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                </div>
                                <p className="text-sm sm:text-base">$99</p>
                                <p className="text-sm sm:text-base">The perfect blend of style and comfort.</p>
                            </div>
                            <div className="text-end">
                                <Button className="btn w-full " >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card >
        </Link>
    )
}


