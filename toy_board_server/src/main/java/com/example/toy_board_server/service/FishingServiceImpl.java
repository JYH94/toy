package com.example.toy_board_server.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.module.ForSearch;
import com.example.toy_board_server.repository.FishingRepository;
import com.example.toy_board_server.repository.FishingRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class FishingServiceImpl implements FishingService{

	private final FishingRepositoryJPA fishingRepositoryJPA;
	private final FishingRepository fishingRepository;
	
	@Override
	public List<FishingPoint> selectAll() {
		return fishingRepositoryJPA.findAll();
	}
	
	@Override
	public List<FishingPoint> save(FishingPoint entity) {
		fishingRepositoryJPA.save(entity);
		List<FishingPoint> reCheck = fishingRepositoryJPA.findAll();
		return reCheck;
	}
	
	@Override
	public List<FishingPoint> selectWhereKeyword(String pointname) {
		return fishingRepositoryJPA.findByPointNameContaining(pointname);
	}
	
	@Override
	public List<FishingPoint> selectWhere(ForSearch module) {
		return fishingRepository.selectWhere(module);
	}
	
}
