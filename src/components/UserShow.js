import React, { useEffect, useState,useRef } from 'react';
import UserEdit from './UserEdit';

export default function UserShow({ user , onDelete, onEdit}) {

  const submitButtonRef = useRef(null);


  const handleDeleteClick=()=>{
    onDelete(user.id);
  }
 
  const handleSubmitClick=()=>{
    setModalClose(true);
  }

  const modal = ()=>{   
      submitButtonRef.current.click();
  }


  const content = <UserEdit onEdit={onEdit} user={user} modal={modal}/>


  return (
    <div className="card mx-3 my-3" style={{ minWidth: "300px" }}>
      <h5 className="card-title p-3 just">User Details</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {user.userName}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Mobile Number: {user.phoneNumber}</li>
      </ul>
      <div className="d-flex justify-content-between p-2">


      
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Edit
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" ref={submitButtonRef} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {content}
      </div>
    </div>
  </div>
</div>
      
      
      
        <button className="btn btn-primary" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
