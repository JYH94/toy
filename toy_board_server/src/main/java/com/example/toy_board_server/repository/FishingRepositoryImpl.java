package com.example.toy_board_server.repository;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import com.example.toy_board_server.entity.FishingPoint;
import com.example.toy_board_server.module.ForSearch;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.toy_board_server.entity.QFishingPoint.fishingPoint;


@AllArgsConstructor
@Repository
public class FishingRepositoryImpl implements FishingRepository{
	
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;

	@Override
	public List<FishingPoint> selectWhere(ForSearch module) {
		System.out.println(module);
		List<FishingPoint> check = jPAQueryFactory.select(fishingPoint)
				.from(fishingPoint)
				.where(Expressions.stringPath(module.getColumn()).contains(module.getKeyword()))
				.fetch();
		
		System.out.println(check);
		return check;
	}

}
