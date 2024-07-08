package com.database.doctorsystem.controller;

public class EmailRequest {
    private String to;
    private String subject;
    private String text;

    // Constructors, getters, and setters
    // Ensure you have appropriate constructors, getters, and setters for the fields

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
