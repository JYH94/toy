package com.example.toy_board_server.controller;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@Service
public class TestServiceImpl implements TestService{

	private TestRepository testRepository;
	
	@Override
	public List<Test> qqqq() {
		return testRepository.findAll();
	}
}
