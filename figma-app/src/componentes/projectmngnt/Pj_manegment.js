import React from "react";
import "../../media/image-containerclr.png";
import "./Pj_manegment.css";

const Pj_manegment = (props) => {
  return (
    <>
      <div className="top">
        {props.props.map((item, index) => {
          let classNames = `${(index % 2 === 0) ? "intro1" : "intro2"}`;

          // if (index % 2 === 0 && " intro3") {
          //   classNames += " intro3";
          // }
          return (
            <div key={index} className={classNames}>
              <div className="header1">
                <p className="txt11">{item.heading}</p>
                <p className="txt12">{item.title}</p>
                <button className="bttn">Get Start</button>
              </div>
              <div>
                <img className="imgg" src={item.Img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pj_manegment;
