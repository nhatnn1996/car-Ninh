'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const logosPartner = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
];

const Section = () => {
  const ref: any = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
  };

  const slider = ref.current;

  return (
    <div className="mx-auto w-[1140px] py-32">
      <div className="mb-20 text-center text-4xl font-bold">Popular Brands</div>
      <div className="relative bg-stone-300 px-10 py-10">
        <button
          className="absolute right-full"
          onClick={() => slider.slickPrev()}
        >
          prev
        </button>
        <Slider {...settings} ref={ref}>
          {logosPartner.map((logo, index) => {
            return (
              <div
                className="flex h-full w-full items-center justify-start"
                key={logo + index}
              >
                <img src={'/images/qq-xinhdep/' + logo} alt="" />
              </div>
            );
          })}
        </Slider>
        <button
          className="absolute left-full"
          onClick={() => slider.slickNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Section;

// Swiper component with loop and pagination
//
