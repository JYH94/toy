package com.example.toy_board_server.service;

import java.util.List;

import com.example.toy_board_server.entity.FishingPoint;

public interface FishingService {
	
	List<FishingPoint> selectAll();
	List<FishingPoint> save(FishingPoint entity);
}
