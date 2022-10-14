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
                      <li className="bond-action">{items.action}</li>
                    </Link>
                  </ul>
                );
              })}
          </div>
        </div>

        <div className="bottom-section">
          <div className="exchange-div">
            <div className="text-section">
              <h4>Exchange your LP</h4>
              <p>
                Exchange available LP tokens for governance tokens at below
                market rate Bonds.
              </p>
            </div>
            <div className="img-section"></div>
          </div>

          <div className="linear-div">
            <div className="text-section">
              <h4>Linear Vesting</h4>
              <p>
                Once you receive a Bond, you are able to vest at any time within
                the vesting period
              </p>
            </div>
            <div className="img-section"></div>

            <div className="docs">
              <button className="docs-btn">Read the Docs</button>
            </div>
          </div>

          <div className="market-div">
            <div className="text-section">
              <h4>Below-market-rate discount</h4>
              <p>
                To receive a below market rate swap, find your desired Bond with
                a positive discount rate.
              </p>
            </div>
            <div className="img-section"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Hero;
