import aboutImg1 from '../../assets/images/about-1.jpg'
import aboutImg2 from '../../assets/images/about-2.jpg'

import dataImg1 from '../../assets/images/quality.svg'
import dataImg2 from '../../assets/images/delicious.svg'


import SectionTitle from '../title/SectionTitle.tsx'

import './About.css'


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container container grid">
        
        
        <div className="about-shape grid">
          <img src={aboutImg1} alt="" className="about-img" />

          <div className="about-experience">
            <h3 className="about-no">30+</h3>
            <span className="about-details">Years of Experience</span>
          </div>

          <img src={aboutImg2} alt="" className="about-img" />
        </div>
      
        <div className='about-content'>
          <SectionTitle
          subtitle={'About us'}
          title={
            <>
            We Are Always <span>Here To Serve </span> You Fresh Food
            </>
            
          }
       />

       <p className='about-description'>
        There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words look even. Many desktop packages and web page editors now their default model text.

       </p>

       <div className='about-data grid'>
        <div className='about-item'>
          <div className='about-data-shape'>
            <img src={dataImg1} alt='' className='about-data-img'/>          
            </div>
        
        <div>
          <h3 className='about-title'>Best Quality Food</h3>
          <p className='about-data-description'>
            It is a long established fact by the layout.
          </p>
        </div>
        </div>

        <div className='about-item'>
          <div className='about-data-shape'>
            <img src={dataImg2} alt='' className='about-data-img'/>
          </div>
        </div>
        <div>
          <h3 className='about-title'>Delicious Food</h3>
          <p className='about-data-description'>
            It is a long established fact by the layout.
          </p>
        </div>
       </div>

       
                
     </div>
      </div>
    </section>
  )
}

export default About;