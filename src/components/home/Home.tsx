import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { homeSlide } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';




import './Home.css';
import parse from 'html-react-parser';

const Home = () => {
  return (
    <section id="home">
      <Swiper
        speed={2000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {homeSlide.map(({ img, title, description }, index) => {
          return (
            <SwiperSlide
              className="home-slide section"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={index}
            >
              {/* overlay */}
              <div className="home-overlay"></div>

              <div className="home-data container">
                <h3 className="home-subtitle">Welcome To Restrou!</h3>
                <h1 className="home-title">{parse(title)}</h1>
                <p className="home-description">{description}</p>

                <div className="home-buttons">
                  <ScrollLink
                    to="about"
                    name="About More"
                    className="button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />

                  <ScrollLink
                    to="menu"
                    name="Check Menu"
                    className="button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* custom arrows */}
        <div className="home-arrows">
          <div className="prev">
            <FaArrowLeft />
          </div>

          <div className="next">
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Home;