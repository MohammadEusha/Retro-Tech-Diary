import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const BlogManageDetails = (props) => {
    const { _id, title, content, image, blogLink } = props.blog
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Service Has Been Deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <ul className="list-group col-md-3 focus mt-3 m-1">
            <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Service Name : {title} </span></li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Service Price : {content} $</span> </li>
            {/* <li className="list-group-item "><span className="fw-bolder text-dark">Service Description : {description}</span> </li> */}
            <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Blogs</span></li>

        </ul>
    );
};

export default BlogManageDetails;