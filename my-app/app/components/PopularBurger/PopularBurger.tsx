"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgersCard from './BurgersCard';
import imageone from '../../../public/images/b1.png'
import imagetwo from '../../../public/images/b2.png'
import imagethree from '../../../public/images/b3.png'
import imagefour from '../../../public/images/b4.png'
import imagefive from '../../../public/images/b5.png'
import imagesix from '../../../public/images/b6.png'
import imageseven from '../../../public/images/b7.png'
import imageeight from '../../../public/images/b8.png'
import imagenine from '../../../public/images/b9.png'



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const PopularBurger = () => {
  return <div className='pt-[3rem] pb-[3rem]'>
    <h1 className='heading'>
        Our Popular <span className='text-red-600'> Burgers </span>
    </h1>
    <div className='w-[80%] mt-[4rem] mx-auto'>
        <Carousel 
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
        showDots={false}
        >
          <BurgersCard 
          title="Beefy Bite" 
          image={imageone.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagetwo.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagethree.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagefour.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagefive.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagesix.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imageseven.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imageeight.src}
          reviews="6" 
          price="10.88$" 
          />
          <BurgersCard 
          title="Beefy Bite" 
          image={imagenine.src}
          reviews="6" 
          price="10.88$" 
          />
        </Carousel>
    </div>
  </div>
  }
export default PopularBurger
