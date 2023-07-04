'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const logosPartner = [
  'car-1.jpg',
  'car-2.jpg',
  'car-3.jpg',
  'car-4.jpg',
];

const SectionFuturedCars = () => {
  const ref: any = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
  };

  return (
    <div className="mx-auto w-[1140px] py-32">
      <div className="relative flex items-center justify-center">
        <div className="text-center text-4xl font-bold">Futured Cars</div>
      </div>
      <div className="relative px-10 py-10">
        <button
          className="absolute right-full top-[50%] translate-y-[-50%]"
          onClick={() => ref.current.slickPrev()}
        >
          <div className="">
            <ChevronLeftIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
        <Slider {...settings} ref={ref}>
          {logosPartner.map((logo, index) => {
            return (
              <div key={logo + index} className="pb-6">
                <div className="relative h-[97px] group overflow-hidden">
                  <div className="flex h-full items-center justify-center group-hover:scale-110">
                    <img src={'/images/' + logo} alt="" />
                  </div>
                
                </div>
              </div>
            );
          })}
        </Slider>
        <button
          className="absolute left-full top-[50%] translate-y-[-50%]"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <div className="">
            <ChevronRightIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionFuturedCars;
