package com.example.backeco.model;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.*;

public class Publicacao {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String User;

    private String Comment;
    private LocalDateTime creationDate;

    public Long getId(){
        return Id;
    }

    public String getUser() {
        return User;
    }

    public void setUser(String user) {
        User = user;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }


}


