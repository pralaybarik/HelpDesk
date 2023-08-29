package com.helpdesk.dto;

public class StudentLoginResponse {
	private Long prn;

	public StudentLoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentLoginResponse(Long prn) {
		super();
		this.prn = prn;
	}

	public Long getPrn() {
		return prn;
	}

	public void setPrn(Long prn) {
		this.prn = prn;
	}
	
}
