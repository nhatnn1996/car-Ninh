'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
<<<<<<< HEAD
=======
  '10.png',
  '11.png',
  '12.png',
  '13.png',
>>>>>>> 8abf8f8 (update image)
];

const Section = () => {
  const ref: any = useRef();
  const settings = {
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
      <div className="relative flex items-center justify-center">
        <div className="text-center text-4xl font-bold">Popular Brands</div>
        <div className="absolute bottom-4">
          <img src="/images/qq-xinhdep/flag-2.png" alt="" className="w-20" />
        </div>
      </div>

      <div className="relative px-10 py-10">
        <button
          className="absolute right-full top-[50%] translate-y-[-50%]"
          onClick={() => slider.slickPrev()}
        >
          <div className="">
            <ChevronLeftIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
        <Slider {...settings} ref={ref}>
          {logosPartner.map((logo, index) => {
            return (
              <div key={logo + index} className="pb-6">
                <div className="relative h-[97px]">
                  <div className="flex h-[73px] w-full items-center justify-center">
                    <img src={'/images/qq-xinhdep/' + logo} alt="" />
                  </div>
                  <p className="absolute top-full w-full text-center">
                    ({index})
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
        <button
          className="absolute left-full top-[50%] translate-y-[-50%]"
          onClick={() => slider.slickNext()}
        >
          <div className="">
            <ChevronRightIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
            <ChevronRightIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section;
