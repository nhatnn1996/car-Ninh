'use client';
import {
  ArrowLongRightIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  CircleStackIcon,
  ClockIcon,
  Cog8ToothIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  FunnelIcon,
  GifIcon,
  GiftIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MicrophoneIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
  ShoppingBagIcon,
  StarIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import SectionPartner from './partner';
import SectionBrowse from './browse';
import SectionFuturedCars from './featuredcars';
import LatestCollection from './latestcollection';
import ClientsFeedback from './clientsfeedback';
import Footer from '../details/footer';
import Header from '../details/header';

const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];
const Section = () => {
  return (
    <div className="">
      {/* topmenu */}
     <Header/>

      {/* slide */}
      <div className="h-full">
        <img src="/images/slide.jpeg" alt="" />
      </div>

      {/* find car dùng select*/}
      <div className="relative mx-auto h-[150px] w-[1110px] bg-red-600">
        <div className="absolute bottom-[100%] left-0 bg-red-600">
          <div className="flex h-[50px] items-center px-10 text-xl font-bold text-white">
            <TruckIcon className="mr-3 w-7 stroke-white" />
            Find Your Car
          </div>
        </div>
        <div className="flex h-full w-full items-center px-10">
          <div className="grid h-[50px] w-full grid-cols-5 gap-4">
            <select className=" bg-stone-100 px-3">
              <option>Select Body</option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>Luxury</option>
            </select>

            <select className=" bg-stone-100 px-3">
              <option>Select Make</option>
              <option>Car Club</option>
              <option>Ceoper</option>
              <option>Wodi</option>
            </select>

            <select className=" bg-stone-100 px-3">
              <option>Select Milleage</option>
              <option>1500</option>
              <option>10000</option>
            </select>

            <select className=" bg-stone-100 px-3">
              <option>Select Price</option>
              <option>$16,000</option>
              <option>$10,000</option>
              <option>$8,000</option>
            </select>

            <button className=" bg-black font-bold text-white" type="submit">
              SEARCH CAR
            </button>
          </div>
        </div>
      </div>

      {/* market place */}
      <div className="container mx-auto my-10 grid w-[1170px] grid-cols-2 items-center gap-4">
        <div>
          <img
            className="h-full w-full"
            src="/images/car-1-marketplace.png"
            alt=""
          />
        </div>
        <div className="ml-10 grid h-full grid-rows-3">
          <div className="relative mt-20 text-4xl font-bold leading-tight">
            <div className="absolute bottom-20 left-0">
              <img src="/images/bg-marketplace.png" alt="" />
            </div>
            <span className="text-black">World largest</span>
            <span className="ml-3 text-primary">automotive </span>
            <span className="text-black">marketplace.</span>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex">
                <div className="">
                  <TruckIcon className="h-10 w-10 stroke-primary" />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold">Best collection</span>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="">
                  <CurrencyDollarIcon className="h-10 w-10  stroke-primary" />
                </div>
                <div className="ml-2">
                  <span className="text-xl font-bold">Best price</span>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="">
                  <div className="flex">
                    <div className="">
                      <TruckIcon className="h-10 w-10 stroke-primary" />
                    </div>
                    <div className="ml-2">
                      <span className="text-xl font-bold">Famous Brands</span>
                      <p className="text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <div className="">
                      <StarIcon className="h-10 w-10 stroke-primary" />
                    </div>
                    <div className="ml-2">
                      <span className="text-xl font-bold">Best Ratings</span>
                      <p className="text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[358px] w-full items-center bg-black bg-[url('/images/b-feature-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-[1140px] ">
          <div className="grid grid-cols-4 gap-4 leading-6">
            <div className="text-white ">
              <div className="flex-center group  relative h-[91px] w-[91px]">
                <div className="animate absolute left-0 top-0 hover:rotate-90">
                  <img
                    src="/images/border-icon.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <TruckIcon className="w-10 stroke-white" />
              </div>
              <p className="mt-5 text-2xl font-bold">Free Shipping</p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet after consectetur adipisicing
              </p>
            </div>
            <div className=" text-white">
              <div className="group relative flex h-[91px] w-[91px] items-center justify-center">
                <div className="animate absolute left-0 top-0 group-hover:rotate-90">
                  <img
                    src="/images/border-icon.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <WrenchScrewdriverIcon className="w-10 stroke-white" />
              </div>

              <p className="mt-5 text-2xl font-bold">5 Free Servicing </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet after consectetur adipisicing
              </p>
            </div>
            <div className="text-white">
              <div className="flex-center group relative h-[91px] w-[91px]">
                <div className="animate absolute left-0 top-0 group-hover:rotate-90">
                  <img
                    src="/images/border-icon.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <MicrophoneIcon className="w-10 stroke-white" />
              </div>

              <p className="mt-5 text-2xl font-bold ">24/7 Help Center</p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet after consectetur adipisicing
              </p>
            </div>
            <div className="text-white">
              <div className="flex-center group relative h-[91px] w-[91px]">
                <div className="animate absolute left-0 top-0 group-hover:rotate-90 ">
                  <img
                    src="/images/border-icon.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <GiftIcon className="w-10 stroke-white" />
              </div>
              <p className="mt-5 text-2xl font-bold">Sure Gift Packs</p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet after consectetur adipisicing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* latest collection */}
      <LatestCollection />

      {/* popular brands */}
      <SectionPartner />

      {/* featured cars */}
      <SectionFuturedCars />

      {/* Browse by type */}
      <SectionBrowse />

      {/* Clients Feedback */}
      <ClientsFeedback />
      {/* latest news */}
      <div className="mx-auto mt-[100px] w-[1110px]">
        <div className="flex-center relative text-5xl font-bold">
          Lastest News
          <div className="absolute bottom-5">
            <img src="/images/bg-marketplace.png" alt="" />
          </div>
        </div>

        <div className="my-24 grid grid-cols-3 gap-8">
          <div className=" w-full rounded-md shadow-lg">
            <div className="h-[233px] w-full ">
              <img
                src="/images/lt-1.jpeg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <div className="relative mx-5 my-5">
                <div className="flex text-slate-400 ">
                  <CalendarDaysIcon className="mr-2 w-5" />
                  Mar 11, 2020
                </div>
                {/* <div className=" h-6 w-[1px] bg-black"></div> */}
                <div className="mt-5 text-xl font-bold">
                  Nissan and Infiniti recall 1.2 million vehicles
                </div>
                <p className="mt-5 text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  them eiusmod. tempor incididunt is labore et dolorie
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full rounded-md shadow-lg">
            <div className="h-[233px] w-full ">
              <img
                src="/images/lt-2.jpeg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <div className="relative mx-5 my-5">
                <div className="flex text-slate-400">
                  <CalendarDaysIcon className="mr-2 w-5" />
                  Mar 11, 2020
                </div>
                {/* <div className=" h-6 w-[1px] bg-black"></div> */}
                <div className="mt-5 text-xl font-bold">
                  This non-slip tool mat might your garage
                </div>
                <p className="mt-5 text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  them eiusmod. tempor incididunt is labore et dolorie
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full rounded-md shadow-lg">
            <div className="h-[233px] w-full ">
              <img
                src="/images/lt-3.jpeg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <div className="relative mx-5 my-5">
                <div className="flex text-slate-400 ">
                  <CalendarDaysIcon className="mr-2 w-5" />
                  Mar 03, 2020
                </div>
                {/* <div className=" h-6 w-[1px] bg-black"></div> */}
                <div className="mt-5 text-xl font-bold">
                  EPA chief blasts California air threatens
                </div>

                <p className="mt-5 text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  them eiusmod. tempor incididunt is labore et dolorie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
     <Footer/>
    </div>
  );
};

export default Section;
