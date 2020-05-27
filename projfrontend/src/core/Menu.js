import React from "react";
import {Link, withRouter} from "react-router-dom";

const currentTab = (history, path) => {
    if(history.location.pathname ===path) {
        return {color: "#ffffff"}
    } else {
        return {color: "#ff5200"}
    }
        
}


const Menu = ({history}) => (
    <div>
        <ui className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "cart")} className="nav-link" to="cart">
                    Cart
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dasboard">
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/A.dashboard")} className="nav-link" to="/A.dashboard">
                    A.Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/Signup")} className="nav-link" to="/Signup">
                    Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/Signin")} className="nav-link" to="/Signin">
                    Signin
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/Signout")} className="nav-link" to="/Signout">
                    Signout
                </Link>
            </li>
        </ui>
    </div>
)





export default withRouter (Menu);