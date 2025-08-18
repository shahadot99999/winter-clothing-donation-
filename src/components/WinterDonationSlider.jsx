import { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const WinterDonationSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [img1, img2, img3];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative mx-auto w-full h-64"> {/* Fixed height container */}
            <div className="carousel rounded-box relative w-full h-full overflow-hidden">
                {images.map((img, index) => (
                    <div 
                        key={index}
                        className={`carousel-item absolute w-full h-full transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            >
                ❮
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            >
                ❯
            </button>
        </div>
    );
};

export default WinterDonationSlider;