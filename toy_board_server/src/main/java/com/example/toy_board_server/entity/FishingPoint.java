package com.example.toy_board_server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "fishing_point")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FishingPoint {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "seq")
	private Integer seq;

	@Column(name = "point_name")
	private String pointName;

	@Column(name = "point_desc")
	private String pointDesc;

	@Column(name = "point_lat")
	private Double pointLat;

	@Column(name = "point_lng")
	private Double pointLng;

	@Column(name = "point_register")
	private String pointRegister;
	
	@Column(name = "point_addr")
	private String pointAddr;
}
