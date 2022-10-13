import React from 'react'
import data from "../utils/checks";
import Data from '../utils/terms';
import { useNavigate, useParams } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Bond() {
    const navigate = useNavigate()
    const id = useParams()
    const num = id.id
    let BondName;
    let BondPrice;
    let MarketPrice;
    for(let i=0; i < Data.length; i++){
        if (i === num) {
            BondName = Data[i].bondname;
            BondPrice = Data[i].bondprice;
            MarketPrice = Data[i].marketprice;
            break;
        }
    }

    console.log(BondName, BondPrice,MarketPrice);
    
  return (
    <Zoom delay={-400}>
        <div className='bond'>
            <div>
                <button
                className='close'
                onClick={()=> navigate(-1)}
                >
                </button>
            <h2 className='bond__name'>{BondName}</h2>
        </div>
                        <div className='bond__details'>
                        <div className='bond__detail'> 
                            <h3 className='bond__details bond__details--market'>Market Price</h3>  
                            <p bond__details bond__details--marketprice>{BondPrice}</p>
                        </div>
                        <div className='bond__detail'> 
                            <h3 className='bond__details bond__details--market'>Bond Price</h3>  
                            <p bond__details bond__details--marketprice>{MarketPrice}</p>
                        </div>
                    </div>
                    <div className='bonds'>
                    <div className='bonds__give'>
                        <div className='bonds__give bonds__give--image'>
                            {/* images are suppose to be here */}
                            <p className='bonds__give bonds__give--images'>#</p>
                            <p className='bonds__give bonds__give--images'>#</p>
                        </div>
                        <div className='bonds__give bonds__give--name'>
                            <p className='bonds__give bonds__give--title'>you give</p>
                        </div>    
                    </div>
                    <div className='bonds__give'>
                        <div className='bonds__give bonds__give--time'>
                            {/* images are suppose to be here */}
                            <p className='bonds__give bonds__give--times'>#</p>
                        </div>
                        <div className='bonds__give bonds__give--name'>
                            <p className='bonds__give bonds__give--title'>vested for 7 days</p>
                        </div>  
                    </div>
                    <div className='bonds__give'>
                        <div className='bonds__give bonds__give--get'>
                            {/* images are suppose to be here */}
                            <p className='bonds__give bonds__give--getimage'>#</p>
                            <p className='bonds__give bonds__give--gets'>5.8%</p>
                        </div>
                        <div className='bonds__give bonds__give--name'>
                            <p className='bonds__give bonds__give--title'>you get</p>
                        </div> 
                    </div>
                </div>
                <div className="bond__bigbutton">
                    <p className='bond__bigbutton bond__bigbutton--text' >name</p>
                </div>
                <Slide right delay={-300}>
                    <div className='checks'>
                        {data &&
                        data.map((items, index) => {
                        return (
                            <div key={index} className="checks__bond">
                                <p className="checks_bonds">
                                    {items.bondname}
                                </p>
                                <p className="checks_bonds">
                                    {items.bondbalance}
                                </p>
                            </div>
                        );
                        })}
                    </div>
                </Slide>
            </div>
    </Zoom>
  )
}
