'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MenuMobile = ({ productCategories, blogCategories }: any) => {
  const menus = [
    { title: 'TRANG CHỦ', url: '/' },
    { title: 'Giày đá bóng', url: 'giay-da-bong', data: productCategories },
    { title: 'Tin tức bóng đá', url: '/bai-viet', data: blogCategories },
    { title: 'Đặt áo đá bóng', url: '/ao-da-bong' },
    { title: 'Phụ kiện', url: 'phu-kien-the-thao' },
    { title: 'câu hỏi thường gặp', url: '/comming' },
  ];
  const [acitve, setActive] = useState(-1);
  const [show, setShow] = useState(false);
  const input = useRef();
  const router = useRouter();
  const onChange = (e: any) => {
    input.current = e.target.value;
  };
  const search = () => {
    router.push('/giay-da-bong?search=' + input.current);
    setShow(false);
  };

  const onClick = (index: number) => {
    if (index === acitve) setActive(-10);
    else setActive(index);
  };
  return (
    <div>
      <div className="toggle-menu" onClick={() => setShow(true)}>
        <i className="icon-menu" />
      </div>
      <div
        className="animate fixed top-[-16px] left-[-16px] z-20 h-[100vh] w-[100vw] bg-white p-4"
        style={{ transform: show ? 'translateX(0%)' : 'translateX(-100%)' }}
      >
        <XMarkIcon
          className="absolute top-3 right-3 h-5 w-5"
          onClick={() => setShow(false)}
        />
        <div className="barlow text-2xl font-bold">TÌM KIẾM</div>
        <div className="items mt-2 flex border-b-[1px] border-stone-200 py-2">
          <input
            onChange={onChange}
            placeholder="Vui lòng nhập nội dung tìm kiếm"
            type="text"
            className="block h-8 flex-1 border-0 border-none p-0"
            style={{ height: 32 }}
          />
          <span className="search-opener ml-2" onClick={search}>
            <i className="icon-search"></i>
          </span>
        </div>
        <div className="mt-4">
          {menus.map((element: any, index: number) => {
            return (
              <div
                className="barlow my-2 border-b-[1px] border-gray-200 py-2.5 text-lg "
                key={element.title + 'mobile'}
              >
                <div className=" ">
                  {element.data && (
                    <div
                      className="flex w-full items-center  font-bold uppercase"
                      onClick={() => element.data && onClick(index)}
                    >
                      <div>{element.title}</div>
                      <span className="ml-auto rounded px-6 py-2 ">+</span>
                    </div>
                  )}
                  {!element.data && (
                    <Link
                      href={element.url}
                      onClick={() => setShow(false)}
                      className="font-bold uppercase"
                    >
                      {element.title}
                    </Link>
                  )}
                </div>
                <motion.div
                  className="overflow-hidden"
                  animate={
                    acitve === index ? { height: 'auto' } : { height: 0 }
                  }
                  transition={{ duration: 0.2, type: 'spring', stiffness: 50 }}
                >
                  <ul className="mt-2 list-none pl-10 ">
                    {element.data &&
                      element.data.map((item: any) => {
                        return (
                          <li className="mb-2" key={item.slug + 'hembiet'}>
                            <Link
                              href={element.url + '?category=' + item.slug}
                              className="font-regular text-md"
                              onClick={() => setShow(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
