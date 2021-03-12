import React from 'react'
import "./Home.css"
import Product from "./Product"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
      <Carousel
        autoPlay interval="5000"
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="carousel__images"
      >
        <img className="home__bannerImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657651956_.jpg"/>
        <img className="home__bannerImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote9/GW/March/D21559520_WLD_Mi_Redmi_Note9_DesktopTallHero_1500x600._CB658225291_.jpg"/>
        <img className="home__bannerImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_1_milk._CB659523386_.jpg"/>
        <img className="home__bannerImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"/>
      </Carousel>
      
      <div className = "product__container">
          <Product 
            id="1"
            title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            image="https://images-na.ssl-images-amazon.com/images/I/71nT6xat93L._SX425_.jpg"
            rating={4}
            price={25990.69}
        />
        <Product 
            id="2"
            title="Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card (Red)"
            image="https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg"
            rating={2}
            price={777.99}
        />
      </div>

      <div className = "product__container">
          <Product 
            id="3" 
            title="Death; An Inside Story: A book for all those who shall die Paperback – 21 February 2020"
            image="https://images-na.ssl-images-amazon.com/images/I/41FvL+u1ENL._SX310_BO1,204,203,200_.jpg"
            rating={4}
            price={221.99}
        />
        <Product
            id="4"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
            rating={5}
            price={2403.99}
        />
        <Product 
            id="5"
            title="JUAREZ Arpéggio 41 Inch Semi-Acoustic Guitar Kit, Thin Line Body, Spruce Top, with 4 Band EQ, Natural"
            image="https://images-na.ssl-images-amazon.com/images/I/71JH%2BWn8ziL._SY679_.jpg"
            rating={4}
            price={63.99}
        />
      </div>
      <div className = "product__container">
          <Product 
            id="6"
            title="Lenovo IdeaPad Flex 5i 11th Gen Intel Core i3 14-inch FHD IPS 2-in-1 Touchscreen Laptop (8GB/256GB SSD/Win 10/Office 2019/Lenovo Digital Pen Stylus/Fingerprint Reader/Graphite Grey/1.5Kg), 82HS008YIN"
            image="https://images-na.ssl-images-amazon.com/images/I/717PHDbymML._SX679_.jpg"
            rating={5}
            price={48990.99}
        />
        <Product
            id="7"
            title="LG 1.5 Ton 5 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling, HD Filter, 2021 Model, MS-Q18YNZA, White)"
            image="https://images-na.ssl-images-amazon.com/images/I/51lyOjfKhML._SX679_.jpg"
            rating={4}
            price={41499.99}
        />
      </div>
      <div className = "product__container">
          <Product
            id="8"
            title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Center Jet Technology)"
            image="https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg"
            rating={5}
            price={14190.99}
        />
        <Product
            id="12"
            title="Lenovo IdeaPad Slim 3 AMD Athlon Silver 3050U 15.6 inch HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 2019/Integrated AMD Radeon Graphics/Platinum Grey/1.85Kg), 81W100W9IN"
            image="https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SY355_.jpg"
            rating={4}
            price={28457.99}
        />
        <Product
            id="10"
            title="
            Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
            rating={4}
            price={13,878.99}
        />
      </div>
      <div className = "product__container">
          <Product
            id="11"
            title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg"
            rating={5}
            price={57999.99}
        />
        <Product
            id="9"
            title="Electrobot i5 9th gen 6 core - Upto 4.10 Ghz, 8GB DDR4 2400Mhz, Nvidia GTX 1050ti 4GB, 120GB SSD, 1TB HDD, Gaming PC with 2 Rainbow Color Cooling"
            image="https://images-na.ssl-images-amazon.com/images/I/61JAvmbyTwL._SX569_.jpg"
            rating={4}
            price={44,999.49}
        />
        
      </div>
     
    </div>
  )
}

export default Home
