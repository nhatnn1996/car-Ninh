'use client';
import { formatVND } from '@/services/helper';
import { childrentSelect } from '@/services/variant';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MyImageWithLoader from '../common/image';

const Product = ({ element }: any) => {
  const isSalePrice = element.price_sale;
  return (
    <Link legacyBehavior href={'/giay-da-bong/' + element.slug} passHref>
      <motion.div className="cursor-pointer " variants={childrentSelect}>
        <div className="">
          <div className="">
            <div className="">
              <div title="Arsenal Home Jersey">
                <MyImageWithLoader
                  width={500}
                  height={500}
                  src={element.thumbnail}
                  className="primary_image p-5"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="list-col8">
            <div className="gridview">
              <h3 className="product-name">
                <div>Arsenal Home Jersey</div>
              </h3>
              <div className="switcher-wrapper">
                <div className="price-switcher">
                  <div className="price">
                    <span className="woocommerce-Price-amount amount">
                      {isSalePrice && (
                        <bdi>
                          <span className="">
                            <span className="woocommerce-Price-currencySymbol">
                              {formatVND(element.price_sale)}
                            </span>
                            <span> VNĐ</span>
                          </span>
                          <span className="ml-3 text-gray-300 line-through ">
                            <span className="woocommerce-Price-currencySymbol">
                              {formatVND(element.price)}
                            </span>
                            <span> VNĐ</span>
                          </span>
                        </bdi>
                      )}
                      {!isSalePrice && (
                        <bdi>
                          <span className="">
                            <span className="woocommerce-Price-currencySymbol">
                              {formatVND(element.price)}
                            </span>
                            <span> VNĐ</span>
                          </span>
                        </bdi>
                      )}
                    </span>
                  </div>
                  <div className="button-switch">
                    <p className="woocommerce add_to_cart_inline">
                      <a className="barlow font-medium no-underline hover:text-black">
                        + Thêm vào giỏ hàng
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Product;
