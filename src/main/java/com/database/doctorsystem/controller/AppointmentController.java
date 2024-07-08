package com.database.doctorsystem.controller;

import com.database.doctorsystem.model.Appointment;
import com.database.doctorsystem.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@CrossOrigin
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/add")
    public String add(@RequestBody Appointment appointment){
        appointmentService.saveAppointment(appointment);
        return "New appointment is added";
    }
    @GetMapping("/getAll")
    public List<Appointment> getAllAppointments(){
        return appointmentService.getAllAppointments();
    }
}
