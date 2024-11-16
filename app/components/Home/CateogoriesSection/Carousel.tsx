"use client";
import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  items: {
    title: string;
    subtitle?: string;
    author: {
      name: string;
      imgUrl: string;
    };
    imgSrc?: string;
    redirectUrl?: string;
    active?: boolean;
  }[];
  interval?: number;
  autoChange?: boolean;
  className?: string;
}

const Carousel = ({
  items,
  interval,
  autoChange,
  className,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, []);


  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = Math.ceil(x - startX) ; // Scroll Speed
    carouselRef.current.scrollTo({
      left: scrollLeft - walk,
      behavior: "smooth",
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className={`carousel w-full flex items-center gap-10 overflow-x-auto ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${className ? className : ""}`}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`carousel-item flex flex-col justify-end items-center p-3 gap-2 flex-shrink-0 select-none rounded-2xl transition-all duration-500 ease-out scroll-smooth sm:p-1`}
              draggable={false}
              style={{
                backgroundImage: `url(${
                  item.imgSrc != ""
                    ? item.imgSrc
                    : "/Home/ExtraSections/TravelSection1/default.png"
                })`,
                backgroundSize: `${item.imgSrc ? "100% 100%" : "cover"}`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                animationDelay: `${index* 0.5}s`
              }}
            >
              <div className="carousel-item_heading text-center">{item.title}</div>
              <div className="carousel-item_subheading text-center">{item.subtitle}</div>
              <div className="carousel-item_author-info flex justify-center items-stretch bg-white px-6 py-1 rounded-2xl text-black gap-5 sm:hidden">
                <div className="carousel-item_author_name flex items-center justify-center text-center">{item.author.name}</div>
                {item.author.imgUrl ? <div className="carousel-item_author_photo rounded-full bg-black">
                  <img src={item.author.imgUrl} alt={`${item.author.name}'s Photo`} className="rounded-full flex aspect-square max-w-5" draggable={false} />
                </div> : <></>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
