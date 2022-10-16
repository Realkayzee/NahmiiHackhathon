import "./hero.scss";


const Footer = () => {
    return(
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
);
};
export default Footer;