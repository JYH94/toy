package com.example.toy_board_server.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.module.ForSearch;
import com.example.toy_board_server.service.FishingService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/fishing")
@AllArgsConstructor
public class FishingController {

	private FishingService fishingService;

	@PostMapping("/save")
	public ResponseEntity<?> save(@RequestBody FishingPoint entity) {
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(fishingService.save(entity));
		return result;
	}

	@GetMapping("/selectall")
	public ResponseEntity<?> selectAll() {
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(fishingService.selectAll());
		return result;
	}

//	@GetMapping("/selectwhere")
//	public ResponseEntity<?> selectWhereKeyword(@RequestParam String pointname) {
//		ResponseEntity<?> result = null;
//		List<FishingPoint> list = fishingService.selectWhereKeyword(pointname);
//		result = ResponseEntity.status(HttpStatus.OK).body(fishingService.selectWhereKeyword(pointname));
//		return result;
//	}
	
	
	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectWhere(ForSearch module) {
		
		System.out.println(module);
		return null;
	}
}
