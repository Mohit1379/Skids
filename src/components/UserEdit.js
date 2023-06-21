import {useState,useEffect} from 'react'

export default function UserEdit({onEdit,user,modal}) {

  const [userDetail, setUserDetail]= useState(user);

  const [userError, setUserError]=useState(false);
  const [mailError, setMailError]=useState(false);
  const [phoneError, setPhoneError]=useState(false)
  
  const handleChange = (event) => {
    setUserDetail({
      ...userDetail,
      [event.target.name]: event.target.value,
    });
  };

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\d{10}$/;

  // Perform validation
  const isValidName = nameRegex.test(userDetail.userName);
  const isValidEmail = emailRegex.test(userDetail.email);
  const isValidPhoneNumber = phoneNumberRegex.test(userDetail.phoneNumber);
  
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    onEdit(user.id, userDetail);
    modal();
    console.log(userDetail);
    setUserError(false);
    setPhoneError(false);
    setMailError(false);
  }





  const handleUserFocus=()=>{
      if(userDetail.userName)
      setUserError(true);
  }
  const handleEmailFocus=()=>{
      if(userDetail.email)
      setMailError(true);
  }

  const handlePhoneFocus=()=>{
      if(userDetail.phoneNumber)
      setPhoneError(true);
  }

  useEffect(()=>{
      handleUserFocus();
      handleEmailFocus();
      handlePhoneFocus();
  },[handleChange])







  return (
    <div className='container my-2'>
    <div className="p-2 d-flex justify-content-center shadow">
      <h4>Fill User Details</h4>
    </div>
    <form className='my-5' onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            onFocus={handleUserFocus}
            className={`form-control ${
              !isValidName && userError ? 'is-invalid' : ''
            }`}
            id="uname"
            value={userDetail.userName}
            name='userName'
            required
          />
          <div id="validationServerUsernameFeedback" className="invalid-feedback">
            Name should not be empty
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleChange}
            onFocus={handleEmailFocus}
            id="email"
            className={`form-control ${
              !isValidEmail && mailError ? 'is-invalid' : ''
            }`}
            value={userDetail.email}
            name='email'
            aria-describedby="emailHelp"
            required
          />
          <div id="validationServerUsernameFeedback" className="invalid-feedback">
            Please enter a valid email
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            onChange={handleChange}
            className={`form-control ${
              !isValidPhoneNumber && phoneError ? 'is-invalid' : ''
            }`}
            value={userDetail.phoneNumber}
            name='phoneNumber'
            id="phoneNumber"
            required
          />
          <div id="validationServerUsernameFeedback" className="invalid-feedback">
            Please enter a 10-digit mobile number
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button disabled={!isValidName || !isValidEmail || !isValidPhoneNumber} 
        type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
      
  )
}
