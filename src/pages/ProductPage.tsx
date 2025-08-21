import AppContainer from '../components/container/AppContainer';
import AppLayout from '../layouts/AppLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const ProductPage = () => {
  return (
    <AppLayout>
      <AppContainer>
        <div className="grid md:grid-cols-2">
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
          <h3>Product Name</h3>
        </div>
      </AppContainer>
    </AppLayout>
  );
};

export default ProductPage;
