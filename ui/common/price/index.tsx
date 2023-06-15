import { formatVND } from '@/services/helper';

const Price = ({ element, className }: any) => {
  const isSalePrice = element.price_sale;
  return (
    <div>
      {isSalePrice && (
        <bdi
          className={'item-center barlow flex flex-col flex-nowrap font-bold '}
        >
          <span className="text-3xl opacity-70 ml-3 whitespace-nowrap text-red-600 line-through leading-7 ">
            <span className="barlow font-regular">{formatVND(element.price)}</span>
            <span> VNĐ</span>
          </span>
          <span className="mt-1 whitespace-nowrap text-[60px] text-white">
            <span className="">{formatVND(element.price_sale)}</span>
            <span> VNĐ</span>
          </span>
        </bdi>
      )}
      {!isSalePrice && (
        <bdi className="barlow flex text-xl font-bold">
          <span className="">
            <span className="woocommerce-Price-currencySymbol">
              {formatVND(element.price)}
            </span>
            <span> VNĐ</span>
          </span>
        </bdi>
      )}
    </div>
  );
};

export default Price;
