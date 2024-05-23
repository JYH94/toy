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
//	public ResponseEntity<?> selectWhereKeyword(ForSearch module) {
//		ResponseEntity<?> result = null;
//		List<FishingPoint> list = fishingService.selectWhereKeyword(module.getKeyword());
//		result = ResponseEntity.status(HttpStatus.OK).body(list);
//		return result;
//	}
//	
	
	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectWhere(ForSearch module) {
		ResponseEntity<?> result = null;
		System.out.println(fishingService.selectWhere(module));
		result = ResponseEntity.status(HttpStatus.OK).body(fishingService.selectWhere(module));
		
		return result;
	}
}
