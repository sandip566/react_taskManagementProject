import React, { useState } from 'react';
import axios from 'axios';
import "./Name.css";
import { useNavigate } from "react-router-dom";

function Name() {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError('Please enter your full name');
      isValid = false;
    } else {
      setFullNameError('');
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        // Perform POST request
        const response = await axios.post('https://mzdj9zyo62.execute-api.ap-south-1.amazonaws.com/doc-upload/signed-url?fileName=splash.png&public=true&action=write', {
          fullName: fullName,
          image: image // Assuming image is base64 encoded, adjust if needed
        });
        
        // Handle response
        console.log('POST request successful', response.data);

        // Navigate to next page
        navigate('/primary');
      } catch (error) {
        // Handle error
        console.error('Error while making POST request', error);
      }
    }
  };

  return (
    <div className='mt-3'>
      <div className='baap'>
        <h4><b>Baap</b></h4>
      </div>

      <div className='set-profile'>
        <p className='profile'>Let's set up your profile</p>
        <p className='minute mb-3' style={{ fontSize: "1.2pc" }}>This will only take a minute.</p>
      </div>

      <div className='d-flex set-profile'>
        <div className='upload-img'>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            {image ? (
              <img
                className='img'
                src={image}
                alt="upload"
                style={{
                  height: "10pc",
                  maxWidth: '10pc',
                  borderRadius: '100%',
                  objectFit: 'cover',
                  border: '2px solid #ccc',
                }}
              />
            ) : (
              <div className='img'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
                </svg>
                <p>Upload an image</p>
              </div>
            )}
          </label>
          <input
            className='input'
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <div style={{ fontSize: "25px", marginLeft: "30px" }}>
          <p>  What's your full name?</p>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${fullNameError && 'is-invalid'}`}
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Enter your full name"
              style={{  }}
            />
            {fullNameError && <div style={{fontSize:"1.2pc"}} className="invalid-feedback">{fullNameError}</div>}
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-info pl-4 pr-4 set-profile" style={{textDecoration:'none', color:'white'}} onClick={handleSubmit}>
        Continue
      </button>

    </div>
  );
}

export default Name;
