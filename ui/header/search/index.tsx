'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { hiddenOpacity } from '@/services/variant';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Search({ show, close }: any) {
  const [value, setValue] = useState();
  const router = useRouter();
  const onKeyDown = (event: any) => {
    const keycode = event.keyCode || event.which;
    if (keycode === 13) {
      const value = event.target.value;
      if (value) {
        router.push('/giay-da-bong?search=' + value);
        close();
      }
    }
  };
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const search = () => {
    if (value) {
      router.push('/giay-da-bong?search=' + value);
      close();
    }
  };
  return (
    <AnimatePresence>
      {!show && null}
      {show && (
        <motion.div
          variants={hiddenOpacity}
          initial={'hidden'}
          exit={'hidden'}
          animate={'visible'}
          role="search"
          className="search-form-container relative z-30"
        >
          <div className="popup-overlay" />
          <div className="search-content-popup">
            <span className="close-popup cursor-pointer" onClick={close}>
              <i className="icon-x" />
              <span>Close</span>
            </span>
            <h3>TÌM SẢN PHẨM THEO</h3>
            <div className="categories-list">
              {/* <ul className="items-list">
                <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="">
                        All categories
                    </span>
                </li>
            </ul> */}
            </div>
            <div className="field-container ">
              <input
                type="text"
                autoComplete="off"
                id=""
                className="search-field"
                placeholder=" Nhập tên sản phẩm bạn muốn tìm"
                defaultValue=""
                name="s"
                title="Search for:"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
              />
              <div
                onClick={search}
                className="btn-search"
                defaultValue="Search"
              />
              <i className="icon-search" />
            </div>
            <input type="hidden" name="post_type" defaultValue="product" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
