import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Scala Bakery </h1>
      </Link>

        <nav>
            <ul>


                <li>
                  <NavLink to="/categoria/Laminados">
                    Laminados
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/Minicake">
                    Mini Cakes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/Tortas">
                    Tortas
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar