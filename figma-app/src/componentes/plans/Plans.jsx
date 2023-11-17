import React from 'react'
import planideas from '../../Data/PlanData'
import Icon2 from '../../media/Icon.png'
import Icon from '../../media/icontick.png'
import'./Plans.css'
const PriceBoard = () => {
    return (
<div>
<p className="plantxt">Choose Your Plan</p>
<p className="plantxt1">
  Whether you want to get organized, keep your personal life on track, or
  boost workplace productivity, Evernote has the right plan for you.
</p>
<div className="class1">

        <div className="price-list">
            {
                planideas.map((item, index) => {
                    return (
                        <div key={index} className={index === 1 ? "middle-price-board" : "price-board"}>
                            <div className="price-text-block">
                                <div className={index === 1 ? "price-text1 color-white" : "price-text1"}>{item.priceText1}</div>
                                <div className={index === 1 ? "price-text2 color-yellow" : "price-text2"}>{item.priceText2}</div>
                                <div className={index === 1 ? "price-text3 color-white" : "price-text3"}>{item.priceText3}</div>
                            </div>  
                            <div className="bullet-point">
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p1}</div>
                                </div>
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p2}</div>
                                </div>
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p3}</div>
                                </div>
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p4}</div>
                                </div>
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p5}</div>
                                </div>
                                <div className="point">
                                    <img src={index === 1 ? Icon2 : Icon} alt="tick" /><div className={index === 1 ? "point-text color-white" : "point-text"}>{item.p6}</div>
                                </div>
                            </div>
                            <button className={index === 1 ? "middle-price-button" : "price-button"}>Get Started</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </div>
    )
}

export default PriceBoard





