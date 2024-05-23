package com.example.toy_board_server.repository;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@Repository
public class FishingRepositoryImpl implements FishingRepository{
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;


}
