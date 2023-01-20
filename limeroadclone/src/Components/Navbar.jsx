import React from "react";
import "./navbar.css";
import { BiSearchAlt2, BiStoreAlt } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { HiGift } from "react-icons/hi";
import { BsPerson, BsBag } from "react-icons/bs";
import { Image,Heading,HStack,Text,Spacer } from "@chakra-ui/react";
// import { AppContext } from '../../Context/AppContextProvider'
// import { AuthContext } from '../../Context/AuthContextProvider'
// import { useContext } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

/* #262726 #fafafa */
const Navbar = () => {

//   function accountNameDrop() {
//     document.getElementById("accountdrop").classList.toggle("show");
//   }
//    handleSignout =  () =>{
   
//   } 
// onOpen=()=>{

// } 
//   const {user,logOut} = useContext(AuthContext)
//   const { isOpen, onOpen, onClose,isLogin,setIsLogin } = useContext(AppContext)
//   useEffect(()=>{
//     if(user != null){
//       onClose()
//     }
//   },[user])
//   const checkVal = user?.email || user
//  checkVal=()=>{

// }

//   const adBanner = () =>{
//     document.getElementById("ad-store").classList.toggle("hide");
//   }
  return (
    <>
      <div className="ad-store" id="ad-store">
        {/* <div className="ad-store-left">
          <HiGift color="#faa8a8" />
          <p>Pick Any Product at Rs 199</p>
          <a href="#">SHOP NOW</a>
        </div> */}
        {/* <div className="ad-store-right">
          <BiStoreAlt />
          <p>White Feather Store</p>
          <IoMdClose style={{color:'#db1d65',fontSize:'1.2rem',cursor:'pointer'}} onClick={adBanner} />
        </div> */}
          {/* <IoMdClose className="adBannerMobileIcon" style={{color:'#db1d65',fontSize:'1.2rem',cursor:'pointer'}} onClick={adBanner} />
      </div>
      <div className="navbar">
        <div className="navbar-top">
        <Link to='/'>
          <Image
            src="https://i.ibb.co/Jtvk4Lf/White-Feather.png"
            alt="White-Feather-Logo"
            boxSize="90px"
            objectFit="cover"
          /> */}
          {/* </Link>
          <div className="inputDiv">
            <BiSearchAlt2 color="#a3a8b1" size="1.6rem" />
            <input
              type="text"
              name="search"
              placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc"
            />
          </div> */}
          {/* <div className="navbar-icon">
            <Link to='/cart'>
            <BsBag color="#fafafa" size="1.5rem" className="bagIcon" />
            </Link>
            <div className="lineDiv"></div>
            {
              checkVal?(
              <div className="accountName">
                <div>
                  <button id="accountName-btn" onClick={accountNameDrop}>
                  {
                    checkVal
                  }
                  <IoMdArrowDropdown className="accountName-icon" />
                  </button>
                </div>
              <div className="accountName-dropDown" id="accountdrop">
                <a href="#">My Profile</a>
                <a href="#">My Orders</a>
                <a href="#">My Dashboard</a>
                <button onClick={handleSignout}>Sign Out</button>
              </div>
              </div>
              ):(<BsPerson color="#fafafa" size="1.5rem" onClick={onOpen} style={{cursor:'pointer'}} />)
            }
            
          </div>
        </div> */}
        <div className="navbar-bottom">
          <ul class="navbar-nav">
           {/* ============== 1st Nav Item ==============  */}
            <li class="nav-item">
              <button>

              <Link to="/">LimeRoad</Link>
              </button>
            </li>
             {/* ============== 2nd Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                <Link to='/makeup'>women</Link>
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
                      <a href="#">Bags & wallets</a>
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
                      <a href="#">Lingerie & Sleepwear</a>
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
                      <a href="#">Belts & Watches</a>
                    </button>
                    <button>
                      <a href="#">Sunglasses & Mats</a>
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
                      <a href="#">Earings</a>
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
                      <a href="#">Beauty & personal Care</a>
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

                <a href="#">MEN</a>
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
                      <a href="#">Bottom Wear</a>
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
                      <a href="#">Sports Wear</a>
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
                      <a href="#">Fragnces</a>
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
                      <a href="#">Belts,Bags & Wallets</a>
                    </button>
                    <button>
                      <a href="#">Watches</a>
                    </button>
                    <button>
                      <a href="#">Sunglasses & Frames</a>
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
                      <a href="#">Innerwear </a>
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
                      <a href="#">Personal Grooming</a>
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

                <a href="#">KIDS</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 5th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">SANITIZING CARE</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    SANITIZING CARE
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                  </div>
                  <div className="dropdown-content-imageProduct" style={{display:'flex',flexDirection:'row',gap:'2rem',marginLeft:'auto'}}>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 6th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">COLLECTION</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    SHOP BY COLLECTION
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                  </div>
                  <div className="dropdown-content-imageProduct" style={{display:'flex',flexDirection:'row',gap:'2rem',marginLeft:'auto'}}>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 7th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">REWARDS</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content" style={{height:'12rem'}}>
                </div>
              </div>
            </li>
            {/* ============== 8th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">COLLECTION</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content"  style={{height:'12rem'}}>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    WHITE FEATHER STUDIO
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                  </div>
                  
                </div>
              </div>
            </li>
            {/* ============== 8th Nav Item ==============  */}
            <li class="nav-item">
              <button>

              <a href="#">OFFER</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;