import React from 'react';
import './Bfooter1.css';
import { footerlinks, footerimgs } from '../../Data/Footer1';

const Footer = () => {
  return (
    <div>
      <div className="fstdiv">
        <div className="ftmap">
          {footerlinks.map((item, index) => (
            <div key={index}>
              <div className="fttxt">{item.title}</div>
              <div className="fttxt11">{item.txt}</div>
              <button className="ftbtn">{item.button}</button>
              <div className="fttxt12">{item.txt2}</div>
              
              <div className="ftimages">
                {footerimgs.map((item) => (
                  <img src={item.img} className='images' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
