package com.helpdesk.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {

	@Column(name = "name", length = 30,nullable = false)
	private String name;
	
	@Column(length = 255, unique = true)
	private String email;
	
	@Id
	private String uname;
	
	@Column(nullable = false)
	private String password;

	//NoArgsConstructor
	public Admin() {
		super();
	}
	//AllArgsConstructor
	public Admin(String name, String email, String uname, String password) {
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
