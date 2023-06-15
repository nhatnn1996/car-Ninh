'use client';
import Link from 'next/link';
import { useState } from 'react';
import Cart from './cart';
import Menu from './menu';
import { MenuMobile } from './menu/mobile';
import Search from './search';
interface PropHeader {
  productCategories: any[];
  blogCategories: any[];
}

export default function Header({
  productCategories,
  blogCategories,
}: PropHeader) {
  const [show, setShow] = useState(false);
  return (
    <header className="sticky top-0 z-20">
      <div className="header-container with-center-logo layout1">
        <div className="top-bar d-none d-sm-block">
          <div className="container-fluid">
            <div className="container-wrapper">
              <div className="row">
                <div className="col-md-6 widget_left">
                  <aside
                    id="nav_menu-6"
                    className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
                  >
                    <div className="menu-language-currency-container">
                      <ul id="menu-language-currency" className="menu">
                        <li
                          id="menu-item-124"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-124"
                        >
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            href=""
                          >
                            VNĐ
                          </a>
                        </li>
                        <li
                          id="menu-item-126"
                          className="menu-item menu-item-type-custom menu-item-object-custom  menu-item-126"
                        >
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            href=""
                          >
                            Việt Nam
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-md-6 widget_right text-right">
                  <aside
                    id="nav_menu-7"
                    className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
                  >
                    <div className="menu-my-account-container">
                      <ul id="menu-my-account" className="menu">
                        <li
                          id="menu-item-131"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131"
                        >
                          <Link href="/qa">Tài khoản của tôi</Link>
                        </li>
                        <li
                          id="menu-item-133"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-133"
                        >
                          <Link href="/giay-da-bong">Sản phẩm</Link>
                        </li>
                        <li
                          id="menu-item-130"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130"
                        >
                          <Link href="/qa">Thanh toán</Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container-fluid">
            <div className="container-wrapper">
              <div className="search-switcher hidden-sm hidden-xs">
                <span
                  className="search-opener"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <i className="icon-search" />
                  <span>Search</span>
                </span>
                <Search
                  show={show}
                  close={() => {
                    setShow(false);
                  }}
                />
              </div>
              <div className="header-logo d-lg-none">
                <div className="logo">
                  <Link href="/" title="QN-sport" rel="home">
                    <img src="/images/Logo_dark.svg" alt="QN-sport" />
                  </Link>
                </div>
              </div>
              <div className="nav-menus">
                <div className="main-nav">
                  <div className="visible-lg visible-md">
                    <div className="nav-desktop">
                      <div
                        id="mega_main_menu"
                        className="primary primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-enable dropdowns_trigger-hover dropdowns_animation-anim_1 no-logo no-search no-woo_cart no-buddypress responsive-enable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-1-2 mega_main mega_main_menu"
                        style={{ zIndex: 990 }}
                      >
                        <div className="menu_holder">
                          <div className="mmm_fullwidth_container" />
                          <div className="menu_inner">
                            <span className="nav_logo">
                              <a className="mobile_toggle">
                                <span className="mobile_button">
                                  Menu &nbsp;
                                  <span className="symbol_menu">≡</span>
                                  <span className="symbol_cross">╳</span>
                                </span>
                              </a>
                            </span>
                            <Menu
                              productCategories={productCategories}
                              blogCategories={blogCategories}
                            />
                          </div>
                        </div>
                      </div>{' '}
                    </div>
                  </div>
                </div>
                <div className="nav-mobile visible-xs visible-sm">
                  <MenuMobile
                    productCategories={productCategories}
                    blogCategories={blogCategories}
                  />
                </div>
              </div>
              <div className="header-right">
                <div className="topcart">
                  <a
                    className="cart-toggler toggle-cartside"
                    //
                  >
                    <div className="content-cart flex items-center">
                      <div className="flex h-10 w-10 items-center">
                        <img
                          className="h-10 w-10"
                          src="/images/cart.jpeg"
                          alt=""
                        />
                      </div>
                      <Cart />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-bar d-none d-sm-block">
          <div className="container">
            <div className="container-wrapper">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
