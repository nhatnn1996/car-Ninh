import Link from 'next/link';
interface PropHeader {
  productCategories: any[];
  blogCategories: any[];
}
const Menu = ({ productCategories, blogCategories }: PropHeader) => {
  const shose = productCategories.filter((item: any) => item.service?.id == 1);
  const accessory = productCategories.filter(
    (item: any) => item.service?.id == 3,
  );
  return (
    <ul id="mega_main_menu_ul" className="mega_main_menu_ul">
      <li
        id="menu-item-447"
        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-320 default_dropdown drop_to_right submenu_default_width columns1"
      >
        <Link href="/" className="item_link disable_icon">
          <i className="" />
          <span className="link_content">
            <span className="link_text disable_icon">TRANG CHỦ</span>
          </span>
        </Link>
      </li>
      <li
        id="menu-item-122"
        // className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-122 multicolumn_dropdown default_style drop_to_right submenu_full_width columns3"
        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1110 multicolumn_dropdown drop_to_right submenu_full_width columns3 multicolumn_background"
      >
        <Link href="/giay-da-bong" className="item_link  disable_icon">
          <i className="" />
          <span className="link_content">
            <span className="link_text">SẢN PHẨM</span>
          </span>
        </Link>
      </li>
      <li
        id="menu-item-1110"
        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1110 multicolumn_dropdown drop_to_right submenu_full_width columns3 multicolumn_background"
      >
        <Link href="/ao-da-bong" className="item_link  disable_icon">
          <i className="" />
          <span className="link_content">
            <span className="link_text">ĐẶT ÁO ĐÁ BÓNG</span>
          </span>
        </Link>
      </li>

      <li className="menu-item logo d-none d-lg-inline-block widget_nav_menu">
        <Link href="/" title="QN-sport" rel="home">
          <img
            src="/images/Logo_dark.png"
            alt="QN-sport"
            className="h-[44px] w-[70px]"
            width={70}
            height={44}
          />
        </Link>
      </li>
      <li
        id="menu-item-320"
        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-320 default_dropdown  drop_to_right submenu_default_width columns1"
      >
        <Link
          href="phu-kien-the-thao"
          className="item_link  disable_icon"
          tabIndex={66}
        >
          <i className="" />
          <span className="link_content">
            <span className="link_text">Phụ kiện</span>
          </span>
        </Link>
      </li>
      <li
        id="menu-item-44"
        // className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-44 default_dropdown default_style drop_to_right submenu_default_width columns1"
        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1110 multicolumn_dropdown drop_to_right submenu_full_width columns3 multicolumn_background"
      >
        <Link
          href="/bai-viet"
          // href={'/comming'}
          className="item_link  disable_icon"
          tabIndex={52}
        >
          <i className="" />
          <span className="link_content">
            <span className="link_text">Bài viết</span>
          </span>
        </Link>
        <ul className="sub-menu">
          <li
            id="menu-item-127"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127"
          >
            <a href="#">French</a>
          </li>
          <li
            id="menu-item-128"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-128"
          >
            <a href="#">Japanese</a>
          </li>
        </ul>
      </li>

      <li
        id="menu-item-136"
        className="menu-item menu-item-type-custom menu-item-object-custom  menu-item-136 default_dropdown default_style drop_to_right submenu_default_width columns1"
      >
        <Link href="/comming" className="item_link  disable_icon">
          <i className="" />
          <span className="link_content">
            <span className="link_text">Câu hỏi thường gặp</span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
export default Menu;
