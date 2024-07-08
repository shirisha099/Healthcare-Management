import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './inperson.css';

const Inperson = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    patientType: '', 
    appointmentType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      const selectedDate = new Date(value);
      const today = new Date();
      // Check if the selected date is today or in the future
      if (selectedDate < today) {
        alert('Please select today or a future date.');
        return; // Do not update state if date is invalid
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/appointment/add', formData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log(response.data);
        alert('Form Submitted Successfully!');
      })
      .catch(error => {
        alert('There was an error submitting the form!');
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="inperson-container">
      <Helmet>
        <title>Medica template</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="inperson-modal">
          W
      </div>
      <section className="inperson-hero">
        <header className="inperson-header7">
          <header data-thq="thq-navbar" className="inperson-navbar">
            <div className="inperson-left">
              <img
                alt="image"
                src="/Branding/logo-1500h.png"
                className="inperson-logo"
              />
            </div>
            <div data-thq="thq-navbar-btn-group" className="inperson-right">
              <a href="#book" className="inperson-book button button-main">
                <Link to="/login">
                <span className="inperson-text07">Doctor Login</span></Link>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="inperson-burger-menu">
              <svg viewBox="0 0 1024 1024" className="inperson-icon1">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="inperson-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="inperson-nav"
              >
                <div className="inperson-container1">
                  <img
                    alt="image"
                    src="/Branding/logo-1500h.png"
                    className="inperson-image08"
                  />
                  <div
                    data-thq="thq-close-menu"
                    className="inperson-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="inperson-icon3">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </header>
      </section>
      <section id="book" className="inperson-book2">
        <div className="inperson-heading7">
          <h2 className="inperson-text13">
            <span className="inperson-text14">Book an</span>
            <span> appointment</span>
          </h2>
        </div>
        <div className="inperson-form">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  pattern="^[a-zA-Z\s]+$" 
                  title="Name should only contain letters and spaces." 
                  required 
                />
              </label>
              <br />
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                  title="Please enter a valid email address." 
                  required 
                />
              </label>
              <br />
              <label>
                Phone:
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  pattern="^\d{10}$" 
                  title="Phone number must be exactly 10 digits." 
                  required 
                />
              </label>
              <br />
              <label>
                Date:
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <br />
              <label>
                Time:
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a Time Slot</option>
                  <option value="9am - 12pm">9am - 12pm</option>
                  <option value="12pm - 3pm">12pm - 3pm</option>
                  <option value="3pm - 6pm">3pm - 6pm</option>
                </select>
              </label>
              <br />
              <label>
                Service:
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Fever">Fever</option>
                  <option value="Service 2">Service 2</option>
                  <option value="Service 3">Service 3</option>
                </select>
              </label>
              <br />
              <label>
                Patient Type:
                <select 
                  name="patientType" 
                  value={formData.patientType} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a type</option>
                  <option value="regular">Regular</option>
                  <option value="firstTime">First Time</option>
                </select>
              </label>
              <br />
              <label className='appointment-type'>
                Appointment Type:
                <select 
                  name="appointmentType" 
                  value={formData.appointmentType} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a type</option>
                  <option value="inperson">In-Person</option>
                  <option value="virtual">Virtual</option>
                </select>
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inperson;
