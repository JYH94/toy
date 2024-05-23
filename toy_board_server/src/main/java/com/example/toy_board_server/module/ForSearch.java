package com.example.toy_board_server.module;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class ForSearch {
	
	private String column;
	private String keyword;
}
