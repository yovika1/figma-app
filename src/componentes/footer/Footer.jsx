import React from "react";

import Fotr1 from "../../Data/Footer";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
            marginLeft: 67,
          }}
        >
          <div className="boldhad">Whitepace</div>
          <div className="small11">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </div>
        </div>

        <div className="flex">
          {Fotr1.map((item, index) => {
            return (
                <div key={index} className="upperhad">
                  <div className="had">{item.heading}</div>
                  <div className="title3">
                    <div className="had1">{item.title}</div>
                    <div className="had2">{item.titletxt}</div>
                    <div className="had2">{item.titletxt1}</div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
