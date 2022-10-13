import { Fragment } from "react";
// import img from "../../images/img";
import data from "../../utils/data";
import Nahmii from "../../images/nahmii-logo.svg";
import { Outlet, Link } from "react-router-dom";

import "./hero.scss";
const Hero = () => {
  return (
    <Fragment>
      <div className="body">
        <div className="head-section">
          <div className="nahmii-logo">
            <img src={Nahmii} alt="" />
          </div>
          <div className="title">
            Securing liquidity for protocols across DeFi
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <ul>
              <li className="card-list-item">Bonds</li>
              <li className="card-list-item">Payout Asset</li>
              <li className="card-list-item">Discount</li>
              <li className="card-list-item">TBV</li>
              <li className="card-list-item"></li>
            </ul>
            {data &&
              data.map((items, index) => {
                return (
                  <ul key={index}>
                    <li>{`${items.bondImage} - ${items.bondName}`}</li>
                    <li>{`${items.payoutAssetImage} - ${items.payoutAssetTokenPrice}`}</li>
                    <li>{items.discount}</li>
                    <li>{items.tbv}</li>
                    <Link to={`bond/${index}`} className="link">
                      <li className="bond-action">  
                        {items.action}
                      </li>
                    </Link>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Hero;
