import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ProductSlide() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Image
                                alt="Product Image"
                                className="w-full h-auto rounded-lg"
                                height={600}
                                src="/images/products/productsimage_1713171201786_0.5bknmbn65l1e.png"
                                style={{
                                    aspectRatio: "600/600",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden lg:flex">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}
