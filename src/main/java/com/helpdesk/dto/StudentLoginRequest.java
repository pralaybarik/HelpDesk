package com.helpdesk.dto;

public class StudentLoginRequest {

	private Long prn;
	private String password;

	//NoArgsConstructor
	public StudentLoginRequest() {
		super();
	}
	//AllArgsConstructor
	public StudentLoginRequest(Long prn, String password) {
		super();
		this.prn = prn;
		this.password = password;
	}
	//Getters & Setters
	public Long getPrn() {
		return prn;
	}

	public void setPrn(Long prn) {
		this.prn = prn;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
