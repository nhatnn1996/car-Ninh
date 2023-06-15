'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { hiddenOpacity } from '@/services/variant';
import { useState } from 'react';
import useCart from '@/hook/cart';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Cart({ close }: any) {
  const [show, setshow] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <Link href="/cart" title="Trang giỏ hàng" className="" legacyBehavior>
        <span className="qty flex cursor-pointer items-center">
          Giỏ hàng{' '}
          {cart.length > 0 && (
            <span className="count bg ml-1 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-stone-50 shadow-sm">
              {cart.length}
            </span>
          )}
        </span>
      </Link>
      <AnimatePresence>
        {!show && null}
        {show && (
          <motion.div
            variants={hiddenOpacity}
            initial={'hidden'}
            exit={'hidden'}
            animate={'visible'}
            role="search"
            className="height-full fixed top-0 right-0"
          >
            <div className="popup-overlay" />
            <div className="search-content-popup">
              <span className="close-popup cursor-pointer" onClick={close}>
                <i className="icon-x" />
                <span>Close</span>
              </span>
              <h3>TÌM SẢN PHẨM THEO</h3>
              <div className="categories-list">
                <ul className="items-list">
                  <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="">All categories</span>
                  </li>
                  <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="basketball">Basketball</span>
                  </li>
                  <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="handbag">Handbag</span>
                  </li>
                  <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="sportswear">Sportswear</span>
                  </li>
                  <li className="cat-item mx-10 cursor-pointer">
                    <span data-slug="youth">Youth</span>
                  </li>
                </ul>
                <input
                  type="hidden"
                  name="cat"
                  className="search-cat-field"
                  defaultValue=""
                />
              </div>
              <div className="field-container ">
                <input
                  type="text"
                  autoComplete="off"
                  id="woocommerce-product-search-field-AvVQq"
                  className="search-field"
                  placeholder=" Nhập tên sản phẩm bạn muốn tìm"
                  defaultValue=""
                  name="s"
                  title="Search for:"
                />
                <input
                  type="submit"
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
    </>
  );
}
