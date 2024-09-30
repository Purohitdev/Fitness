// import React, { useState } from 'react';


// function Contact() {

//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     email: '',
//     address: '',
//     subscription: 'Basic'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // You can handle the form submission logic here
//   };

//   return (
//     <div className='contact'>
//       <div className="c1">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.295444516047!2d72.8251043733533!3d19.23177329830346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727702712159!5m2!1sen!2sin"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//       <div className="c2">

//       <form onSubmit={handleSubmit}>
//         <div> 
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="address">Address:</label>
//           <textarea
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="subscription">Choose Subscription:</label>
//           <select
//             id="subscription"
//             name="subscription"
//             value={formData.subscription}
//             onChange={handleChange}
//           >
//             <option value="Basic">Basic</option>
//             <option value="Elite">Elite</option>
//             <option value="Prime">Prime</option>
//           </select>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
       
//       </div>
//     </div>
//   )
// }

// export default Contact;


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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.295444516047!2d72.8251043733533!3d19.23177329830346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727702712159!5m2!1sen!2sin"
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
              <option value="Elite">Elite</option>
              <option value="Prime">Prime</option>
            </select>
          </div>

          <button type="submit" className="submit-btn button" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

