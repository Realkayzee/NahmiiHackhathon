import { Fragment } from "react";
import "./nav.scss";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-items">
        {/* for top left nav items */}
        <div className="left-items">
          <ul>
            <Link className="link" to={`/`}> 
              <li>Markets</li>
            </Link>
            <Link className="link" to={`Patners/`}> 
            <li>Partners</li>
            </Link>
          </ul>
        </div>
        {/* for top right nav items */}
        <div className="right-items">
          <button>Learn</button>
          <button>Connect</button>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};
export default Nav;
