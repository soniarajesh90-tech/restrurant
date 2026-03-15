import "./Testimonials.css";
import { testimonialItem } from "../../Data";
import { FaStar } from "react-icons/fa";
import SectionTitle from "../title/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
 import "swiper/swiper.css"; 

function Testimonial() {
  return (
    <section id="testimonials">
      <div className="testimonial-section">
        <SectionTitle
          subtitle="Customer Reviews"
          title="What Our Customers Say" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="testimonial-container"
        >

          {testimonialItem.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card">

                <img
                  src={item.img}
                  alt={item.name}
                  className="testimonial-img" />

                <h3 className="testimonial-name">{item.name}</h3>

                <p className="testimonial-desc">
                  {item.description}
                </p>

                <div className="testimonial-stars">
                  <FaStar />
                  <span>{item.stars}</span>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;