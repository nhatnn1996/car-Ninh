'use client';
import {
  ExclamationCircleIcon,
  LifebuoyIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const listImages = [
  '/images/product-details/car-1.jpeg',
  '/images/product-details/car-2.jpeg',
  '/images/product-details/car-3.jpeg',
  '/images/product-details/car-4.jpeg',
  '/images/product-details/car-5.jpeg',
];

const LeftImages = () => {
  const [bigImage, setBigImage] = useState(listImages[2]);
  return (
    <div className="col-span-2 gap-0">
      <div className="h-[850px] ">
        <div className="flex text-4xl font-bold">
          <p>Gebrari Fa Doupa</p>
          <div className="ml-auto text-primary">$16,056</div>
        </div>
        <div className="mt-4 h-[1px] w-full bg-neutral-300"></div>
        <div className="text-md mt-4 flex gap-6 text-neutral-500">
          <a
            href="#"
            className="flex-center group h-[40px] w-[232px] bg-neutral-100 duration-300 hover:bg-primary hover:text-white"
          >
            <ExclamationCircleIcon className="mr-2 w-5 stroke-neutral-400 group-hover:stroke-white" />{' '}
            Request More Info
          </a>
          <a
            href="#"
            className="flex-center group h-[40px] w-[232px] bg-neutral-100 duration-300 hover:bg-primary hover:text-white"
          >
            <PencilIcon className="mr-2 w-5 stroke-neutral-400 group-hover:stroke-white" />{' '}
            Add to Compare
          </a>
          <a
            href="#"
            className="flex-center group h-[40px] w-[232px] bg-neutral-100 duration-300 hover:bg-primary hover:text-white"
          >
            <LifebuoyIcon className="mr-2 w-5 stroke-neutral-400 group-hover:stroke-white" />{' '}
            Book a Test Drive
          </a>
        </div>
        <div className="">
          <div className="mt-5">
            <img src={bigImage} alt="" className="h-full w-full" />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-5">
            {listImages.map((urlImage: any) => {
              return (
                <div className="" key={urlImage}>
                  <img
                    src={urlImage}
                    alt=""
                    className="h-fit w-fit"
                    onClick={() => {
                      setBigImage(urlImage);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImages;
