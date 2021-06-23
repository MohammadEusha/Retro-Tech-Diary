import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import BlogManageDetails from './BlogManageDetails';


const BlogManage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [manageBlogs, setManageBlogs] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setManageBlogs(data))

    }, [manageBlogs])
    return (
        <div style={{ backgroundColor: "#12161f", color: "white", height: "980px" }} className="pt-5">
            <AdminNavbar></AdminNavbar>
            <div className="container mt-5">
                <h1 className="text-center pt-5">HI <span className="text-danger">{loggedInUser.name}</span>...You Have Total {manageBlogs.length} Service ....!!!!!</h1>
                <div className="row d-flex justify-content-center">
                    {
                        manageBlogs.map(blog => <BlogManageDetails blog={blog}></BlogManageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogManage;