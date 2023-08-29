package com.helpdesk.dto;

public class StudentDto {

	private Long prn;
	
	private String name;
	
	private String email;
	
	//NoArgsConstructor
	public StudentDto() {
		super();
	}
	//AllArgsConstructor
	public StudentDto(Long prn, String name, String email) {
		super();
		this.prn = prn;
		this.name = name;
		this.email = email;
	}
	
	//Getters & Setters
	public Long getPrn() {
		return prn;
	}

	public void setPrn(Long prn) {
		this.prn = prn;
	}

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
	
}
