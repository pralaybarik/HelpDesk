package com.helpdesk.dto;

public class AdminChangePassword {
	
	private String uname;
	
	private String oldPassword;
	
	private String newPassword;

	//NoArgsConstructor
	public AdminChangePassword() {
		super();
	}
	//AllArgsConstructor
	public AdminChangePassword(String uname, String oldPassword, String newPassword) {
		super();
		this.uname = uname;
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}
	
	//Getters & Setters
	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
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
