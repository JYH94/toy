package com.example.toy_board_server.repository;

import java.util.List;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.module.ForSearch;

public interface FishingRepository {
	List<FishingPoint> selectWhere(ForSearch module);
}
