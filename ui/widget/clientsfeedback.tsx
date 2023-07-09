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
<<<<<<< HEAD
    speed: 2000,
=======
    speed: 500,
>>>>>>> 02f9916 (update)
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
<<<<<<< HEAD
    autoplay: true,
    autoplaySpeed: 2000,
=======
>>>>>>> 02f9916 (update)
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
        <div className="relative  pt-20">
          <Slider {...settings} ref={ref}>
            {logosPartner.map((logo) => {
              return (
<<<<<<< HEAD
                <div key={logo} className="pb-6 relative">
                  <span className="text-[400px] text-red-400 font-bold opacity-25 absolute top-0 "> &rdquo;</span>
=======
                <div key={logo} className="pb-6 ">
>>>>>>> 02f9916 (update)
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
