package com.example.toy_board_server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.toy_board_server.entity.FishingPoint;


@Repository
public interface FishingRepositoryJPA extends JpaRepository<FishingPoint, Integer>{
	List<FishingPoint> findByPointName(String pointname);
	List<FishingPoint> findByPointNameContaining(String pointname);
}
