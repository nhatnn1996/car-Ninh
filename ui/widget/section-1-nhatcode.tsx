import {
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

const menus = ['Home', 'About', 'Services', 'Blog', 'Contact'];
const Header = () => {
  return (
    <div className="">
      <div className="h-[50px] bg-primary">
        <div className="mx-auto flex h-full w-[1140px]">
          <div className="logo relative h-full w-[190px] bg-gray-100">
            <div className="absolute top-0 left-0 h-auto w-full shadow-lg">
              <img src="/images/logo-car.png" alt="" />
            </div>
          </div>
          <div className="text ml-20 flex h-full items-center text-white">
            <ClockIcon className="mr-[5px] h-4 w-4 stroke-white stroke-[2px]" />
            Monday-Saturday 7:00AM - 6:00PM
          </div>
          <div className="text ml-9 flex h-full items-center text-white">
            <MapPinIcon className="mr-[5px] h-4 w-4 stroke-white stroke-[2px]" />
            1105 Roosevelt Street, CA
          </div>
          <div className="text ml-auto flex h-full items-center bg-white px-9 font-semibold ">
            <PhoneArrowDownLeftIcon className="mr-[5px] h-4 w-4 stroke-primary stroke-[2px]" />
            <span className="text-primary">095</span>{' '}
            <span className="ml-0.5 text-black"> 1856 558</span>
          </div>
        </div>
      </div>
      <div className="h-[70px] bg-white shadow">
        <div className="mx-auto flex h-full w-[1140px] items-center">
          <div className="ml-[260px] flex font-semibold uppercase text-black">
            {menus.map((name, index) => (
              <div key={index + name} className="ml-10">
                {name}
              </div>
            ))}
            <div className="ml-10">Home</div>
            <div className="ml-10">About</div>
            <div className="ml-10">Services</div>
            <div className="ml-10">Blog</div>
            <div className="ml-10">Contact</div>
            
          </div>
          <div className="item-center ml-auto flex">
            <ShoppingBagIcon className="h-6 w-5 stroke-black" />
            <div className="mx-3 h-6 w-[1px] bg-black"></div>
            <MagnifyingGlassIcon className="h-6 w-6 stroke-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
