import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import './Navbar.css';
import logo from "../../assets/img/logo.png";
import { Button } from '../Button';

class Navbar extends Component {
        state = { clicked: false }

        handleClick = () => {
            this.setState({ clicked: !this.state.clicked })
        }

    render(){
        return(
            <nav className="NavbarItems">
                <img className="logo" src={logo} alt="Logo" />
                <h1 className="navbar-Logo">Paham Bisnis</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                 <a href='/login'><Button>Login</Button> </a>
            </nav>
        );
    }
}

export default Navbar