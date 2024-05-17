package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test")
public class TestController {
	
	
	@GetMapping("/cors")
	public String test() {
		 System.out.println("---------=======================");
		return "JYH94";
	}
}
