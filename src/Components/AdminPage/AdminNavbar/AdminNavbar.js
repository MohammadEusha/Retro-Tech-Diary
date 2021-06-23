import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item text-light pt-2">
            {loggedInUser.name}
        </li>
    }



    return (
        <nav class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <div className="col-md-6">
                    <a className="navbar-brand color ms-3 h1" href="#home">Grocery Store</a>
                </div>
                <button id="nav-toggle-button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                    <ul class="navbar-nav ms-auto h5">
                        {display}
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/addBlogs">Add Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/manageBlogs">Manage Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/addAdmins">Add Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default AdminNavbar;