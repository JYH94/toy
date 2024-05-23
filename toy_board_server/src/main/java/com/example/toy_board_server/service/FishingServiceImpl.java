package com.example.toy_board_server.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.repository.FishingRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FishingServiceImpl implements FishingService{

	private final FishingRepositoryJPA fishingRepository;
	
	@Override
	public List<FishingPoint> selectAll() {
		return fishingRepository.findAll();
	}
	
	@Transactional
	@Override
	public List<FishingPoint> save(FishingPoint entity) {
		fishingRepository.save(entity);
		List<FishingPoint> reCheck = fishingRepository.findAll();
		System.out.println(reCheck.size());
		return reCheck;
	}
	
	@Override
	public List<FishingPoint> selectWhereKeyword(String pointname) {
		return fishingRepository.findByPointNameContaining(pointname);
	}
	
}
