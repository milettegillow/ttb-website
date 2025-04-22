import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageCarousel = ({ images }: { images: string[] }) => (
  <Swiper spaceBetween={10} slidesPerView={1}>
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img src={img} alt={`Event image ${index}`} className="photo" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageCarousel;
