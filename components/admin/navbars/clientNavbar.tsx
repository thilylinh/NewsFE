import Link from "next/link"
import { useState } from "react"


const ClientNavbar = () => {
    const [isOpen, setOpen] = useState(false)
    return <>
        <div className="header-inner fl-wrap">
            <div className="container">
                <Link href="/">
                    <img src="https://webredox.net/demo/wp/gmag/wp-content/themes/gmag/includes/images/logo.png" className="logo-holder" alt="" />
                </Link>

                <div className="search_btn htact show_search-btn">
                    <i className="ion-search" />
                    <span className="header-tooltip">Search</span>
                </div>
                <div className="srf_btn htact show-reg-form"><i className="ion-person" />
                    <span className="header-tooltip">Đăng nhập</span>
                </div>
                {/* <div className="show-cart sc_btn htact"><i className="ion-bag" />
                    <div className="show-cart_count ">
                        <span className="show-cart_count_main">0 items</span>
                    </div>
                    <span className="header-tooltip">Your Cart</span>
                </div> */}
                <div className="header-search-wrap novis_sarch">
                    <div className="widget-inner">
                        <form action="https://webredox.net/demo/wp/gmag/">
                            <input name="s" id="se" type="text" className="search" placeholder="Search..." />
                            <input type="hidden" name="post_type" defaultValue="post" />
                            <button className="search-submit" id="submit_btn">
                                <i className="fa fa-search transition" /> </button>
                        </form>
                    </div>
                </div>
                {/* <div className="header-cart_wrap novis_cart">
                    <div className="header-cart_title">Your Cart <span className="show-cart_count_main">0 items</span>
                    </div>
                    <div className="widget_shopping_cart_content">
                        <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                    </div>
                </div> */}
                <div className="nav-button-wrap" onClick={() => setOpen(!isOpen)}>
                    <div className="nav-button">
                        <span /><span /><span />
                    </div>
                </div>
                <div className="nav-holder main-menu">
                    <nav>
                        <ul>
                            <li id="menu-item-55" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children">
                                <Link href="/">
                                    <span className="menu-home">Home</span>
                                </Link></li>
                            <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://webredox.net/demo/wp/gmag/blog/" className="menu-blog">Posts<i className="ion-arrow-down-b" /></a>
                                <ul className="sub-menu">
                                    <li id="menu-item-342" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog/" className="menu-blog">List</a></li>
                                    <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style/" className="menu-blog-list-style">2 Sidebars</a></li>
                                    <li id="menu-item-349" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style-2/" className="menu-blog-list-style-2">Grid Sidebar</a></li>
                                    <li id="menu-item-352" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-fullwidth/" className="menu-blog-fullwidth">Full Width Sidebar</a></li>
                                    <li id="menu-item-355" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-grid-style/" className="menu-blog-grid-style">3 Columns Grid</a></li>
                                    <li id="menu-item-356" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-single">Single<i className="ion-arrow-down-b" /></a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-359" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/first-prototype-flight-using-kinetic-launch-system/" className="menu-first-prototype-flight-using-kinetic-launch-system">Style 1</a></li>
                                            <li id="menu-item-358" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/london-stay-most-popular-city/" className="menu-london-stay-most-popular-city">Style 2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-629" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/business/" className="menu-business">Business</a></li>
                            <li id="menu-item-628" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/technology/" className="menu-technology">Technology</a></li>
                            <li id="menu-item-56" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-shop">Shop<i className="ion-arrow-down-b" /></a>
                                <ul className="sub-menu">
                                    <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/shop/" className="menu-shop">Products</a></li>
                                    <li id="menu-item-442" className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://webredox.net/demo/wp/gmag/product/awesome-merch-wallet/" className="menu-awesome-merch-wallet">Product Single</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-361" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-pages">Pages<i className="ion-arrow-down-b" /></a><ul className="sub-menu">
                                <li id="menu-item-422" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/about/" className="menu-about">About</a></li>
                                <li id="menu-item-421" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/contacts/" className="menu-contacts">Contacts</a></li>
                                <li id="menu-item-362" className="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="https://webredox.net/demo/wp/gmag/category/technology/" className="menu-privacy-policy">Category</a></li>
                                <li id="menu-item-363" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/author/admin/" className="menu-author-single">Author Single</a></li>
                                <li id="menu-item-364" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/404" className="menu-404">404</a></li></ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                {isOpen && <div className="main-menu vismobmenu">
                    <nav>
                        <ul>
                            <li id="menu-item-55" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children"><a href="#" className="menu-home">Home<i className="ion-arrow-down-b" /></a></li>
                            <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://webredox.net/demo/wp/gmag/blog/" className="menu-blog">Posts<i className="ion-arrow-down-b" /></a>
                                <ul className="sub-menu">
                                    <li id="menu-item-342" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog/" className="menu-blog">List</a></li>
                                    <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style/" className="menu-blog-list-style">2 Sidebars</a></li>
                                    <li id="menu-item-349" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style-2/" className="menu-blog-list-style-2">Grid Sidebar</a></li>
                                    <li id="menu-item-352" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-fullwidth/" className="menu-blog-fullwidth">Full Width Sidebar</a></li>
                                    <li id="menu-item-355" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-grid-style/" className="menu-blog-grid-style">3 Columns Grid</a></li>
                                    <li id="menu-item-356" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-single">Single<i className="ion-arrow-down-b" /></a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-359" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/first-prototype-flight-using-kinetic-launch-system/" className="menu-first-prototype-flight-using-kinetic-launch-system">Style 1</a></li>
                                            <li id="menu-item-358" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/london-stay-most-popular-city/" className="menu-london-stay-most-popular-city">Style 2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-629" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/business/" className="menu-business">Business</a></li>
                            <li id="menu-item-628" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/technology/" className="menu-technology">Technology</a></li>
                            <li id="menu-item-56" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-shop">Shop<i className="ion-arrow-down-b" /></a>
                                <ul className="sub-menu">
                                    <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/shop/" className="menu-shop">Products</a></li>
                                    <li id="menu-item-442" className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://webredox.net/demo/wp/gmag/product/awesome-merch-wallet/" className="menu-awesome-merch-wallet">Product Single</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-361" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#" className="menu-pages">Pages<i className="ion-arrow-down-b" /></a>
                                <ul className="sub-menu">
                                    <li id="menu-item-422" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/about/" className="menu-about">About</a></li>
                                    <li id="menu-item-421" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/contacts/" className="menu-contacts">Contacts</a></li>
                                    <li id="menu-item-362" className="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="https://webredox.net/demo/wp/gmag/category/technology/" className="menu-privacy-policy">Category</a></li>
                                    <li id="menu-item-363" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/author/admin/" className="menu-author-single">Author Single</a></li>
                                    <li id="menu-item-364" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/404" className="menu-404">404</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="menusb sliding-menu" style={{ height: '216px' }}>
                        <div className="sliding-menu-wrapper" style={{ width: '1800px' }}>
                            <ul id="menu-panel-by4ks" className="menu-panel-root" style={{ width: '300px' }}>
                                <li id="menu-item-55" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children"><a href="#menu-panel-mjuvx" className="menu-home nav">Home<i className="ion-arrow-down-b" /></a>
                                </li>
                                <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="#menu-panel-g65pg" className="menu-blog nav">Posts<i className="ion-arrow-down-b" /></a>
                                </li>
                                <li id="menu-item-629" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/business/" className="menu-business">Business</a></li>
                                <li id="menu-item-628" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/technology/" className="menu-technology">Technology</a></li>
                                <li id="menu-item-56" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#menu-panel-favfn" className="menu-shop nav">Shop<i className="ion-arrow-down-b" /></a>
                                </li>
                                <li id="menu-item-361" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#menu-panel-sn2ua" className="menu-pages nav">Pages<i className="ion-arrow-down-b" /></a>
                                </li>
                            </ul>
                            <ul className="sub-menu menu-panel" id="menu-panel-mjuvx" style={{ width: '300px' }}><a className="back" href="#menu-panel-back" />
                                <li id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item"><a href="https://webredox.net/demo/wp/gmag/" className="menu-home">Slider</a></li>
                                <li id="menu-item-622" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/carousel/" className="menu-carousel">Carousel</a></li>
                                <li id="menu-item-621" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/grid/" className="menu-grid">Grid</a></li></ul><ul className="sub-menu menu-panel" id="menu-panel-g65pg" style={{ width: '300px' }}><a className="back" href="#menu-panel-back" />
                                <li id="menu-item-342" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog/" className="menu-blog">List</a></li>
                                <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style/" className="menu-blog-list-style">2 Sidebars</a></li>
                                <li id="menu-item-349" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-list-style-2/" className="menu-blog-list-style-2">Grid Sidebar</a></li>
                                <li id="menu-item-352" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-fullwidth/" className="menu-blog-fullwidth">Full Width Sidebar</a></li>
                                <li id="menu-item-355" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/blog-grid-style/" className="menu-blog-grid-style">3 Columns Grid</a></li>
                                <li id="menu-item-356" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#menu-panel-4e21t" className="menu-single nav">Single<i className="ion-arrow-down-b" /></a>
                                </li></ul><ul className="sub-menu menu-panel" id="menu-panel-4e21t" style={{ width: '300px' }}><a className="back" href="#menu-panel-back" />
                                <li id="menu-item-359" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/first-prototype-flight-using-kinetic-launch-system/" className="menu-first-prototype-flight-using-kinetic-launch-system">Style 1</a></li>
                                <li id="menu-item-358" className="menu-item menu-item-type-post_type menu-item-object-post"><a href="https://webredox.net/demo/wp/gmag/london-stay-most-popular-city/" className="menu-london-stay-most-popular-city">Style 2</a>
                                </li>
                            </ul>
                            <ul className="sub-menu menu-panel" id="menu-panel-favfn" style={{ width: '300px' }}><a className="back" href="#menu-panel-back" />
                                <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/shop/" className="menu-shop">Products</a></li>
                                <li id="menu-item-442" className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://webredox.net/demo/wp/gmag/product/awesome-merch-wallet/" className="menu-awesome-merch-wallet">Product Single</a></li>
                            </ul>
                            <ul className="sub-menu menu-panel" id="menu-panel-sn2ua" style={{ width: '300px' }}><a className="back" href="#menu-panel-back" />
                                <li id="menu-item-422" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/about/" className="menu-about">About</a></li>
                                <li id="menu-item-421" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://webredox.net/demo/wp/gmag/contacts/" className="menu-contacts">Contacts</a></li>
                                <li id="menu-item-362" className="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="https://webredox.net/demo/wp/gmag/category/technology/" className="menu-privacy-policy">Category</a></li>
                                <li id="menu-item-363" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/author/admin/" className="menu-author-single">Author Single</a></li>
                                <li id="menu-item-364" className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://webredox.net/demo/wp/gmag/404" className="menu-404">404</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>}
            </div>
        </div>
    </>
}

export default ClientNavbar