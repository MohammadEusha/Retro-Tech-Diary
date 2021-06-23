import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item text-light pt-2">
            {loggedInUser.name}
        </li>
    }

    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])






    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light  text-dark"}>
            <div class="container-fluid">
                <div className="col-md-6">
                    {/* <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" /> */}
                    <a className="navbar-brand  h1 text-light" href="#home">Retro Tech Diary</a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)}
                    id="nav-toggle-button"
                    class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 h5">

                        <li class="nav-item">
                            {display}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#contact">Contact</a>
                        </li>
                        {isAdmin &&
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link text-light" to="/addBlogs">Admin</Link>
                            </li>
                        }
                        {/* <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/checkOut/:name">CheckOut</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/orders">Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/login">LogIn</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;