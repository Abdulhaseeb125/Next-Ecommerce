import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// write code to add two numbers

export default function Component() {
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6 px-6">
                <div className="grid gap-1">
                    <CardTitle className="text-2xl">Your wishlist</CardTitle>
                    <CardDescription className="text-sm leading-none">
                        {`
                    You have <span className="font-semibold">3</span> items in your
                    wishlist
                  `}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="border-t last:border-b">
                    <div>
                        <div className="px-6 py-4">
                            <div className="flex items-start gap-4">
                                <Image
                                    alt="Thumbnail"
                                    className="aspect-square rounded-lg object-cover w-auto h-auto"
                                    src="/images/product/product-01.png"
                                    width={10000}
                                    height={10000}
                                />
                                <div className="grid gap-1.5">
                                    <h2 className="font-semibold text-base leading-none">CottonSculpt Prism Tee</h2>
                                    <p className="text-sm leading-none">Comfortable and stylish tee for everyday wear</p>
                                    <h3 className="font-semibold text-sm">$99</h3>
                                </div>
                                <Button className="ml-auto" size="sm">
                                    Remove
                                </Button>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="flex items-start gap-4">
                                <Image
                                    alt="Thumbnail"
                                    className="aspect-square rounded-lg object-cover w-auto h-auto"
                                    src="/images/product/product-02.png"
                                    width={10000}
                                    height={10000}
                                />
                                <div className="grid gap-1.5">
                                    <h2 className="font-semibold text-base leading-none">Urbanite Wireless Headphones</h2>
                                    <p className="text-sm leading-none">Crisp and clear sound for your music on the go</p>
                                    <h3 className="font-semibold text-sm">$149</h3>
                                </div>
                                <Button className="ml-auto" size="sm">
                                    Remove
                                </Button>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="flex items-start gap-4">
                                <Image
                                    alt="Thumbnail"
                                    className="aspect-square rounded-lg object-cover w-auto h-auto"
                                    src="/images/product/product-03.png"
                                    width={10000}
                                    height={10000}
                                />
                                <div className="grid gap-1.5">
                                    <h2 className="font-semibold text-base leading-none">SportPro Water Bottle</h2>
                                    <p className="text-sm leading-none">Stay hydrated with this sleek and durable water bottle</p>
                                    <h3 className="font-semibold text-sm">$19</h3>
                                </div>
                                <Button className="ml-auto" size="sm">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

