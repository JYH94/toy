package com.example.toy_board_server.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

//@Component
public class CorsFilter {

//	@Override
//	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
//			throws IOException, ServletException {
//
//		HttpServletRequest request = (HttpServletRequest) req;
//		HttpServletResponse response = (HttpServletResponse) res;
//
//		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//		response.setHeader("Access-Control-Allow-Credentials", "true");
//		response.setHeader("Access-Control-Allow-Methods", "*");
//		response.setHeader("Access-Control-Max-Age", "3600");
//		response.setHeader("Access-Control-Allow-Headers",
//				"Origin, X-Requested-With, Content-Type, Accept, Authorization");
//
//		if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//			response.setStatus(HttpServletResponse.SC_OK);
//		} else {
//			chain.doFilter(req, res);
//		}
//	}

//    public void init(FilterConfig filterConfig) throws ServletException {
//
//    }
//
//    @Override
//    public void doFilter(
//      ServletRequest req, 
//      ServletResponse res, 
//      FilterChain filterChain
//    ) throws IOException, ServletException {
//        HttpServletRequest request = (HttpServletRequest) req;
//        HttpServletResponse response = (HttpServletResponse) res;
//
//        // 로그 추가
//        System.out.println("CorsFilter is filtering the request.");
//
//        // 기존 필터 로직
//        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
////        response.setHeader("Access-Control-Allow-Credentials", "true");
//        response.setHeader("Access-Control-Allow-Methods","*");
//        response.setHeader("Access-Control-Max-Age", "3600");
//        response.setHeader("Access-Control-Allow-Headers",
//                "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//
//        if("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//            response.setStatus(HttpServletResponse.SC_OK);
//        } else {
//            filterChain.doFilter(req, res);
//        }
//    }

}