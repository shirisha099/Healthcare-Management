import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './doctordet.css';

const DoctorDetails = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/appointment/getAll');
        const fetchedAppointments = response.data;
        
        // Get the accepted appointments from local storage
        const storedAcceptedAppointments = JSON.parse(localStorage.getItem('acceptedAppointments')) || [];
        
        // Map the fetched appointments to include the accepted state
        const updatedAppointments = fetchedAppointments.map(appointment => {
          const isAccepted = storedAcceptedAppointments.includes(appointment.id);
          return { ...appointment, accepted: isAccepted };
        });

        setAppointments(updatedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleAcceptAppointment = async (id, email) => {
    const updatedAppointments = appointments.map(appointment =>
      appointment.id === id ? { ...appointment, accepted: true } : appointment
    );
    setAppointments(updatedAppointments);

    // Update the accepted appointments in local storage
    const acceptedAppointments = updatedAppointments
      .filter(appointment => appointment.accepted)
      .map(appointment => appointment.id);
    localStorage.setItem('acceptedAppointments', JSON.stringify(acceptedAppointments));

    // Send email using your Java backend endpoint
    try {
      const response = await axios.post('http://localhost:8080/email/send', {
        to: email,
        subject: 'Appointment Booked Successfully',
        text: 'Your appointment has been successfully booked.'
        // Additional email body or HTML content if needed
      });
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="doctor-details-container">
      <Helmet>
        <title>Doctor Details</title>
        <meta property="og:title" content="Doctor Details" />
      </Helmet>
      <header className="doctor-details-navbar">
        <div className="navbar-content">
          <img
            alt="image"
            src="/Branding/logo-1500h.png"
            className="home-image06"
          />
        </div>
      </header>
      <section className="body-container">
        <div className="table-details-container">
          <h2>Doctor Appointments</h2>
          <table className="doctor-details-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Patient Type</th>
                <th>Appointment Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.patientType}</td>
                  <td>{appointment.appointmentType}</td>
                  <td>
                    {appointment.accepted ? (
                      <span onClick={() => handleAcceptAppointment(appointment.id, appointment.email)}>Accepted</span>
                    ) : (
                      <button onClick={() => handleAcceptAppointment(appointment.id, appointment.email)}>
                        Accept?
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;
