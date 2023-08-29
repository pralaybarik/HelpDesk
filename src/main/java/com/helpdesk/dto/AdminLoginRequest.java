package com.helpdesk.dto;

import javax.validation.constraints.NotBlank;

public class AdminLoginRequest {
	@NotBlank(message = "username can't be blank")
	private String uname;
	
	@NotBlank(message = "password can't be blank")
	private String password;

	//NoArgsConstructor
	public AdminLoginRequest() {
		super();
	}
	//AllArgsConstructor
	public AdminLoginRequest(@NotBlank(message = "username can't be blank") String uname,
			@NotBlank(message = "password can't be blank") String password) {
		super();
		this.uname = uname;
		this.password = password;
	}
	
	//Getters & Setters
	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
