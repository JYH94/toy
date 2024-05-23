package com.example.toy_board_server.service;

import java.util.List;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.module.ForSearch;

public interface FishingService {
	
	List<FishingPoint> selectAll();
	List<FishingPoint> save(FishingPoint entity);
	List<FishingPoint> selectWhereKeyword(String pointname);
	List<FishingPoint> selectWhere(ForSearch module);
}
