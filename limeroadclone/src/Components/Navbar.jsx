import React from "react";
import "./navbar.css";
import { BiSearchAlt2, BiStoreAlt } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { HiGift } from "react-icons/hi";
import { BsPerson, BsBag } from "react-icons/bs";
import { Image, Heading, HStack, Text, Spacer } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateto = useNavigate();

  return (
    <>
      <div className="ad-store" id="ad-store">
        <div className="navbar-bottom">
          <ul class="navbar-nav">
            {/* ============== 1st Nav Item ==============  */}
            <li class="nav-item">
              <button>
                <Link className="lime" to="/">
                  LimeRoad
                </Link>
              </button>
            </li>
            {/* ============== 2nd Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                  <Link to="/men">WOMEN</Link>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      ETHNIC WEAR
                    </a>
                    <button>
                      <a href="#">Kurta Kurtis</a>
                    </button>
                    <button>
                      <a href="#">Sarees</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Sets</a>
                    </button>
                    <button>
                      <a href="#">Suit and Dress Material</a>
                    </button>
                    <button>
                      <a href="#">Lehangas</a>
                    </button>
                    <button>
                      <a href="#">Blouses</a>
                    </button>
                    <button>
                      <a href="#">Dupattas</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Dresses</a>
                    </button>
                    <button>
                      <a href="#">Plazzos & Skirts</a>
                    </button>
                    <button>
                      <a href="#">Leggings,Salwar & Churidar</a>
                    </button>
                    <button>
                      <a href="#">Shawls & wraps</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Shrugs & Jackets</a>
                    </button>
                    <button>
                      <a href="#">Cloaks & Abaya</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Bags & wallets
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Western WEAR
                    </a>
                    <button>
                      <a href="#">Tops</a>
                    </button>
                    <button>
                      <a href="#">Dresses</a>
                    </button>
                    <button>
                      <a href="#">Tees</a>
                    </button>
                    <button>
                      <a href="#">Shirts</a>
                    </button>
                    <button>
                      <a href="#">Tunics</a>
                    </button>
                    <button>
                      <a href="#">Jumpsuits</a>
                    </button>
                    <button>
                      <a href="#">Sets</a>
                    </button>
                    <button>
                      <a href="#">Kaftans</a>
                    </button>
                    <button>
                      <a href="#">Jeans and Jeggings</a>
                    </button>
                    <button>
                      <a href="#">Trousers & Pants</a>
                    </button>
                    <button>
                      <a href="#">Skirts & Shorts</a>
                    </button>
                    <button>
                      <a href="#">Shrugs</a>
                    </button>
                    <button>
                      <a href="#">Sweaters % Sweatshirts</a>
                    </button>
                    <button>
                      <a href="#">Jackets & Blazers</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Sports & activewear
                    </a>
                    <button>
                      <a href="#">Swim Wear</a>
                    </button>
                    <button>
                      <a href="#">Topwear</a>
                    </button>
                    <button>
                      <a href="#">Shoes</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Lingerie & Sleepwear
                      </a>
                    </button>
                    <button>
                      <a href="#">Bra</a>
                    </button>
                    <button>
                      <a href="#">Panties</a>
                    </button>
                    <button>
                      <a href="#">Lingerie Sets</a>
                    </button>
                    <button>
                      <a href="#">Sleepwear & Loungewear</a>
                    </button>
                    <button>
                      <a href="#">Shapewear</a>
                    </button>
                    <button>
                      <a href="#">Camisoles & Thermals</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Belts & Watches
                      </a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Sunglasses & Mats
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Jewellery
                    </a>
                    <button>
                      <a href="#">Fashion Jwellery</a>
                    </button>
                    <button>
                      <a href="#">Imiation Jwellery</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Earings
                      </a>
                    </button>
                    <button>
                      <a href="#">Necklace & Pendants</a>
                    </button>
                    <button>
                      <a href="#">Ring,Bangles & Braceltes</a>
                    </button>

                    <button>
                      <a href="#">Footwear</a>
                    </button>
                    <button>
                      <a href="#">Flats</a>
                    </button>
                    <button>
                      <a href="#">Heels</a>
                    </button>
                    <button>
                      <a href="#">Casuals Shoes</a>
                    </button>
                    <button>
                      <a href="#">Flip Flops</a>
                    </button>
                    <button>
                      <a href="#">Sports Shoes & Sneakers</a>
                    </button>
                    <button>
                      <a href="#">Boots</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Beauty & personal Care
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Brands
                    </a>
                    <button>
                      <a href="#">W</a>
                    </button>
                    <button>
                      <a href="#">Karigiri</a>
                    </button>
                    <button>
                      <a href="#">Aurelia</a>
                    </button>
                    <button>
                      <a href="#">Alcis</a>
                    </button>
                    <button>
                      <a href="#">Shaily</a>
                    </button>

                    <button>
                      <a href="#">Cottinfab</a>
                    </button>
                    <button>
                      <a href="#">Ksut</a>
                    </button>
                    <button>
                      <a href="#">Oxolloxo</a>
                    </button>
                    <button>
                      <a href="#">Trendif</a>
                    </button>
                    <button>
                      <a href="#">Pluss</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 3rd Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                  <Link to="/men">
                    <div className="padding">MEN</div>
                  </Link>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Top Wear
                    </a>
                    <button>
                      <a href="#">T-shirts</a>
                    </button>
                    <button>
                      <a href="#">Polo T Shirts</a>
                    </button>
                    <button>
                      <a href="#">Casual Shirts</a>
                    </button>
                    <button>
                      <a href="#">Formal Shirts</a>
                    </button>
                    <button>
                      <a href="#">Suits & Blazers</a>
                    </button>
                    <button>
                      <a href="#">Jackets</a>
                    </button>
                    <button>
                      <a href="#">Sweaters & Sweatshirts</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Bottom Wear
                      </a>
                    </button>
                    <button>
                      <a href="#">Jeans</a>
                    </button>
                    <button>
                      <a href="#">Casual Trouwser</a>
                    </button>
                    <button>
                      <a href="#">Formal Trousers</a>
                    </button>
                    <button>
                      <a href="#">Joggers</a>
                    </button>
                    <button>
                      <a href="#">Shorts</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Ethnic Wear
                    </a>
                    <button>
                      <a href="#">Kurtas</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Wear Sets</a>
                    </button>
                    <button>
                      <a href="#">Nehru Jackets</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Bottom Wear</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Sports Wear
                      </a>
                    </button>
                    <button>
                      <a href="#">T-shirts</a>
                    </button>
                    <button>
                      <a href="#">Shorts</a>
                    </button>
                    <button>
                      <a href="#">Track Pants</a>
                    </button>
                    <button>
                      <a href="#">Track suits</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Fragnces
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Footwear
                    </a>
                    <button>
                      <a href="#">Casual Shoes</a>
                    </button>
                    <button>
                      <a href="#">Formal Shoes</a>
                    </button>
                    <button>
                      <a href="#">Sport Shoes</a>
                    </button>
                    <button>
                      <a href="#">Jutis & Majoris</a>
                    </button>
                    <button>
                      <a href="#">Sippers and Sandals</a>
                    </button>
                    <button>
                      <a href="#">Socks</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Belts,Bags & Wallets
                      </a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Watches
                      </a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Sunglasses & Frames
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Accesorries
                    </a>
                    <button>
                      <a href="#">Caps And Hats</a>
                    </button>
                    <button>
                      <a href="#">Lapel Pins & Brooch</a>
                    </button>
                    <button>
                      <a href="#">Ties & Pocket Square</a>
                    </button>
                    <button>
                      <a href="#">Cufflinks & Bracelets</a>
                    </button>
                    <button>
                      <a href="#">Handkerchiefs</a>
                    </button>
                    <button>
                      <a href="#">Headphones & Speakers</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Innerwear{" "}
                      </a>
                    </button>
                    <button>
                      <a href="#">Briefs </a>
                    </button>
                    <button>
                      <a href="#">Boxers </a>
                    </button>
                    <button>
                      <a href="#">Vests</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Personal Grooming
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Brands
                    </a>
                    <button>
                      <a href="#">Arrow</a>
                    </button>
                    <button>
                      <a href="#">US Polo Assn</a>
                    </button>
                    <button>
                      <a href="#">Aeropostale</a>
                    </button>
                    <button>
                      <a href="#">Campus Sutra</a>
                    </button>
                    <button>
                      <a href="#">Ruggers</a>
                    </button>
                    <button>
                      <a href="#">Canary London</a>
                    </button>
                    <button>
                      <a href="#">Hang Up</a>
                    </button>
                    <button>
                      <a href="#">Alcis</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 4th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                  <a className="kid" href="#">
                    KIDS
                  </a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Boys
                    </a>
                    <button>
                      <a href="#">T-shirts</a>
                    </button>
                    <button>
                      <a href="#"> Shirts</a>
                    </button>
                    <button>
                      <a href="#">Bottom wear</a>
                    </button>
                    <button>
                      <a href="#">Ethnic wear</a>
                    </button>
                    <button>
                      <a href="#">Sweater & Cardigans</a>
                    </button>
                    <button>
                      <a href="#">Coat and Jackets</a>
                    </button>
                    <button>
                      <a href="#">Innerwear and Nightwear</a>
                    </button>
                    <button>
                      <a href="#">twin Sets & Dungrees</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Shop by Age
                      </a>
                    </button>
                    <button>
                      <a href="#">0-2 Years</a>
                    </button>
                    <button>
                      <a href="#">2-6 Years</a>
                    </button>
                    <button>
                      <a href="#">6-12 Years</a>
                    </button>
                    <button>
                      <a href="#">12-16 Years</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Girls
                    </a>
                    <button>
                      <a href="#">Dresses & Frocks</a>
                    </button>
                    <button>
                      <a href="#">Tees & Tops</a>
                    </button>
                    <button>
                      <a href="#">Bottom wear</a>
                    </button>
                    <button>
                      <a href="#">Ethnic Wear</a>
                    </button>
                    <button>
                      <a href="#">Seater & Cardigans</a>
                    </button>
                    <button>
                      <a href="#">Coats & Jackets</a>
                    </button>
                    <button>
                      <a href="#">Twin Sets & Jump Suits</a>
                    </button>
                    <button>
                      <a href="#">InnerWear & Nightwear</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        shop By Age
                      </a>
                    </button>
                    <button>
                      <a href="#">0-2 Years</a>
                    </button>
                    <button>
                      <a href="#">2-6 Years</a>
                    </button>
                    <button>
                      <a href="#">6-12 Years</a>
                    </button>
                    <button>
                      <a href="#">12-16 Years</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Footwear
                    </a>
                    <button>
                      <a href="#">Sandals & Floaters</a>
                    </button>
                    <button>
                      <a href="#">Slippers & Flip Flops</a>
                    </button>
                    <button>
                      <a href="#">Casual Shoes</a>
                    </button>
                    <button>
                      <a href="#">Sport Shoes</a>
                    </button>
                    <button>
                      <a href="#">Formal Shoes</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Accessories
                      </a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Bed & Bath
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Brands
                    </a>
                    <button>
                      <a href="#">Giny & Jony</a>
                    </button>
                    <button>
                      <a href="#">US Polo Assn Kids</a>
                    </button>
                    <button>
                      <a href="#">Monte Carlo</a>
                    </button>
                    <button>
                      <a href="#">Cherokee</a>
                    </button>
                    <button>
                      <a href="#">Li'l Tomatoes</a>
                    </button>
                    <button>
                      <a href="#">NeuVin</a>
                    </button>
                    <button>
                      <a href="#">Under Fourteen Only</a>
                    </button>
                    <button>
                      <a href="#">Tales & Stories</a>
                    </button>
                    <button>
                      <a href="#">Beebay</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 5th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                  <a href="#">HOME</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Bed Linen & Furnishing
                    </a>
                    <button>
                      <a href="#">Bed Sheet Sets</a>
                    </button>
                    <button>
                      <a href="#"> Quilts & Comforters</a>
                    </button>
                    <button>
                      <a href="#">Blankets</a>
                    </button>
                    <button>
                      <a href="#">Bed Covers</a>
                    </button>
                    <button>
                      <a href="#">Pillow Covers</a>
                    </button>
                    <button>
                      <a href="#">Curtains</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Bath
                    </a>
                    <button>
                      <a href="#">Towels</a>
                    </button>
                    <button>
                      <a href="#"> Bath Mats</a>
                    </button>
                    <button>
                      <a href="#">Shower Curtains</a>
                    </button>
                    <button>
                      <a className="dropdown-content-heading" href="#">
                        Furniture
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Decor
                    </a>
                    <button>
                      <a href="#" className="dropdown-content-heading">
                        Household Accessories
                      </a>
                    </button>
                    <button>
                      <a href="#" className="dropdown-content-heading">
                        {" "}
                        Kitchen
                      </a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      Brands
                    </a>
                    <button>
                      <a href="#">Belia Casa</a>
                    </button>
                    <button>
                      <a href="#"> Cortina</a>
                    </button>
                    <button>
                      <a href="#"> Bianca</a>
                    </button>
                    <button>
                      <a href="#"> Jeby</a>
                    </button>
                    <button>
                      <a href="#"> Saral Home</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 6th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                  <a className="color" href="#">
                    OFFERS
                  </a>
                </button>
              </li>
            </li>
            <li class="nav-item">
              <button className="scrap">
                <img
                  style={{ width: "14px" }}
                  src="https://www.bing.com/th?id=OIP.KrxFzeVDGy0_He8JTFntoQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                />
                <a className="scrap" href="#">
                  SCRAPBOOK
                </a>
              </button>
            </li>
            <li class="nav-item">
              <button>
                <img
                  style={{ width: "14px" }}
                  src="https://www.bing.com/th?id=OIP.qLQCPaWxeYifioMDyQUoJwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                />

                <a className="scrap" href="#">
                  SEARCH
                </a>
              </button>
            </li>
            <li class="nav-item">
              <Link to="/cart">
                <button>
                  <img
                    style={{ width: "14px" }}
                    src="https://www.bing.com/th?id=OIP.hy2ZHgfL8xlOQUkJfe-hVQHaFs&w=285&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="logo"
                  />
                  CART
                </button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button>
                  <img
                    style={{ width: "14px" }}
                    src="https://www.bing.com/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="logo"
                  />
                  PROFILE
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
