'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const logosPartner = [
  'pb-1.png',
  'pb-2.png',
  'pb-3.png',
  'pb-4.png',
  'pb-5.png',
  'pb-6.png',
  'pb-7.png',
  'pb-8.png',
  'pb-1.png',
  'pb-2.png',
  'pb-3.png',
  'pb-4.png',
  'pb-5.png',
  'pb-6.png',
  'pb-7.png',
  'pb-8.png',
];

const ClientsFeedback = () => {
  const ref: any = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
  };

  return (
    <div className="h-[641px] w-full bg-[url('/images/feedback-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="h-full py-[100px]">
        <div className="flex-center relative text-5xl font-bold">
          Clients Feedback
          <div className="absolute bottom-5">
            <img src="/images/bg-marketplace.png" alt="" />
          </div>
        </div>
        <div className="relative px-10">
          <Slider {...settings} ref={ref}>
            {logosPartner.map((logo) => {
              return (
                <div key={logo} className="pb-6">
                  <div className="relative h-[97px]">
                    <div className="flex h-[73px] w-full items-center justify-center">
                      <img src={'/images/pb/' + logo} alt="" />
                    </div>
                    <p className="absolute top-full w-full text-center"></p>
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

export default ClientsFeedback;
