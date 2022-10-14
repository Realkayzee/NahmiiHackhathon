import { Fragment } from "react";
import data from "../../utils/data";
import Nahmii from "../../images/nahmii-logo.svg";
import { Outlet, Link } from "react-router-dom";

import "./hero.scss";
<<<<<<< HEAD

=======
import BondHeader from "./BondHeader";
>>>>>>> 4694e0bb5878dc55463ab8b06923bfdb5a57f09a
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
          <BondHeader />
          <div className="card-details">
            {data &&
              data.map((items, index) => {
                return (
                  <ul key={index}>
                    <li className="flex_icons"><img className="icons" src={`${items.bondImage}`}/>- ${items.bondName}`</li>
                    <li className="flex_icons"><img className="icons" src={`${items.payoutAssetImage}`}/> <span>{` - ${items.payoutAssetTokenPrice}`}</span></li>
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
