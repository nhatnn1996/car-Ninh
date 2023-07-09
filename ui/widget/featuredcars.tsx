'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleStackIcon,
  Cog8ToothIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

const logosPartner = ['car-1.jpg', 'car-2.jpg', 'car-3.jpg', 'car-4.jpg'];

const SectionFuturedCars = () => {
  const ref: any = useRef();
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 6000,
    ltr: true,
  };

  return (
    <div className="mb-[170px] w-full ">
      <div className="h-[461px] w-full bg-[url('/images/car-feature-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-[1190px] pt-[115px] px-12 mx-auto">
          <div className=" text-4xl font-bold text-white">Futured Cars</div>
        </div>
        <div className="relative mx-auto w-[1190px] px-10 py-10 ">
          <div className="absolute bottom-full right-[60px] flex gap-4 items-center ">
            <button
              className="w-12 h-12 rounded-full border-white border-[1px] duration-700 hover:bg-primary/80 hover:border-0 hover:border-primary/80"
              onClick={() => ref.current.slickPrev()}
            >
              <div className="flex items-center justify-center">
                <ChevronLeftIcon className="w-3  stroke-white stroke-[5px] " />
              </div>
            </button>
            <button
              className="w-12 h-12 rounded-full border-white border-[1px] duration-700 hover:bg-primary/80 hover:border-0 hover:border-primary/80"
              onClick={() => {
                ref.current.slickNext();
              }}
            >
              <div className="flex items-center justify-center">
                <ChevronRightIcon className="w-3  stroke-white stroke-[5px]" />
              </div>
            </button>
          </div>

          <Slider {...settings} ref={ref}>
            {logosPartner.map((logo, index) => {
              return (
                <div key={logo + index} className="px-3 pb-6 pt-[33px]">
                  <div className="group w-full overflow-hidden rounded-md shadow-md">
                    <div className="h-[233px] w-full overflow-hidden">
                      <img
                        src={'/images/' + logo}
                        alt=""
                        className="animate-300 h-full w-full object-cover group-hover:scale-110"
                      />
                    </div>
                    <div className="mx-8 my-8">
                      <div className="relative text-xl font-bold">
                        <div className="group-hover:text-primary">
                          ASW t9 689
                        </div>
                        <div className="absolute right-0 top-0 text-primary">
                          $16,000
                        </div>
                      </div>
                      <span className="text-slate-400">Build year:</span>
                      <span className="ml-1">1900</span>
                    </div>
                    <div className="h-[1px] w-full bg-slate-400"></div>
                    <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
                      <div className="mx-auto flex">
                        <CircleStackIcon className="mr-2 w-6" />
                        2500
                      </div>
                      <div className="mx-auto flex">
                        <Cog8ToothIcon className="mr-2 w-6" /> Manual
                      </div>
                      <div className="mx-auto flex">
                        <FunnelIcon className="mr-2 w-6" />
                        20/24
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionFuturedCars;
