import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UserContext } from '../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';


const AddBlogs = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            content: data.content,
            blogLink: data.blogLink,
            image: imageURL
        }

        const url = `https://immense-sierra-08703.herokuapp.com/addBlogs`
        console.log(serviceData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'New Blog Has Been Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '45989dd4589e7b6e62f67e349b536454');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ height: "980px", color: "white" }} className="pt-5 card-bg1">
            <AdminNavbar></AdminNavbar>
            <div className="container mt-5">
                <div className="text-center pt-5">
                    <h1>HI <span className="text-danger">{loggedInUser.name}</span>...Add Blog Details Here ....!!!!</h1>
                </div>
                <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 py-3">
                        <label for="title" className="form-label"><h4>Blog Title</h4></label>
                        <input style={{ backgroundColor: "gray" }} placeholder="Write Blog Title" name="title" ref={register} className="form-control text-light" />
                    </div>
                    <div className="col-md-6 py-3">
                        <label for="content" className="form-label"><h4>Blog Content</h4></label>
                        <input style={{ backgroundColor: "gray" }} placeholder="Write Blog Content" name="content" className="form-control text-light" ref={register} />
                    </div>
                    <div className="col-md-6 py-3">
                        <label for="blogLink" className="form-label"><h4>Blog Link</h4></label>
                        <input style={{ backgroundColor: "gray" }} placeholder="Write Blog Link" name="blogLink" className="form-control text-light" ref={register} />
                    </div>
                    <div className="col-md-6 py-3">
                        <label className="form-label"><h4>Insert Image</h4></label>
                        <input style={{ backgroundColor: "gray" }} placeholder="Write Your Name" className="form-control text-light" type="file" onChange={handleImageUpload} id="formFile" />
                    </div>
                    <div className="col-12 d-grid ">
                        <button className="mt-4 btn btn-secondary btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Blogs</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddBlogs;