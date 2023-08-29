package com.helpdesk.dto;

public class AdminDto {

	private String name;
	private String email;
	private String uname;
	private String password;
	
	//NoArgsConstructor
	public AdminDto() {
		super();
	}
	
	//AllArgsConstructor
	public AdminDto(String name, String email, String uname, String password) {
		super();
		this.name = name;
		this.email = email;
		this.uname = uname;
		this.password = password;
	}
	
	//Getters & Setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

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

