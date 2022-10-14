import React from 'react'
import "./hero.scss";

export default function BondHeader() {
  return (
    <ul className='bondlist'>
        <li className="card-list-item">Bonds</li>
        <li className="card-list-item">Payout Asset</li>
        <li className="card-list-item">Discount</li>
        <li className="card-list-item">TBV</li>
        <li className="card-list-item"></li>
    </ul>
  )
}
