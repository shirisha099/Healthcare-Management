package com.database.doctorsystem.service;

import com.database.doctorsystem.model.Appointment;

import java.util.List;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);
    public List<Appointment> getAllAppointments();
}
