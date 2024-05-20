package com.example.toy_board_server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {

	private TestService testService;

	@GetMapping("/cors")
	public ResponseEntity<?> asd() {

		ResponseEntity<?> result = null;

		result = ResponseEntity.status(HttpStatus.OK).body(testService.qqqq());
		System.out.println("============================");

		return result;
	}
}
