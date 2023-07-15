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

];

const ClientsFeedback = () => {
  const ref: any = useRef();
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
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
        <div className="relative  pt-10">
          <Slider {...settings} ref={ref}>
            {logosPartner.map((logo) => {
              return (
                <div key={logo} className="pb-6 relative pt-10">
                  <span className="text-[400px] text-red-400 font-bold opacity-10 absolute -top-40 left-[50%] translate-x-[-50%]"> &rdquo;</span>
                    <div className="h-[173px] w-[730px] mx-auto leading-9 text-center">
                        <em className='text-lg text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do them eiusmod tempor incididunt labore et dolorie magna aliqua. Ut enim adminim veniam, quis nostrud exercitation. ullamco laboris nisi ut aliquip ex eacommodo</em>
                        <div className="bg-slate-600 h-[1px] w-[200px] mx-auto mt-8"></div>
                        <h4 className='mt-5 text-2xl font-bold'>Richar Branson</h4>
                        <h5 className='text-slate-400'>Vice Chairmanof WBL Group</h5>
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
