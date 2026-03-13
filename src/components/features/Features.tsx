import { featureItem } from '../../Data';
import './Features.css'

const Features = () => {
  return (
    <section className='features section'>

      {/* Section Title */}
      <div className="section-title">
        <h2>Why Customers Choose Our Restaurant 🍽️</h2>
        
      </div>

      <div className='features-container'>
        {featureItem.map(({ id, img, title, description }) => {
          return (
            <article className='features-item' key={id}>
              
              <span className='features-icon'>
                <img src={img} alt='' className='features-img' />
              </span>

              <p className='features-no'>0{id}</p>
              <h3 className='features-title'>{title}</h3>
              <p className='features-description'>{description}</p>

            </article>
          );
        })}
      </div>

    </section>
  );
};

export default Features;