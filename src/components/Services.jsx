import React from "react";
import head from "../assets/Images/vrHead.png";
import computer from "../assets/Images/computer.png";
import shopping from "../assets/Images/shopping.png";
function Services() {
  return (
    <div>
      <div className="service__container">
        <div className="service__one">
          <div className="service__one-1">
            <h1 className="service__one-1-title"> Delta Room Services</h1>
            <p className="service__one-1-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et
            </p>
          </div>
          ​
          <div className="service__one-2">
            <img src={head} alt="" />'
            <h3 className="service__one-h3-title">
              Let customers experience your product in their homes
            </h3>
            <p className="service__one-2-text">
              Customers can access VR by Delta Room on any major VR headset.
            </p>
          </div>
        </div>
        <div className="service__two">
          <div className="service__two-1">
            <img src={computer} alt="" />'
            <h3 className="service__one-h3-title">
              Let customers experience your product in their homes
            </h3>
            <p className="service__two-1-text">
              Customers can access VR by Delta Room on any major VR headset.
            </p>
          </div>
          <div className="service__two-2">
            <img src={shopping} alt="" />'
            <h3 className="service__one-h3-title">
              Let customers experience your product in their homes
            </h3>
            <p className="service__two-2-text">
              Customers can access VR by Delta Room on any major VR headset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
