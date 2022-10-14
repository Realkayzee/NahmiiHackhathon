import React from "react";
import data from "../utils/checks";
import Data from "../utils/terms";
import { useNavigate, useParams } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Bond() {
  const navigate = useNavigate();
  const id = useParams();
  const num = id.id;
  let BondName;
  let BondPrice;
  let MarketPrice;
  for (let i = 0; i < Data.length; i++) {
    if (i === num) {
      BondName = Data[i].bondname;
      BondPrice = Data[i].bondprice;
      MarketPrice = Data[i].marketprice;
      break;
    }
  }

  console.log(BondName, BondPrice, MarketPrice);

  return (
    <div className="body">
      <Zoom delay={-500}>
        <div className="bond">
          <div>
            {/* IoIosArrowRoundBack */}
            <button className="close" onClick={() => navigate(-1)}>
              {" "}
              <IoIosArrowRoundBack />{" "}
            </button>
            <h2 className="bond__name">{BondName}</h2>
          </div>
          <div className="bond__details">
            <div className="bond__detail">
              <h3 className="bond_details bond_details--market">
                Market Price
              </h3>
              <p bond_details bond_details--marketprice>
                {BondPrice}
              </p>
            </div>
            <div className="bond__detail">
              <h3 className="bond_details bond_details--market">Bond Price</h3>
              <p bond_details bond_details--marketprice>
                {MarketPrice}
              </p>
            </div>
          </div>
          <div className="bonds">
            <div className="bonds__give">
              <div className="bonds_give bonds_give--image">
                {/* images are suppose to be here */}
                <img className="icons" src="../images/dai.png" alt="" />
              </div>
              <div className="bonds_give bonds_give--name">
                <p className="bonds_give bonds_give--title">you give</p>
              </div>
            </div>
            <div className="bonds__give">
              <div className="bonds_give bonds_give--time">
                {/* images are suppose to be here */}
                <p className="bonds_give bonds_give--times">#</p>
              </div>
              <div className="bonds_give bonds_give--name">
                <p className="bonds_give bonds_give--title">
                  vested for 7 days
                </p>
              </div>
            </div>
            <div className="bonds__give">
              <div className="bonds_give bonds_give--get">
                {/* images are suppose to be here */}
                <p className="bonds_give bonds_give--getimage">#</p>
                <p className="bonds_give bonds_give--gets">5.8%</p>
              </div>
              <div className="bonds_give bonds_give--name">
                <p className="bonds_give bonds_give--title">you get</p>
              </div>
            </div>
          </div>
          <div className="bond__bigbutton">
            <p className="bond_bigbutton bond_bigbutton--text">name</p>
          </div>
          <Slide right delay={-500}>
            <div className="checks">
              {data &&
                data.map((items, index) => {
                  return (
                    <div key={index} className="checks__bond">
                      <p className="checks_bonds">{items.bondname}</p>
                      <p className="checks_bonds">{items.bondbalance}</p>
                    </div>
                  );
                })}
            </div>
          </Slide>

          <div className="bond-form">
            <form>
              <input type="number" placeholder="enter token amount" />
              <button>deposit</button>
            </form>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
