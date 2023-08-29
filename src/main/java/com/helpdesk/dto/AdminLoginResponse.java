package com.helpdesk.dto;


public class AdminLoginResponse {
	private String uname;
	
	public AdminLoginResponse() {}

	public AdminLoginResponse(String uname) {
		super();
		this.uname = uname;
	}

	public String getuname() {
		return uname;
	}

	public void setuname(String uname) {
		this.uname = uname;
	}
}
