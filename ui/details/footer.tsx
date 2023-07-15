import { ArrowLongRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    return (
        <div className="relative">
        <div className="absolute mb-10 h-[546px] w-full bg-neutral-900 opacity-95">
          <div className="mx-auto flex w-[1110px] pt-20 text-white">
            <div className="mr-20 w-[260px]">
              <div className="mb-8">
                <img
                  src="/images/news/footer.png"
                  alt=""
                  className="h-fit w-fit"
                />
              </div>
              <div className="my-5 flex items-start ">
                <MapPinIcon className="mr-2 w-8  fill-primary" />
                <p className="leading-loose">
                  Wave, Via Habro Derennio 22/b 52100 Arezzo, Italy
                </p>
              </div>
              <div className="mb-5 flex underline underline-offset-1 ">
                <EnvelopeIcon className="mr-2 w-5 fill-primary " />
                ask@example.com
              </div>
              <div className="flex">
                <PhoneIcon className="mr-2 w-5 fill-primary" />
                095 1856 558 (Toll Free)
              </div>
            </div>
            <div className="text-md mr-20 ">
              <p className="mb-5 text-2xl font-bold hover:text-primary">
                Our Info
              </p>
              <p className="mb-3 hover:text-primary">About us</p>
              <p className="mb-3 hover:text-primary">Our Service</p>
              <p className="mb-3 hover:text-primary">Our Shop</p>
              <p className="mb-3 hover:text-primary">Blog</p>
              <p className="mb-3 hover:text-primary">Contact</p>
            </div>
            <div className="text-md mr-20">
              <p className="mb-5 text-2xl font-bold hover:text-primary">
                Quick Link
              </p>
              <p className="mb-3 hover:text-primary">Finance</p>
              <p className="mb-3 hover:text-primary">Compare Vehicles</p>
              <p className="mb-3 hover:text-primary">General FAQ</p>
              <p className="mb-3 hover:text-primary">Testimonial</p>
              <p className="mb-3  hover:text-primary">Admin Login</p>
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
                {/* <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="mr-2 w-10" />
                <FaceSmileIcon className="w-10" /> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto mt-14 flex h-[98px] w-[1110px] items-center rounded-md bg-neutral-700 text-white">
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
                Copyright Reserved by
                <span className="text-primary underline underline-offset-2">
                  DroitThemes
                </span>
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
    )
};

export default Footer;