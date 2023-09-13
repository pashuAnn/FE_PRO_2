import React, { useState } from 'react';
import axios from 'axios';

export default function EditProfile({ userData }) {
  const [formData, setFormData] = useState(userData)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userData}`,
        formData
      );
      if (response.status === 200) {
        console.log('User data update successfully')
      } else {
        console.log('Error updating user data. Please try again.')
      }
    } catch (error) {
      console.error('Error updating user information:', error)
      ('An error occurred while updating user data.')
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="city">Сity</label>
        <input
          type="city"
          id="ctyi"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="street"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <label htmlFor="suite">Suite</label>
        <input
          type="suite"
          id="suite"
          name="suite"
          value={formData.suite}
          onChange={handleInputChange}
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          type="zipcode"
          id="zipcode"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}
