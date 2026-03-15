import SectionTitle from "../title/SectionTitle";
import { gallery } from "../../Data";
import { RiAddLargeLine } from "react-icons/ri";

import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-head">
      <SectionTitle
        subtitle="Our Photo Gallery"
        title="Let's check Our Photo Gallery"
      />

      <div className="gallery-container">
        {gallery.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item} alt="gallery" className="gallery-img" />

            <a href={item} className="gallery-link">
              <RiAddLargeLine />
            </a>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Gallery;