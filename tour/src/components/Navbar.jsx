import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navItems">
                <h1 className="navLogo">Trippy</h1>
             
                <ul className="navMenu">
                    <li>
                        <Link to='/' ><i className="fa-solid fa-house-user" ></i>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'><i className="fa-solid fa-circle-info" ></i>About</Link>
                    </li>
                    <li>
                        <Link to='/service'><i className="fa-solid fa-briefcase"  ></i>Service</Link>
                    </li>
                    <li>
                        <Link to='/contact'  ><i className="fa-solid fa-address-book"  ></i>Contact</Link>
                    </li>

                    <button>Sign Up</button>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar