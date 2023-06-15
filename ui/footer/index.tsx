import Link from 'next/link';
import ScrollTop from './scroll';
const Footer = ({ productCategories, popularBlog, site }: any) => {
  let social: any = {};
  site.social.map((item: any) => {
    const name = item.type.toLowerCase();
    social[name] = item.link;
  });

  return (
    <footer id="site-footer barlow">
      <div className="footer layout1">
        <div className="footer-top">
          <div className="container">
            <div className="container-inner">
              <div className="col-gird">
                <div className="col_l">
                  <aside
                    id="black-studio-tinymce-2"
                    className="widget-odd widget-first widget-1 widget widget_black_studio_tinymce"
                  >
                    <h3 className="widget-title">
                      <span>Thông tin liên hệ</span>
                    </h3>
                    <div className="textwidget">
                      {/* <p>Add: 734 Riverwood Drive, Suite 245 Cottonwood</p> */}
                      {/* <p>Beverly Hill, Melbourne, USA.</p> */}
                      <p className="mb-1.5 flex items-center py-[3px]">
                        <span className="block">Email</span>:
                        nhatnn1808@gmail.com
                      </p>
                      <p className="mb-1.5 flex items-center py-[3px]">
                        <span className="block">SDT</span>: 0937864599
                      </p>
                      <p className="mb-1.5 flex items-center py-[3px]">
                        <span className="block">SDT</span>: 0966643251
                      </p>
                    </div>
                  </aside>
                  <aside
                    id="gota_social_icons-2"
                    className="widget-even widget-last widget-2 widget widget_gota_social_icons"
                  >
                    <div className="widget widget-social">
                      <h3 className="widget-title">
                        <span>Follow Us On</span>
                      </h3>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="facebook social-icon"
                            href="#facebook"
                            title="Facebook"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter social-icon"
                            href="#twitter.com"
                            title="Twitter"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="google-plus social-icon"
                            href="#google-plus"
                            title="Google-plus"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="youtube social-icon"
                            href="#youtube"
                            title="Youtube"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="pinterest social-icon"
                            href="#pinterest"
                            title="Pinterest"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="mail-to social-icon"
                            href="mailto:lionthemes88@gmail.com"
                            title="Mail-to"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="fa fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col_2">
                  <aside
                    id="nav_menu-5"
                    className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
                  >
                    <h3 className="widget-title">
                      <span>BÀI VIẾT MỚI</span>
                    </h3>
                    <div className="menu-get-help-container">
                      <ul id="menu-get-help" className="menu">
                        {popularBlog.map((element: any) => {
                          return (
                            <li
                              key={element.slug}
                              id="menu-item-137"
                              className=""
                            >
                              <Link
                                href={'/bai-viet/' + element.slug}
                                // href={'/comming'}
                                className="line-clamp-1"
                              >
                                {element.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col_3">
                  <aside
                    id="nav_menu-8"
                    className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
                  >
                    <h3 className="widget-title">
                      <span>DANH MỤC SẢN PHẨM</span>
                    </h3>
                    <div className="menu-popular-categories-container">
                      <ul id="menu-get-help" className="menu">
                        {(productCategories || []).map((element: any) => {
                          return (
                            <li
                              key={element.id}
                              id="menu-item-137"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137"
                            >
                              <Link
                                prefetch={false}
                                href={'/giay-da-bong?category=' + element.slug}
                              >
                                {element.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col_4">
                  <aside
                    id="black-studio-tinymce-3"
                    className="widget-odd widget-first widget-1 widget widget_black_studio_tinymce"
                  >
                    <h3 className="widget-title">
                      <span>ĐĂNG KÝ ĐỂ NHẬN NHIỀU ƯU ĐÃI</span>
                    </h3>
                    <div className="textwidget">
                      <p>Đăng ký để nhận các tips hữu ích</p>
                      <p>Có cơ hội mua sắm sớm hơn.</p>
                      <p>Có cơ hội nhận các mã giảm giá sốc.</p>

                      <p>
                        Hơn{' '}
                        <span
                          style={{ color: '#ffffff' }}
                          className="mx-2 font-bold"
                        >
                          2.000+ người
                        </span>{' '}
                        đã tham gia đăng ký
                      </p>
                    </div>
                  </aside>
                  <aside
                    id="mc4wp_form_widget-2"
                    className="widget-even widget-last widget-2 widget widget_mc4wp_form_widget"
                  >
                    <form
                      id="mc4wp-form-1"
                      className="mc4wp-form mc4wp-form-157"
                      method="post"
                      data-id={157}
                      data-name=""
                    >
                      <div className="mc4wp-form-fields">
                        <p>
                          <span className="form-14">
                            Đăng ký ngay để nhận được các ưu đãi
                          </span>
                          <br />
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Đăng ký để nhận nhiều ưu đãi..."
                          />
                        </p>
                        <p>
                          <button title="Subscribe" type="submit">
                            <span>Đăng ký</span>
                          </button>
                        </p>
                      </div>

                      <input
                        type="hidden"
                        name="_mc4wp_timestamp"
                        defaultValue={1673642907}
                      />
                      <input
                        type="hidden"
                        name="_mc4wp_form_id"
                        defaultValue={157}
                      />
                      <input
                        type="hidden"
                        name="_mc4wp_form_element_id"
                        defaultValue="mc4wp-form-1"
                      />
                      <div className="mc4wp-response" />
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="container-inner">
              <div className="widget-copyright">
                <aside
                  id="text-2"
                  className="widget-odd widget-last widget-first widget-1 widget widget_text"
                >
                  {' '}
                  <div className="textwidget">
                    <p>
                      Copyright ©&nbsp;
                      <a href="">QN Sport</a> Thiết kế bởi{' '}
                      <a href="">Nhất NN</a>
                    </p>
                  </div>
                </aside>{' '}
              </div>
              <div className="bottom-links">
                <aside
                  id="nav_menu-10"
                  className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
                >
                  <div className="menu-link-footer-bottom-container">
                    {/* <ul id="menu-link-footer-bottom" className="menu">
                      <li
                        id="menu-item-158"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-158"
                      >
                        <a href="#">Site Map</a>
                      </li>
                      <li
                        id="menu-item-161"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-161"
                      >
                        <a href="#">Search Terms</a>
                      </li>
                      <li
                        id="menu-item-159"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-159"
                      >
                        <a href="#">Advanced Search</a>
                      </li>
                      <li
                        id="menu-item-160"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-160"
                      >
                        <a href="#">Contact Us</a>
                      </li>
                    </ul> */}
                  </div>
                </aside>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 left-2">
        <Link
          href={social.zalo}
          target={'_blank'}
          rel="noopener"
          className="flex h-10 w-10 items-center overflow-hidden rounded-full bg-white p-1 shadow"
        >
          <img
            className="h-8 w-8"
            width={32}
            height={32}
            src="/images/zalo-icon.png"
            alt=""
          />
        </Link>
        <Link
          href={social.messenger}
          target={'_blank'}
          rel="noopener"
          className="mt-2 w-full flex h-10  overflow-hidden rounded-full bg-white shadow justify-center items-center"
        >
          <img
            className="h-8 w-8"
            width={32}
            height={32}
            src="/images/messenger.png"
            alt=""
          />
        </Link>
        <Link
          href={'tel:' + social.phone}
          className="mt-2 flex h-10 w-10 items-center overflow-hidden rounded-full bg-white shadow justify-center"
        >
          <img
            className="h-8 w-8"
            width={32}
            height={32}
            src="/images/telephone-call.png"
            alt=""
          />
        </Link>
      </div>
      <ScrollTop />
    </footer>
  );
};
export default Footer;
