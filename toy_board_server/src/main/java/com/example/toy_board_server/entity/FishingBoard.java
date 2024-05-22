package com.example.toy_board_server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;

@Entity
@Table(name = "fishing_board")
@AllArgsConstructor
@Data
@Setter
public class FishingBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;

    private String writer;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private Integer root;

    private Integer depth;
    
//    ================================
    @Transient
    private MultipartFile image;
}
