import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import BlogManageDetails from './BlogManageDetails';


const BlogManage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [manageBlogs, setManageBlogs] = useState([])
    useEffect(() => {

        fetch('https://immense-sierra-08703.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setManageBlogs(data))

    }, [manageBlogs])
    return (
        <div style={{ backgroundColor: "#12161f", color: "white" }} className="pt-5 card-bg1 p-3">
            <AdminNavbar></AdminNavbar>
            <div className="container mt-5">
                <h1 className="text-center pt-5">HI <span className="text-danger">{loggedInUser.name}</span>...You Have Total {manageBlogs.length} Blogs ....!!!!!</h1>
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