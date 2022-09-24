import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'  src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

            <div className='home__row'>
                <Product 
                id='65656'
                title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES'
                price={29.99}
                image='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg'
                rating={5}/>

                <Product 
                id='454544'
                title='Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YM57AN'
                price={29.99}
                image='https://m.media-amazon.com/images/I/71Llge105IL._AC_SL1500_.jpg'
                rating={5}/>

                <Product 
                id='4545441646'
                title='The lean startupASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Thunderbolt 4,...'
                price={29.99}
                image='https://m.media-amazon.com/images/I/71AGOX9MORL._AC_SL1500_.jpg'
                rating={5}/>
            
                
               
            </div>
            <div className='home__row'>
            <Product 
                id='54542'
                title='Xbox Series X'
                price={29.99}
                image='https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg'
                rating={5}/>
                
                <Product 
                id='5632'
                title='1 ft. USB to RS232 Serial DB9 Adapter Cable with COM Port Retention - Up to 920 kpbs USB A to DB9 Serial Adapter (ICUSB232PRO)'
                price={29.99}
                image='https://m.media-amazon.com/images/I/6183mI1v2sL._AC_SL1500_.jpg'
                rating={5}/>
                 <Product 
                id='741'
                title='Dell Optiplex 9020 Small Form Factor Desktop with Intel Core i7-4770 Upto 3.9GHz, HD Graphics 4600 4K Support, 32GB RAM, 1TB SSD, DisplayPort, HDMI, Wi-Fi,...'
                price={29.99}
                image='https://m.media-amazon.com/images/I/61pskHRSN2L._AC_SL1500_.jpg'
                rating={5}/>

            </div>
            <div className='home__row'>
            <Product 
                id='789523'
                title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic...'
                price={29.99}
                image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg'
                rating={5}/>
            </div>
        </div>
    </div> 
  )
}
 