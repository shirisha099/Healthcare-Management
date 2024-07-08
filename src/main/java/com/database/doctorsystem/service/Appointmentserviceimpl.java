package com.database.doctorsystem.service;

import com.database.doctorsystem.model.Appointment;
import com.database.doctorsystem.model.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Appointmentserviceimpl implements AppointmentService{
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Override
    public Appointment saveAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}
