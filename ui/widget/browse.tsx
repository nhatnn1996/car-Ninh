'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const logosBrowse = [
  'bbt-1.png',
  'bbt-2.png',
  'bbt-3.png',
  'bbt-4.png',
  'bbt-5.png',
  'bbt-6.png',
  'bbt-1.png',
  'bbt-2.png',
  'bbt-3.png',
  'bbt-4.png',
  'bbt-5.png',
  'bbt-6.png',
];

const SectionBrowse = () => {
  const ref: any = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
  };

  const slider = ref;

  return (
    <div className="mx-auto w-[1140px] py-32">
      <div className="relative flex items-center justify-center">
        <div className="text-center text-4xl font-bold">Popular Brands</div>
        <div className="absolute bottom-4">
          <img src="/images/bg-marketplace.png" alt="" className="w-20" />
        </div>
      </div>

      <div className="relative px-10 py-10">
        <button
          className="absolute right-full top-[50%] translate-y-[-50%]"
          onClick={() => slider.current.slickPrev()}
        >
          <div className="">
            <ChevronLeftIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
        <Slider {...settings} ref={ref}>
          {logosBrowse.map((logo, index) => {
            return (
              <div key={logo + index} className="pb-6">
                <div className="relative h-[97px]">
                  <div className="flex h-[73px] w-full items-center justify-center">
                    <img src={'/images/' + logo} alt="" />
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
          onClick={() => slider.current.slickNext()}
        >
          <div className="">
            <ChevronRightIcon className="w-4 stroke-slate-400 stroke-[5px] hover:stroke-black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionBrowse;
