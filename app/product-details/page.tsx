'use client';
import axiosCms from '@/services/api/cms';
import { ServiceProps } from '@/lib/interface/products';
import HeadMeta from '@/ui/head';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import {
  ArrowLongRightIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserIcon,
  MapPinIcon as MapIconOutline,
  CircleStackIcon,
  Cog8ToothIcon,
  FunnelIcon,
 
} from '@heroicons/react/24/outline';
import {
  MapPinIcon,
  EnvelopeIcon as EenvelopeIcon,
  PhoneIcon as PphoneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import PartialQuery from '@/ui/shop/option';
import LeftImages from '@/ui/details/left-images';
import Footer from '@/ui/details/footer';
import Header from '@/ui/details/header';

export default async function News() {
  const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];
  const left = [
    { left1: 'Date', right: 'March 6, 2020' },
    {
      left1: 'Transmission',
      right: 'Auto',
    },
    {
      left1: 'Year',
      right: '1990',
    },
    {
      left1: 'Engine Size',
      right: '2500',
    },
    {
      left1: 'Body Type ',
      right: 'Sedan',
    },
    {
      left1: 'Engine Type',
      right: 'Petrol',
    },
    {
      left1: 'Abssembly',
      right: 'Bangladesh',
    },
    {
      left1: 'Seat',
      right: '4',
    },

    {
      left1: 'Color',
      right: `<span class=" rounded-full bg-yellow-200 inline-block w-5 h-5 bg-red" > </span> 
         <span class=" rounded-full bg-black inline-block w-5 h-5 bg-red" ></span> 
         <span class=" rounded-full bg-gray-300 inline-block w-5 h-5 bg-red" ></span>`,
    },
    {
      left1: 'Doors',
      right: '4',
    },
  ];
  const overview = [
    'Strong engine options, including a plug-in hybrid',
    'Standard adaptive air suspension delivers a comfortable',
    'Exceptional rear passenger space',
    'Abundant standard equipment, including safety tech',
    'No standard-length wheelbase model available',
    'Not the driver-focused benchmark it once was',
  ];

  const spec = [
    ' Performance & Efficiency',
    'Audio System',
    'Instrumentation & Controls',
    'Comfort & Convenience',
    'Safety and Security',
    'Interior',
    'Exterior',
    'Safety',
    'Entertainment',
    'Auto Checkup',
  ];

  const nearfooter = [
    {
      pic: 'car-1.jpg',
      name: 'AMS Ha Voupa',
      price: '$16,000',
      year: '1900',
    },
    {
      pic: 'car-2.jpg',
      name: 'Gebrari Fa Doupa',
      price: '$16,000',
      year: '1900',
    },
    {
      pic: 'car-3.jpg',
      name: 'ASW t9 689',
      price: '$16,000',
      year: '2015',
    },
  ];
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
  };

  const logosPartner = ['car-1.jpg', 'car-2.jpg', 'car-3.jpg', 'car-4.jpg'];

  return (
    <div>
      <Header/>
      <div className="relative flex">
        <div className="absolute h-[266px] w-full bg-neutral-950 opacity-50"></div>
        <div className="h-[266px] w-full bg-[url('/images/product-details/breadcrumb-bg-3-1.jpg')] bg-cover bg-no-repeat"></div>
        <div className="absolute left-[40%] top-[37%] ">
          <div className="flex  pt-4  text-white">
            <a href="#">Home</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">Vehicle Listings</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">Sedan </a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#"> Gebrari Fa Doupa</a>
          </div>
        </div>
      </div>
      <div className=" px-[150px] py-[100px]">
        <div className="grid grid-cols-3 gap-8  ">
          {/* top left */}
          <LeftImages />
          {/* top right */}
          <div className="">
            <button className=" h-[60px] w-[350px] bg-primary font-bold text-white duration-300 hover:bg-red-600">
              <p className="">ADD TO CART</p>
            </button>
            <button className="mt-3 h-[60px] w-[350px] bg-neutral-800 font-bold text-white duration-300 hover:bg-primary">
              <p className="">MAKE AN OFFER PRICE</p>
            </button>
            <div className=" mt-3">
              <div className=" w-[350px] bg-neutral-100 px-10 text-neutral-400 ">
                {left.map((obj: any, index) => (
                  <div key={obj.left1 + obj.right} className="group text-sm">
                    <div className="text-md">
                      <div className="flex py-5">
                        <p>{obj.left1}</p>
                        <div
                          className="ml-auto font-bold text-neutral-800"
                          dangerouslySetInnerHTML={{ __html: obj.right }}
                        />
                      </div>
                      <div className="h-[1px] w-full bg-neutral-300 group-last:hidden"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="mt-[30px]">
          <p className="text-4xl font-bold">Overview</p>
          <p className="mt-5 text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut
            enim adoren minim venim quis nostrud exercitation. Ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <div className="mt-5 text-neutral-400">
                {overview.map((name, index) => (
                  <div key={index + name} className="mb-3 flex">
                    <CheckCircleIcon className="mr-2 w-5 fill-green-500" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="mt-5 text-neutral-400">
                {overview.map((name, index) => (
                  <div key={index + name} className="mb-3 flex">
                    <CheckCircleIcon className="mr-2 w-5 fill-green-500" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        {/* <div className="mt-[60px]">
          <p className="text-4xl font-bold">Specification</p>
          <div className="mt-5 grid grid-cols-3 gap-4">
     
            <div className="h-[823px] bg-neutral-100">
              <div className="mt-5 py-[25px] text-neutral-400 ">
                {spec.map((name, index) => (
                  <a
                    href="#"
                    key={index + name}
                    className="mb-3 flex h-[60px] items-center pl-10 duration-500 hover:bg-primary hover:text-white"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
  
            <div className="col-span-2"></div>
          </div>
        </div> */}

        {/* Related Cars */}
        <div className="mt-[150px]">
          <div className="flex-center relative text-5xl font-bold">
            Related Cars
            <div className="absolute bottom-5">
              <img src="/images/bg-marketplace.png" alt="" />
            </div>
          </div>
          <div className=" mt-[70px] grid grid-cols-3 gap-6 text-black">
            {nearfooter.map((obj: any, index) => (
              <div key={obj.pic + obj.name} className="mb-4 text-sm  ">
                <div className=" group w-full">
                  <div className="w-full overflow-hidden ">
                    <img
                      src={'/images/vehicles/' + obj.pic}
                      alt=""
                      className="animate-300 h-full w-full object-cover group-hover:scale-110"
                    />
                  </div>
                  <div className=" my-6">
                    <div className="relative text-xl font-bold">
                      <div className=" animate-300 group-hover:text-primary">
                        {obj.name}
                      </div>
                      <div className="absolute right-0 top-0 text-primary">
                        {obj.price}
                      </div>
                    </div>
                    <span className="text-neutral-500">Build Year:</span>
                    <span className="ml-1">{obj.year}</span>
                  </div>
                  <div className="h-[1px] w-full bg-neutral-300"></div>
                  <div className="flex h-[50px] w-full items-center stroke-neutral-500 text-neutral-500">
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
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
     <Footer/>
    </div>
  );
}

export const revalidate = 1000;
