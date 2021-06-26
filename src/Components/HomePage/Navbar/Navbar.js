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
        display = <li className={(isSticky || isCollapsed) ? "nav-item text-danger  pt-2" : "nav-item text-light  pt-2"}>
            {loggedInUser.name}
        </li>
    }

    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);
    useEffect(() => {
        fetch('https://immense-sierra-08703.herokuapp.com/isAdmin', {
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
                <div className=" px-5">
                    <a className="navbar-brand text-danger" href="#home"><span className="h3">Retro Tech Diary</span></a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)}
                    id="nav-toggle-button"
                    class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse px-5" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 h3">

                        {display}

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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;