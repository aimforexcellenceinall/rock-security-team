import React, { useState } from 'react';

const Register = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    // other registration fields
  });
  const [photo, setPhoto] = useState(null);

  const handleInputChange = (e) => {
    setNewUserInfo({ ...newUserInfo, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Registration logic here
  };

  return (
    <form onSubmit={handleRegistration}>
      {/* Registration fields */}
      <input type="text" name="name" onChange={handleInputChange} placeholder="Full Name" />
      <input type="email" name="email" onChange={handleInputChange} placeholder="Email" />
      <input type="password" name="password" onChange={handleInputChange} placeholder="Password" />
      <input type="file" onChange={handlePhotoChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;