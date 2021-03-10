import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <a href="https://www.primevideo.com/region/eu/ref=dv_web_force_root">
        <img className="home__bannerImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657651956_.jpg"/>
      </a>
      
      <div className = "product__container">
          <Product
            id="1291921"
            title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            image="https://images-na.ssl-images-amazon.com/images/I/71nT6xat93L._SX425_.jpg"
            rating={4}
            price="25,990.00"
        />
        <Product
            id="1291921"
            title="Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card (Red)"
            image="https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg"
            rating={2}
            price="777.00"
        />
      </div>

      <div className = "product__container">
          <Product
            id="1291921"
            title="Death; An Inside Story: A book for all those who shall die Paperback – 21 February 2020"
            image="https://images-na.ssl-images-amazon.com/images/I/41FvL+u1ENL._SX310_BO1,204,203,200_.jpg"
            rating={4}
            price="211.00"
        />
        <Product
            id="1291921"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
            rating={5}
            price="2,403.00"
        />
        <Product
            id="1291921"
            title="JUAREZ Arpéggio 41 Inch Semi-Acoustic Guitar Kit, Thin Line Body, Spruce Top, with 4 Band EQ, Natural"
            image="https://images-na.ssl-images-amazon.com/images/I/71JH%2BWn8ziL._SY679_.jpg"
            rating={4}
            price="6,231.00"
        />
      </div>
      <div className = "product__container">
          <Product
            id="1291921"
            title="Lenovo IdeaPad Flex 5i 11th Gen Intel Core i3 14-inch FHD IPS 2-in-1 Touchscreen Laptop (8GB/256GB SSD/Win 10/Office 2019/Lenovo Digital Pen Stylus/Fingerprint Reader/Graphite Grey/1.5Kg), 82HS008YIN"
            image="https://images-na.ssl-images-amazon.com/images/I/717PHDbymML._SX679_.jpg"
            rating={5}
            price="48,990.00"
        />
      </div>
     
    </div>
  )
}

export default Home
