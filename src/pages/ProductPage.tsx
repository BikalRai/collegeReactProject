import AppContainer from "../components/container/AppContainer";
import AppLayout from "../layouts/AppLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const ProductPage = () => {
  return (
    <AppLayout>
      <AppContainer>
        <div className='grid md:grid-cols-2'>
          <div className='grid'>
            <div className='border border-primary h-[360px] md:h-[588px] md:w-[692px]'>
              <img src='' alt='image' className='h-auto w-full' />
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={3}
              className='w-full mt-9'
            >
              <SwiperSlide>
                <div className='h-[116px] max-h-[116px] w-[116px] max-w-[116px] rounded-xl border cursor-pointer overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[116px] max-h-[116px] w-[116px] max-w-[116px] rounded-xl border cursor-pointer overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[116px] max-h-[116px] w-[116px] max-w-[116px] rounded-xl border cursor-pointer overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[116px] max-h-[116px] w-[116px] max-w-[116px] rounded-xl border cursor-pointer overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <h3>Product Name</h3>
      </AppContainer>
    </AppLayout>
  );
};

export default ProductPage;
