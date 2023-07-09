import {
  CircleStackIcon,
  Cog8ToothIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

const LatestCollection = () => {
  return (
    <div className="bg-slate-100 ">
      <div className=" mx-auto w-[1110px] py-24">
        <div className="relative mx-auto mb-10 h-[53px] w-[1110px] font-bold">
          <div className="text-4xl ">Latest Collection</div>
          <div className="absolute bottom-8 left-0">
            <img src="/images/bg-marketplace.png" alt="" />
          </div>
          <button className="absolute right-0 top-0 h-[40px] w-[125px] bg-primary text-white">
            ALL CARS
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className=" group w-full rounded-md shadow-lg overflow-hidden ">
            <div className="h-[233px] w-full overflow-hidden">
              <img
                src="/images/car-1.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primarygroup-hover:text-primary animate-300">
                  Gebrari Fa Doupa
                </div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,056
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1990</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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

          <div className=" group w-full rounded-md shadow-lg overflow-hidden">
            <div className="h-[233px] w-full overflow-hidden ">
              <img
                src="/images/car-2.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primary">ASW t9 689</div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,000
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1900</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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

          <div className=" group w-full rounded-md shadow-lg overflow-hidden">
            <div className="h-[233px] w-full overflow-hidden ">
              <img
                src="/images/car-3.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primary">Tarcedez Bub 20</div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,000
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1900</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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

          <div className=" group w-full rounded-md shadow-lg overflow-hidden">
            <div className="h-[233px] w-full overflow-hidden ">
              <img
                src="/images/car-4.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primary">Gudi F8 2019</div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,000
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1900</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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

          <div className=" group w-full rounded-md shadow-lg overflow-hidden">
            <div className="h-[233px] w-full overflow-hidden ">
              <img
                src="/images/car-5.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primary">Joudi A10 Gybid</div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,000
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1900</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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

          <div className=" group w-full rounded-md shadow-lg overflow-hidden">
            <div className="h-[233px] w-full overflow-hidden ">
              <img
                src="/images/car-6.jpg"
                alt=""
                className="animate-300 h-full w-full object-cover group-hover:scale-110"
              />
            </div>
            <div className="mx-8 my-8">
              <div className="relative text-xl font-bold">
                <div className="group-hover:text-primary">AMS Ha Voupa</div>
                <div className="absolute right-0 top-0 text-primary">
                  $16,000
                </div>
              </div>
              <span className="text-slate-400">Build year:</span>
              <span className="ml-1">1900</span>
            </div>
            <div className="h-[1px] w-full bg-slate-400"></div>
            <div className="flex h-[50px] w-full items-center stroke-slate-400 text-slate-400">
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
      </div>
    </div>
  );
};
export default LatestCollection;
