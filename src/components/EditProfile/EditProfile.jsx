// components/EditProfile/EditProfile.jsx

import React, { useState } from 'react';

export default function EditProfile({ data, onSave, onClose }) {
  const [profile, setProfile] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profile);
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
          value={profile.name}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={profile.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <label htmlFor="city">Сity</label>
        <input
          type="city"
          id="ctyi"
          name="city"
          value={profile.city}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="street"
          id="street"
          name="street"
          value={profile.street}
          onChange={handleChange}
        />
        <label htmlFor="suite">Suite</label>
        <input
          type="suite"
          id="suite"
          name="suite"
          value={profile.suite}
          onChange={handleChange}
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          type="zipcode"
          id="zipcode"
          name="zipcode"
          value={profile.zipcode}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
