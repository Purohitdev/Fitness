import React, { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    subscription: 'Basic'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can handle the form submission logic here
  };

  return (
    <div className='contact-container'>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.157519109042!2d72.97801757555684!3d19.18329764708361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91b9ca28543%3A0xdcbbe949c3eb5f96!2sSahyog%20College%20of%20IT%20and%20Management!5e0!3m2!1sen!2sin!4v1696212693890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Dev'
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder='19'
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='devanshpurohit1@gmail.com'
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder='Raghoba Shankar road, Phul Market, Near Thane Railway Station, Thane (W)-400601'
              required
            />
          </div>

          <div className="form-group class">
            <label htmlFor="subscription">Choose Subscription</label>
            <select
              id="subscription"
              name="subscription"
              value={formData.subscription}
              onChange={handleChange}
      
            >
              <option value="Basic">Basic</option>
              <option value="Prime">Prime</option>
              <option value="Elite">Elite</option>
            </select>
          </div>

          <button type="submit" className="submit-btn button" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

