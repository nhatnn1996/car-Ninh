import {
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

const menus = ['HOME', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'];
const Header = () => {
  return (
    <>
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

      <div className="top-0 h-[70px] bg-slate-50">
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
    </>
  );
};
export default Header;
