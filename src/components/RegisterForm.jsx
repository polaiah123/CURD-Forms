// src/RegisterForm.js
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const RegisterForm = () => {
  const { index } = useParams();
  const history = createBrowserHistory();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const storedData = localStorage.getItem('registeredUsers');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    if (index !== undefined) {
      const userToEdit = registeredUsers[index];
      if (userToEdit) {
        setFormData(userToEdit);
      } else {
        // Redirect to home if the index is invalid
        history.push('/');
      }
    }
  }, [index, registeredUsers, history]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.location) {
      alert('Please fill in all fields');
      return;
    }

    if (index !== undefined) {
      const updatedUsers = [...registeredUsers];
      updatedUsers[index] = formData;
      setRegisteredUsers(updatedUsers);
      history.push('/');
    } else {
      setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
      setFormData({ username: '', email: '', location: '' });
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px', maxWidth: '300px', display: 'inline-block' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
           Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {index !== undefined ? 'Update' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
