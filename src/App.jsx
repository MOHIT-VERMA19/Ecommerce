import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Electronics from './components/Electronics';
import Navbar from './components/Navbar';
import './styles/navbar.scss'
import FeaturedProducts from './components/FeaturedProducts';
import Carousel from './components/Carousel';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules'

// import { EffectCoverflow, Pagination, Navigation} from 'swiper';

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const items = ['HOME', 'ELECTRONICS', 'BOOKS', 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES','FURNITURE','ELECTRONICS','TRAVEL','BOTANICAL','CATEGORY NAME'];

import image1 from './assets/Images/laptop.jpg';
import image2 from './assets/Images/tshirt.jpg';
import image3 from './assets/Images/watch.jpg';
import image4 from './assets/Images/purse.jpg';
import image5 from './assets/Images/brownPurse.jpg';
import image6 from './assets/Images/wireless-headphones.jpg'
import image7 from './assets/Images/case.jpg';
import image8 from './assets/Images/mat.jpg';
import image9 from './assets/Images/sunglass.jpg'

const images = [
  { image: image1, title: 'Product 1' },
  { image: image2, title: 'Product 2' },
  { image: image3, title: 'Product 3' },
  {image: image4, title: 'Product 4'},
  
  // Add more items as needed
];

function App() {

  return (
    <Router>
      <div>
        <Navbar items = {items}/>
        <div>
          <FeaturedProducts></FeaturedProducts>
          {/* <Carousel items={images} /> */}
          <div className='Carousel'> 
          <Swiper
          effect={'coverflow'}
          grabCursor={ true }
          centeredSlides = { true }
          loop = { true }
          slidesPerView={ 'auto' }
          coverflowEffect={
            {
              rotate: 0,
              stretch:0,
              depth:100,
              modifier: 2.5,
            }
          }
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          >
            <SwiperSlide>
              <img src ={image1} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image2} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image3} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image4} alt = "slide_image"/>
            </SwiperSlide>
            
            <SwiperSlide>
              <img src ={image5} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image6} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image7} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image8} alt = "slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src ={image9} alt = "slide_image"/>
            </SwiperSlide>
            <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
          </Swiper>
          </div>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
