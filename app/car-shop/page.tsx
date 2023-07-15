import axiosCms from '@/services/api/cms';
import { ServiceProps } from '@/lib/interface/products';
import HeadMeta from '@/ui/head';

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
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import {
  MapPinIcon,
  EnvelopeIcon as EenvelopeIcon,
  PhoneIcon as PphoneIcon,
} from '@heroicons/react/24/solid';
import PartialQuery from '@/ui/shop/option';
import Footer from '@/ui/details/footer';
import Header from '@/ui/details/header';

export default async function News() {
  const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];

  const sbbrand = [
    'Aoyoa (1)',
    'Biayaoa (2)',
    'Car Club (1)',
    'Ceoper (1)',
    'Land Cripter (1)',
    'Wilcon (1)',
  ];

  const findcar = [
    'Search by Brand',
    'Filter Price',
    'Build Year',
    'Body Type',
    'Fuel Type',
    'Transmission',
    'Seating Capacity	',
    'Engine CC',
  ];

  const left = [
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
    {
      pic: 'car-4.jpg',
      name: 'Tarcedez Bub 20',
      price: '$8,000',
      year: '1900',
    },
    {
      pic: 'car-5.jpg',
      name: 'Gudi F8 2019',
      price: '$16,000',
      year: '1900',
    },
    {
      pic: 'car-6.jpg',
      name: 'Joudi A10 Gybid',
      price: '$6,000',
      year: '1900',
    },
    {
      pic: 'car-3.jpg',
      name: 'Maguer M1 Hybed',
      price: '$16,000',
      year: '2015',
    },
    {
      pic: 'car-1.jpg',
      name: 'Terdenez Zent E',
      price: '$6,000',
      year: '1900',
    },
    {
      pic: 'car-2.jpg',
      name: 'Qoudi A8 Hyed',
      price: '$16,000',
      year: '1900',
    },
  ];

  return (
    <div>
      <Header/>
      <div className="relative flex">
        <div className="absolute h-[350px] w-full bg-black opacity-50"></div>
        <div className="h-[350px] w-full bg-[url('/images/news/vehicle.jpeg')] bg-cover bg-no-repeat"></div>
        <div className="absolute left-[40%] top-[37%] ">
          <p className="text-6xl font-bold text-white">Car Shop</p>
          <div className="flex pl-5 pt-4 text-white">
            <a href="#">Home</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">Vehicle Listings</a>
          </div>
        </div>
      </div>
      <div className=" px-[150px] py-[100px]">
        <div className="grid grid-cols-4 gap-6  ">
          {/* left */}
          <div className="">
            <div className="flex h-[60px] w-full  items-center bg-neutral-900 pl-4 text-xl  font-bold text-white">
              <p>Find your Car</p>
            </div>
            {/* Search by Brand */}
            <div className="shadow-lg">
              {findcar.map((car, index) => (
                <PartialQuery
                  key={index + car + 'content-filter'}
                  partial={car}
                  index={index}
                />
              ))}
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 ">
            <div className="flex items-center pb-6">
              <div className="text-2xl font-bold">{left.length} Cars Found</div>
              <div className="ml-auto flex items-center border-[1px] border-slate-300 px-2 py-1.5">
                <div>Sort By:</div>
                <select
                  name=""
                  id=""
                  className="ml-2 text-neutral-400 outline-none"
                >
                  <option value="">
                    {' '}
                    <span>Newest Before</span>
                  </option>
                  <option value="">Lowest Before</option>
                  <option value="">Highest Before</option>
                  <option value="">Newest Before</option>
                  <option value="">Oldest Before</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-6 text-black">
              {left.map((obj: any, index) => (
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
            <div className="mx-auto mt-10 flex w-fit items-center gap-2">
              <div className="h-10 w-10 bg-primary px-4 py-2 text-white">1</div>
              <div className="h-10 w-10 px-4 py-2 text-neutral-700 duration-300 hover:bg-primary hover:text-white">
                <a href="#">2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export const revalidate = 1000;
