import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let display;
    if (loggedInUser) {
        display = <li className="nav-item text-danger fw-bolder pt-2">
            {loggedInUser.name}
        </li>
    }



    return (
        <nav class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <div className="px-5">
                    <a className="navbar-brand color  h1 text-danger" href="#home"><span className="h3">Retro Tech Diary</span></a>
                </div>
                <button id="nav-toggle-button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                    <ul class="navbar-nav px-5 ms-auto h3">
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