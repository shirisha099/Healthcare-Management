package com.database.doctorsystem.controller;

import org.springframework.web.bind.annotation.*;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@RestController
@RequestMapping("/email")
@CrossOrigin
public class EmailController {

    // Example structure, ensure EmailRequest class is properly defined
    // Assuming EmailRequest class is defined correctly elsewhere

    @PostMapping("/send")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        final String username = "vittalskatwe@gmail.com"; // Replace with your email
        final String password = "8431465059vV@"; // Replace with your email password

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com"); // Replace with your SMTP server
        props.put("mail.smtp.port", "587"); // Replace with your SMTP port

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailRequest.getTo()));
            message.setSubject(emailRequest.getSubject());
            message.setText(emailRequest.getText());

            Transport.send(message);

            return "Email sent successfully.";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Failed to send email.";
        }
    }
}
