"use client";
import React, { useEffect, useRef, useState } from "react";

interface InfluencerCarouselProps {
  influencerData: {
    name: string;
    imgUrl: string;
    redirectUrl: string;
  }[];
  className?: string;
}

const InfluencerCarousel = ({ influencerData, className }: InfluencerCarouselProps) => {

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
    const walk = (x - startX) ; // Scroll Speed
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
      <div className={`influencers-carousel w-full flex items-center overflow-x-auto overflow-y-visible py-4 scroll-smooth ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${className ? className : ""}`}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
      {influencerData.map((influencer, index) => (
        <div key={influencer.name + index} className="influencer flex flex-col rounded-full select-none shrink-0 hover:cursor-pointer relative"
          onClick={influencer.redirectUrl ? () => { window.location.href = influencer.redirectUrl } : undefined}>
          <img
            src={influencer.imgUrl ? influencer.imgUrl : ""}
            alt={`${influencer.name}'s Image`}
            draggable={false}
            className="influencer-image text-center flex rounded-full object-top object-cover transition-all duration-500 ease-in-out"
          />
          <div className="influencer-name absolute top-[70%] left-[50%] -translate-x-[50%] bg-white text-black p-1 text-center hidden rounded-xl">{influencer.name}</div>
        </div>
      ))}
      </div>
    </>
  );
};

export default InfluencerCarousel;
