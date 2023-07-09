import axiosCms from '@/services/api/cms';
import { ServiceProps } from '@/lib/interface/products';
import HeadMeta from '@/ui/head';
import Header from '@/ui/widget/section-1';
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default async function News() {
  const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];
  const cate = [
    'Car Event (3)',
    'Car Expo World (4)',
    'Design (1)',
    'Exterior (3)',
    'Interior (2)',
    'Speed on Track (1)',
  ];
  const pptag = [
    'Cars',
    'Concept car',
    'Cooling System',
    'Design',
    'Exteriors',
    'Interiors',
    'Marketing',
    'Software Speeds',
  ];
  const apost = [
    'March 2020 (3)',
    'February 2020 (2)',
    'January 2020 (1)',
    'November 2019 (1)',
  ];

  const text = [
    'Nissan and Infiniti recall 1.2 million vehicles',
    'This non-slip tool mat might your garage',
    'EPA chief blasts California air threatens',
    'Fiat Cheler senior manager charged in U.S',
    'Nissan and Infiniti recall 1.2 million vehicles',
    '2020 Audi RS 70 First Drive The king of its hill',
    'Main reasons to buy luxury car in 2019',
  ];
  return (
    <div>
      <div className="h-[50px] bg-red-500">
        <div className=" mx-auto flex h-full w-[1170px]">
          <div className=" logo relative h-full w-[190px] ">
            <div className="absolute left-0 top-0 h-full w-full">
              <img className="shadow-xl" src="/images/logo-car.png" alt="" />
            </div>
          </div>
          <div className="ml-20 flex h-full items-center text-sm text-white">
            <ClockIcon className="mr-1 w-5 stroke-white" />
            Monday-Saturday 7:00AM - 6:00PM
          </div>
          <div className="ml-20 flex h-full items-center text-sm text-white">
            <MapPinIcon className="mr-1 w-5 stroke-white" />
            1105 Roosevelt Street, CA
          </div>
          <div className="text-md ml-auto flex h-full items-center bg-white px-9 font-bold">
            <PhoneArrowDownLeftIcon className="mr-2 w-5 stroke-primary" />
            <span className="text-primary">095</span>
            <span className="ml-1 text-black">1856 558</span>
          </div>
        </div>
      </div>
      <div className="top-0 h-[70px] bg-slate-50">
        <div className="mx-auto flex h-full w-[1170px] items-center">
          <div className="ml-[260px] flex font-semibold uppercase text-black">
            {menus.map((name, index) => (
              <div key={index + name} className="mr-10">
                {name}
              </div>
            ))}
          </div>
          <div className="mx-auto mr-10 flex">
            <ShoppingBagIcon className="w-7 stroke-black" />
            <div className="mx-3 h-6 w-[1px] bg-black"></div>
            <MagnifyingGlassIcon className="w-7 stroke-black" />
          </div>
        </div>
      </div>
      <div className="relative flex">
        <div className="absolute h-[350px] w-full bg-black opacity-50"></div>
        <div className="h-[350px] w-full bg-[url('/images/news/breadcrumb-bg-2-1.jpg')] bg-cover bg-no-repeat"></div>
        <div className="absolute left-[45%] top-[37%] ">
          <p className="text-6xl font-bold text-white">News</p>
          <div className="flex pl-5 pt-4 text-white">
            <a href="#">Home</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">News</a>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-[150px] py-[100px]">
        <div className="grid grid-cols-3 gap-14">
          {/* left */}
          <div className="col-span-2 ">
            <div className="text-black ">
              {text.map((name, index) => (
                <div
                  key={index + name}
                  className="mb-16 text-sm  "
                >
                    <img src="/images/news/new-left-1.jpeg" alt="" className='h-full w-full' />
                    <div className="">
                        <div className="flex">
                            <button className='bg-primary text-white w-[90px] h-[30px]'>Car Event</button>
                            <button className='bg-primary text-white w-[90px] h-[30px]'> Exterior</button>
                            <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />
                    
                    July 21, 2020
                    <UserIcon className="mr-2 w-5 stroke-gray-500"/> by Ridoy
                  </div>
                        </div>
                    <div className="hover:text-primary">{name}</div>
                    </div>
                    
                  
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="">
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="h-[60px] w-[261px] border-[1px] border-slate-300 bg-white px-4"
              />
              <button className="h-[60px] w-[60px] bg-primary">
                <MagnifyingGlassIcon className="mx-[12px] w-6 stroke-white" />
              </button>
            </div>
            <div className="">
              <h3 className="mt-12 text-2xl font-bold">Categories</h3>
              <div className="mt-8 text-black">
                {cate.map((name, index) => (
                  <div
                    key={index + name}
                    className="mb-5 flex text-sm hover:text-primary "
                  >
                    <ChevronRightIcon className="mr-2 w-3 stroke-black hover:stroke-black" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="mt-12 text-2xl font-bold">Latest News</h3>
              <div className="mt-6 flex">
                <img src="/images/news/lt-1.jpeg" alt="" />
                <div className="ml-4 mt-2">
                  <h3 className="">Nissan and Infiniti recall ...</h3>
                  <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />{' '}
                    July 21, 2020
                  </div>
                </div>
              </div>
              <div className="mt-6 flex">
                <img src="/images/news/lt-2.jpeg" alt="" />
                <div className="ml-4 mt-2">
                  <h3 className="">This non-slip tool m...</h3>
                  <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />{' '}
                    July 21, 2020
                  </div>
                </div>
              </div>
              <div className="mt-6 flex">
                <img src="/images/news/lt-3.jpeg" alt="" />
                <div className="ml-4 mt-2">
                  <h3 className="">EPA chief blasts Cali...</h3>
                  <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />{' '}
                    July 21, 2020
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="mt-12 text-2xl font-bold">Popular Tags</h3>
              <div className="mt-8 w-[320px] text-gray-400">
                {pptag.map((name, index) => (
                  <div
                    key={index + name}
                    className="mb-5 w-fit text-sm hover:bg-primary hover:text-white"
                  >
                    <div className="border-[1px] px-4 py-2">{name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="mt-12 text-2xl font-bold">Archive Posts</h3>
              <div className="mt-8 text-black">
                {apost.map((name, index) => (
                  <div
                    key={index + name}
                    className="mb-5 flex text-sm hover:text-primary "
                  >
                    <ChevronRightIcon className="mr-2 w-3 stroke-black hover:stroke-black" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="relative text-sm">
        <div className="absolute mb-10 h-[546px] w-full bg-neutral-900 opacity-95">
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
                  className="h-[55px] w-[354px] rounded-full bg-neutral-700 pl-5"
                />
                <button className="absolute right-1 top-1 h-[47px] w-[70px] items-center rounded-full bg-primary">
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
            <div className="mx-auto mt-10 flex h-[98px] w-[1110px] items-center rounded-md bg-neutral-700 text-white">
              <div className="w-[636px] pl-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  them eiusmod tempor incididunt labore et dolorie magna aliqua.
                </p>
              </div>
              <div className="w-[180px]"></div>
              <div className="flex w-[300px]">
                <img
                  src="/images/footer-1.png"
                  alt=""
                  className="mr-2 h-[37px] w-[61px]"
                />
                <img
                  src="/images/footer-2.png"
                  alt=""
                  className="mr-2 h-[37px] w-[61px]"
                />
                <img
                  src="/images/footer-3.png"
                  alt=""
                  className="mr-2 h-[37px] w-[61px]"
                />
                <img
                  src="/images/footer-4.png"
                  alt=""
                  className="h-[37px] w-[61px]"
                />
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
              <div className="flex w-[320px] text-neutral-600">
                <div className="">Terms of use</div>
                <div className="mx-3 h-6 w-[1px] bg-slate-600"></div>
                <div className="">Privacy Environmental</div>
                <div className="mx-3 h-6 w-[1px] bg-slate-600"></div>
                <div className="">Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[546px] w-full bg-[url('/images/footer-bg.jpeg')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export const revalidate = 1000;
