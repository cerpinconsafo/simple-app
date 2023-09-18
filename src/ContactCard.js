import React, { useState } from 'react';

function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    favoriteColor: '',
    hobbies: '',
    sportsTeam1: '', // New field
    sportsTeam2: '', // New field
    relationship: 'Relative', // New field with default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can finalize what to do with the form data here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        {/* ... Previous form fields */}
        
        {/* New fields */}
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sportsTeam1">Sports Team 1:</label>
          <input
            type="text"
            id="sportsTeam1"
            name="sportsTeam1"
            value={formData.sportsTeam1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sportsTeam2">Sports Team 2:</label>
          <input
            type="text"
            id="sportsTeam2"
            name="sportsTeam2"
            value={formData.sportsTeam2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="relationship">Relationship:</label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
          >
            <option value="Relative">Relative</option>
            <option value="Friend">Friend</option>
            <option value="Spouse">Spouse</option>
            <option value="Partner">Partner</option>
            <option value="Children">Children</option>
          </select>
        </div>
        
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ContactCard;
