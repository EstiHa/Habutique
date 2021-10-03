import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import logo from '../pictures/Logo.png'
import './nav.css'



function Nav(props) {
const{generalNnumberOfcartList}=props;

    return (
        <ul className="links">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="firstnav nav-item">
                            <Link className="navbar-brand" to="/face"> פנים</Link>
                        </li>
                        {/* <div className="pipe"></div>‏ */}
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/eyes"> עיניים</Link>
                        </li>            
                        {/* <div className="pipe"></div>‏ */}
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/lips"> שפתיים</Link>
                        </li>
                        {/* <div className="pipe"></div>‏ */}
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/tips"> טיפים</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="/"><img src={logo} className="logoIcon" alt=""></img></Link>
                        </li>
                        <li  className="nav-item cartIcon">
                            <a className="nav-link" href="#">
                                <span id="badge-cart" className="badge badge-pill">{generalNnumberOfcartList}</span>
                                <span><Link className="fas fa-shopping-cart hey" placeholder={generalNnumberOfcartList} to="/cart"></Link></span>

                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            
        </ul>
    );
}

export default Nav;