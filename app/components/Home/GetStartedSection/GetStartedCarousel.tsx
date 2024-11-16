"use client";
import React, { useEffect, useRef, useState } from 'react'

interface GetStartedCarouselProps {
  templateData: {
    heading: string;
    paragraph: string;
    imgSrc: string;
    templateColor?: string;
    className?: string;
  }[];
  className?: string;
  autoChange?: boolean;
  interval?: number;
}

const GetStartedCarousel = ({ templateData, className, autoChange, interval } : GetStartedCarouselProps) => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [intervalTime, setIntervalTime] = useState<number>(interval || 1000);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartY(e.pageY - carouselRef.current.offsetTop);
      setScrollTop(carouselRef.current.scrollTop);
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const y = e.pageY - carouselRef.current.offsetTop;
    const walk = Math.ceil(y - startY * 1.5); // Scroll Speed
    carouselRef.current.scrollTo({
      top: scrollTop - walk,
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
      <div className={`get-started-carousel w-[70%] flex flex-col items-center overflow-y-auto overflow-x-clip p-4 scroll-smooth gap-[25%] relative sm:w-full ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${className ? className : ""}`}
        style={{scrollSnapType: "y mandatory"}}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        draggable={false}
      >
        {templateData.map((template, index) => (
          <div key={template.heading + index} className={`get-started-template sticky top-0 left-0 w-full flex gap-5 shrink-0 rounded-3xl items-stretch select-none sm:flex-col ${template.className ? template.className : ""}`}
            style={{
              backgroundColor: template.templateColor ? template.templateColor : "white", 
              zIndex: index,
              scrollSnapAlign: "center"
            }}
            draggable={false}
            >
            <div className="get-started-template_textarea w-3/5 h-full flex flex-col justify-center items-center text-white gap-5 sm:h-fit sm:w-full">
              <div className="get-started-template_heading w-4/5 sm:w-full">{template.heading}</div>
              <div className="get-started-template_paragraph w-4/5 sm:w-full">{template.paragraph}</div>
            </div>
            <div className="get-started-template_image w-2/5 h-full flex justify-center aspect-square sm:w-fit sm:place-self-center">
              <img src={template.imgSrc ? template.imgSrc : ""} alt={`${template.heading} Image`} draggable={false} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GetStartedCarousel;