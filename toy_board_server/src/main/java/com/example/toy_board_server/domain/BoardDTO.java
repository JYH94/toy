package com.example.toy_board_server.domain;


import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@AllArgsConstructor
@ToString
public class BoardDTO {

	
    private Integer seq;

    private String writer;

    private String title;

    private String content;

    private Integer root;

    private Integer depth;
    
    private MultipartFile image;
}
