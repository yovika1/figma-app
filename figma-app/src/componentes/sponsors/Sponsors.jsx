import React from "react";
import companylinks from "../../Data/companyImg";
import "./sponsors.css";
const Sponsors = () => {
  return (
    <div>
      <div className="intro1">
        <div className="header1">
          <p className="our">Our sponsors</p>
          <div className="cpny">
            {companylinks.map((item,index) => {
              return (
                <div key={index}>
                  <img className="compy"  src={item.img} alt="" />
                </div>
              );
            })}
          </div>

          {/* <button className="bttn">Get Start</button> */}
        </div>
        {/* <div>
                <img className="imgg" src={Database} alt="" />
              </div> */}
      </div>
    </div>
  );
};

export default Sponsors;
