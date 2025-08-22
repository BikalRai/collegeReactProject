import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import PrimaryButtonNoGlow from "../button/PrimaryButtonNoGlow";
import ProductPageSection from "./ProductPageSection";
import ProductShipping from "./ProductShipping";
import ProductInfo from "./ProductInfo";
import { LuHeart, LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductSpecification = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <div className='grid'>
        <div className='border border-primary h-[360px] lg:h-[588px]'>
          <img src='' alt='image' className='h-auto w-full' />
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={4}
          className='w-full mt-9'
        >
          <SwiperSlide>
            <div className='h-[80px] w-[80px] lg:h-[116px] lg:w-[116px] rounded-xl border cursor-pointer overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='image'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80px]  w-[80px] rounded-xl border cursor-pointer overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='image'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80px]  w-[80px] rounded-xl border cursor-pointer overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='image'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80px]  w-[80px] rounded-xl border cursor-pointer overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='image'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        {/* header seection */}
        <div className='border-b border-b-muted pb-7'>
          <div className='flex items-center justify-between'>
            <h3 className='text-2xl font-bold md:text-[28px]'>Product Name</h3>
            <div className='flex items-center gap-2 bg-red-300 scroll-py-0.5 px-2 rounded-4xl'>
              <LuHeart className='cursor-pointer' />
              <span>111</span>
            </div>
          </div>
          <p className='text-muted'>Shop/Vendor name</p>
        </div>
        {/* price section */}
        <ProductPageSection>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl lg:text-3xl font-bold'>Rs price</h1>
            <div className='flex items-center gap-5'>
              <ProductInfo color='orange-300'>
                <LuStar />
                <span>4.7</span>
              </ProductInfo>
              <ProductInfo color='cardbg'>
                <IoChatbubbleEllipsesOutline />
                <span>56</span>
                <span>Reviews</span>
              </ProductInfo>
            </div>
          </div>
          <p className='text-sm lg:text-[16px] text-muted line-through'>
            Rs oldPrice
          </p>
        </ProductPageSection>
        {/* quantity and action */}
        <ProductPageSection>
          <div className='flex items-center gap-5'>
            <div className='bg-cardbg-light text-cardbg rounded-full flex items-center gap-8 text-lg overflow-hidden'>
              <button className='cursor-pointer transition-colors hover:bg-muted p-2.5'>
                -
              </button>
              <span>5</span>
              <button className='cursor-pointer transition-colors hover:bg-muted p-2.5'>
                +
              </button>
            </div>
            <PrimaryButtonNoGlow btnText='Add to cart' />
          </div>
        </ProductPageSection>
        <ProductShipping />
      </div>
    </div>
  );
};

export default ProductSpecification;
