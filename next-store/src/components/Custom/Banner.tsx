"use client";
import "#/css/SlideBox.css";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/images/poster.jpg",
        "/images/poster1.jpg",
        "/images/poster2.jpg"

    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    },[slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000)
        return () => clearInterval(slideInterval)
    }, [nextSlide])

    return (
        <div className="slide-box rounded-md shadow h-48 md:h-64 ">
            <div
                className="slides-container"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: "transform 0.5s ease",
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="slide h-48 md:h-64">
                        <Image src={slide} alt={''} className="w-full h-full  " width={10000} height={10000} priority={true} />
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={prevSlide}>
                <BiChevronLeft size={24} />
            </button>
            <button className="next-button" onClick={nextSlide}>
                <BiChevronRight size={24} />
            </button>
        </div>
    );
}
