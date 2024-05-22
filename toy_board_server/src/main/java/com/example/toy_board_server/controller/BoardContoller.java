package com.example.toy_board_server.controller;


import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.toy_board_server.domain.BoardDTO;
import com.example.toy_board_server.entity.FishingBoard;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/board")
public class BoardContoller {

	@PostMapping(value="/check")
	public void test(FishingBoard entity) throws IOException {
		System.out.println(entity);
	}
}
