<<<<<<< HEAD
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

const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];
=======
import Section from './slider-example';
>>>>>>> fc1c85a63091fb7714945dca41e7dc3eda1b63ae
const Header = () => {
  return (
    <div className="">
      {/* topmenu */}
      <div className="h-[50px] bg-red-500">
        <div className=" mx-auto flex h-full w-[1170px]">
          {/* logo */}
          <div className=" logo relative h-full w-[190px] ">
            <div className="absolute left-0 top-0 h-full w-full">
              <img className="shadow-xl" src="/images/logo-car.png" alt="" />
            </div>
          </div>
          {/* chữ 1 */}
          <div className="ml-20 flex h-full items-center text-sm text-white">
            <ClockIcon className="mr-1 w-5 stroke-white" />
            Monday-Saturday 7:00AM - 6:00PM
          </div>
          {/* chữ 2 */}
          <div className="ml-20 flex h-full items-center text-sm text-white">
            <MapPinIcon className="mr-1 w-5 stroke-white" />
            1105 Roosevelt Street, CA
          </div>
          {/* chữ 3 */}
          <div className="text-md ml-auto flex h-full items-center bg-white px-9 font-bold">
            <PhoneArrowDownLeftIcon className="mr-2 w-5 stroke-primary" />
            <span className="text-primary">095</span>
            <span className="ml-1 text-black">1856 558</span>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className="h-[70px] bg-slate-50">
        <div className="mx-auto flex h-full w-[1170px] items-center">
          {/* menu vòng lặp */}
          <div className="ml-[260px] flex font-semibold uppercase text-black">
            {menus.map((name, index) => (
              <div key={index + name} className="mr-10">
                {name}
              </div>
            ))}
          </div>
          {/* icon */}
          <div className="mx-auto mr-10 flex">
            <ShoppingBagIcon className="w-7 stroke-black" />
            <div className="mx-3 h-6 w-[1px] bg-black"></div>
            <MagnifyingGlassIcon className="w-7 stroke-black" />
          </div>
        </div>
      </div>

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
      <div className="">Featured Cars</div>
      <SectionFuturedCars />

      {/* Browse by type */}
      <SectionBrowse />

      {/* Clients Feedback */}
<ClientsFeedback/>
      {/* latest news */}
      <div className="mx-auto w-[1110px] mt-[100px]">
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
      <div className="">
        <div className="h-[546px] w-full bg-black bg-[url('/images/footer-bg.jpeg')] bg-cover bg-center bg-no-repeat">
          <div className="mx-auto flex w-[1110px] pt-20 text-white">
            <div className="mr-20 w-[260px]">
              <div className="">
                <img
                  src="/images/logo-footer.png"
                  alt=""
                  className="h-[140px] w-[190px]"
                />
              </div>
              <div className="mb-3 flex">
                <MapPinIcon className="mb-2 mr-2 w-5 stroke-primary" />
                Wave, Via Habro Derennio 22/b 52100 Arezzo, Italy
              </div>
              <div className="mb-3 flex">
                <EnvelopeIcon className="mr-2 w-5 stroke-primary " />
                ask@example.com
              </div>
              <div className="flex">
                <PhoneIcon className="mr-2 w-5 stroke-primary" />
                095 1856 558 (Toll Free)
              </div>
            </div>
            <div className="text-md mr-20 ">
              <p className="mb-5 text-2xl font-bold hover:text-primary">
                Our Info
              </p>
              <p className="mb-2 hover:text-primary">About us</p>
              <p className="mb-2 hover:text-primary">Our Service</p>
              <p className="mb-2 hover:text-primary">Our Shop</p>
              <p className="mb-2 hover:text-primary">Blog</p>
              <p className="mb-2 hover:text-primary">Contact</p>
            </div>
            <div className="text-md mr-20">
              <p className="mb-5 text-2xl font-bold hover:text-primary">
                Quick Link
              </p>
              <p className="mb-2 hover:text-primary">Finance</p>
              <p className="mb-2 hover:text-primary">Compare Vehicles</p>
              <p className="mb-2 hover:text-primary">General FAQ</p>
              <p className="mb-2 hover:text-primary">Testimonial</p>
              <p className="mb-2 hover:text-primary">Admin Login</p>
            </div>
            <div className="">
              <p className="mb-5 text-2xl font-bold">Subscribe us</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="h-[55px] w-[354px] rounded-full bg-slate-600 pl-5"
                />
                <button className="absolute mr-10 h-[47px] w-[70px] items-center rounded-full bg-primary">
                  <ArrowLongRightIcon className="ml-4 w-10 stroke-white" />
                </button>
              </div>
              <div className="mt-8 flex">
                <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="w-10" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto mt-10 flex h-[98px] w-[1110px] items-center rounded-md bg-slate-600 text-white">
              <div className="w-[636px] px-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  them eiusmod tempor incididunt labore et dolorie magna aliqua.
                </p>
              </div>
              <div className="w-[200px]"></div>
              <div className="flex w-[274px] pl-11">
                <BanknotesIcon className="mr-2 w-10" />
                <BanknotesIcon className="mr-2 w-10" />
                <BanknotesIcon className="mr-2 w-10" />
                <BanknotesIcon className="mr-2 w-10" />
              </div>
            </div>
            <div className="mx-auto flex h-[77px] w-[1110px] items-center text-sm text-white">
              <div className="w-[310px]">
                Copyright Reserved by{' '}
                <span className="text-primary underline underline-offset-2">
                  DroitThemes
                </span>{' '}
                2020
              </div>
              <div className="w-[480px]"></div>
              <div className="flex w-[320px] text-slate-600">
                <div className="">Terms of use</div>
                <div className="mx-3 h-6 w-[1px] bg-slate-600"></div>
                <div className="">Privacy Environmental</div>
                <div className="mx-3 h-6 w-[1px] bg-slate-600"></div>
                <div className="">Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
