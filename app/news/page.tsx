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
} from '@heroicons/react/24/outline';
import {
  MapPinIcon,
  EnvelopeIcon as EenvelopeIcon,
  PhoneIcon as PphoneIcon,
} from '@heroicons/react/24/solid';
import Footer from '@/ui/details/footer';
import Header from '@/ui/details/header';

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
    'March 2020 <span class="text-black">(3)</span>',
    'February 2020 <span class="text-black">(2)</span>',
    'January 2020 <span class="text-black">(1)</span>',
    'November 2019 <span class="text-black">(6)</span>',
  ];

  const left = [
    {
      pic: 'new-left-1.jpeg',
      text: 'Nissan and Infiniti recall 1.2 million vehicles',
    },
    {
      pic: 'new-left-2.jpeg',
      text: 'This non-slip tool mat might your garage',
    },
    {
      pic: 'new-left-3.jpeg',
      text: 'EPA chief blasts California air threatens',
    },
    {
      pic: 'new-left-4.jpeg',
      text: 'Fiat Cheler senior manager charged in U.S',
    },
    {
      pic: 'new-left-5.jpeg',
      text: 'Nissan and Infiniti recall 1.2 million vehicles',
    },
    {
      pic: 'new-left-6.jpeg',
      text: '2020 Audi RS 70 First Drive The king of its hill',
    },
    {
      pic: 'new-left-7.jpeg',
      text: 'Main reasons to buy luxury car in 2019',
    },
  ];

  return (
    <div>
      <Header/>
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
              {left.map((obj: any, index) => (
                <div key={obj.pic + obj.text} className="mb-16 text-sm  ">
                  <img
                    src={'/images/news/' + obj.pic}
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="shadow-lg">
                    <div className="h-[311px] w-[730px] px-[30px] py-[30px] ">
                      <div className="flex gap-4">
                        <button className="py-0.55 h-fit w-fit bg-primary px-2.5 text-white">
                          Car Event
                        </button>
                        <button className="py-0.55 h-fit w-fit bg-primary px-2.5 text-white">
                          Exterior
                        </button>
                        <div className="flex items-center gap-2 text-sm text-neutral-700">
                          <CalendarDaysIcon className=" w-5 stroke-neutral-700" />
                          July 21, 2020
                          <UserIcon className="ml-4 w-5 stroke-neutral-700" />{' '}
                          by Admin
                        </div>
                      </div>
                      <div className="mt-[30px]">
                        <a
                          href="#"
                          className="text-4xl font-bold duration-300  hover:text-primary"
                        >
                          {obj.text}
                        </a>
                      </div>
                      <div className="text-md mt-[30px] tracking-wider text-neutral-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed them eiusmod. tempor incididunt is labore et dolorie
                      </div>
                      <div className="group mt-[30px] flex duration-300 hover:text-primary">
                        <a href="#" className="font-bold ">
                          READ MORE
                        </a>
                        <ArrowLongRightIcon className="ml-2 w-5 -translate-x-5 stroke-primary opacity-0 duration-500 group-hover:translate-x-0 group-hover:opacity-100   " />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto flex w-fit items-center gap-2">
              <div className="h-10 w-10 bg-primary px-4 py-2 text-white">1</div>
              <div className="h-10 w-10 px-4 py-2 text-neutral-700 duration-300 hover:bg-primary hover:text-white">
                2
              </div>
              <div className="group flex h-10 w-10 items-center justify-center duration-300 hover:bg-primary">
                <ChevronRightIcon className="w-5    stroke-neutral-700  group-hover:stroke-white " />
              </div>
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
              <div className="mt-8 flex w-[320px] flex-wrap  text-neutral-500">
                {pptag.map((name, index) => (
                  <div
                    key={index + name}
                    className="mb-5 mr-4 w-fit text-sm duration-500  hover:bg-primary hover:text-white"
                  >
                    <a
                      href="#"
                      className="inline-block border-[1px] border-neutral-300 px-4 py-2"
                    >
                      {name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="mt-12 text-2xl font-bold">Archive Posts</h3>
              <div className="mt-8 text-black">
                {apost.map((name, index) => (
                  <div key={index + name} className="group mb-5 flex text-sm">
                    <ChevronRightIcon className="mr-2 w-3 stroke-black hover:stroke-black" />
                    <div
                      className="group-hover:text-primary "
                      dangerouslySetInnerHTML={{ __html: name }}
                    />
                  </div>
                ))}
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
