package com.helpdesk.dto;

public class StudentChangePassword {

	private Long prn;
	
	private String oldPassword;
	
	private String newPassword;

	//NoArgsConstructor
	public StudentChangePassword() {
		super();
		// TODO Auto-generated constructor stub
	}
	//AllArgsConstructor
	public StudentChangePassword(Long prn, String oldPassword, String newPassword) {
		super();
		this.prn = prn;
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}

	//Getters & Setters
	public Long getPrn() {
		return prn;
	}

	public void setPrn(Long prn) {
		this.prn = prn;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
		
}
