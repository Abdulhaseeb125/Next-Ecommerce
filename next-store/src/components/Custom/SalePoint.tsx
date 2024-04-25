// import React from "react";
// import React from "react";
import ProductCardVertical from "@/components/Custom/ProductCard_V";

export default function SalePoint() {
    let items = [
        {
            id: 1,
            src: "/images/products/productsimage_1712983440619_0.io08sskqtc2.png",
            category: "style",
            title: "Attractive Watch for men and women",
            price: "2500",
            extra: "",
        },
        {
            id: 2,
            src: "/images/products/productsimage_1712983641891_0.s54dt4ha7qq.png",
            category: "laptops",
            title: "Apple est Selling Laptop with top performance",
            price: "3000",
            extra: "",
        },
        {
            id: 3,
            src: "/images/products/productsimage_1712983440619_0.io08sskqtc2.png",
            category: "laptops",
            title: "Best Selling Laptop with top performance",
            price: "6000",
            extra: "",
        },
        // {
        //     id: 4,
        //     src: "/images/product/product-04.png",
        //     category: "laptops",
        //     title: "HP best selling Laptop for Gaming",
        //     price: "2000",
        //     extra: "",
        // },
        // {
        //     id: 5,
        //     src: "/images/product/product-thumb.png",
        //     category: "style",
        //     title: "Best Quality white T-Shirt for men",
        //     price: "2000",
        //     extra: "",
        // },
    ];
    return (
        <div>

            <div className="py-3 grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2  ">
                {items.map((i) => (
                    <ProductCardVertical
                        key={i.id}
                        image_src={i.src}
                        category={i.category}
                        title={i.title}
                        price={i.price}
                        extra={i.extra}
                    />
                ))}
            </div>
        </div>
    );
}
