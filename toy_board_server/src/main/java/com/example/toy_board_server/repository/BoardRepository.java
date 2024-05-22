package com.example.toy_board_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.toy_board_server.entity.FishingBoard;

public interface BoardRepository extends JpaRepository<FishingBoard, Integer>{

}
