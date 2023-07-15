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

  return (
    <div>
      <Header/>
      <div className="relative flex">
        <div className="absolute h-[350px] w-full bg-black opacity-50"></div>
        <div className="h-[350px] w-full bg-[url('/images/blog-details/breadcrumb-bg-2-1.jpg')] bg-cover bg-no-repeat"></div>
        <div className="absolute left-[40%] top-[37%] ">
          <p className="text-6xl font-bold text-white">Blog Details</p>
          <div className="flex  pt-4  text-white">
            <a href="#">Home</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">News</a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">Car Expo World </a>
            <ChevronRightIcon className="w-4 stroke-[2px]" />
            <a href="#">This non-slip tool mat might your garage</a>
          </div>
        </div>
      </div>
      <div className=" px-[150px] py-[100px]">
        <div className="grid grid-cols-3 gap-6  ">
          {/* left */}
          <div className="col-span-2 gap-0">
            <div className="mb-16 text-sm  ">
              <img
                src={'/images/blog-details/blog-2.jpg'}
                alt=""
                className="h-full w-full"
              />
              <div className="shadow-lg">
                <div className="h-fit w-full px-[30px] py-[30px] ">
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
                      <UserIcon className="ml-4 w-5 stroke-neutral-700" /> by
                      Admin
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <a
                      href="#"
                      className="text-4xl font-bold duration-300  hover:text-primary"
                    >
                      This non-slip tool mat might your garage
                    </a>
                  </div>
                  <div className="text-md mt-[60px] tracking-wider text-neutral-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    them eiusmod. tempor incididunt is labore et dolorie magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    ullamco labo ris nisi ut aliquip ex ea commodo consequat.
                  </div>

                  <div className="text-md mt-[30px] tracking-wider text-neutral-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    dolore mque laudantium, totam rem aperiam
                  </div>

                  <div className="mt-[60px] h-fit w-full bg-neutral-100 text-lg text-neutral-600">
                    <div className="w-full px-10 py-10">
                      <p>
                        Social media change the relationship between them also
                        companies .and cust omers from masters to servants and
                        many more to come in the end…
                      </p>
                      <p className="mt-[30px] text-xl font-bold">
                        Rodney Artichoke
                      </p>
                    </div>
                  </div>
                  <div className="text-md mt-[40px] tracking-wider text-neutral-500">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium dolore mque laudantium, totam rem aperiam
                    </p>
                  </div>
                  <div className="mt-10">
                    <img src="/images/blog-details/blog-3.jpeg" alt="" />
                  </div>
                  <div className="text-md mt-[40px] tracking-wider text-neutral-500">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium dolore mque laudantium, totam rem aperiam
                    </p>
                  </div>
                  <div className="mt-10 h-[1px] w-full bg-neutral-200"></div>
                  <div className="mt-8 flex items-center gap-4">
                    <p className="font-bold">Tags:</p>
                    <a
                      href="#"
                      className="h-fit w-fit border-[1px] px-2 py-1 text-neutral-500 duration-300 hover:bg-primary hover:text-white"
                    >
                      Concept car
                    </a>
                    <a
                      href="#"
                      className="h-fit w-fit border-[1px] px-2 py-1 text-neutral-500 duration-300 hover:bg-primary hover:text-white"
                    >
                      Cooling System
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-[0.25px] bg-white px-8 py-8 shadow-lg">
                <a href="#" className="text-lg font-bold hover:text-primary duration-300">
                  Admin
                </a>
                <p className="text-md mt-3 text-neutral-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore euro fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat
                </p>
              </div>
              <div className="mt-10 border-[0.25px] bg-white px-8 py-8 shadow-lg">
                <p>Leave a Reply</p>
                <p>You must be <a href="#" className='text-sky-500 pr-1.5'>logged in</a>to post a comment.</p>
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
                <img src="/images/blog-details/left-1.jpeg" alt="" />
                <div className="ml-4 mt-2">
                  <h3 className="">Nissan and Infiniti recall ...</h3>
                  <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />{' '}
                    July 21, 2020
                  </div>
                </div>
              </div>
              <div className="mt-6 flex">
                <img src="/images/blog-details/left-2.jpeg" alt="" />
                <div className="ml-4 mt-2">
                  <h3 className="">This non-slip tool m...</h3>
                  <div className=" mt-2 flex text-sm text-gray-500">
                    <CalendarDaysIcon className="mr-2 w-5 stroke-gray-500" />{' '}
                    July 21, 2020
                  </div>
                </div>
              </div>
              <div className="mt-6 flex">
                <img src="/images/blog-details/left-3.jpeg" alt="" />
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
