package com.helpdesk.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	private Long prn;
	
	@Column(length = 30)
	private String name;
	
	@Column(length =255, unique = true)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Ticket> ticketList = new ArrayList<>();
	
	//NoArgsContructor
	public Student() {
		super();
	}
	
	//AllArgsContructor
	public Student(Long prn, String name, String email, String password,
			List<Ticket> ticketList) {
		super();
		this.prn = prn;
		this.name = name;
		this.email = email;
		this.password = password;
		this.ticketList = ticketList;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Ticket> getTicketList() {
		return ticketList;
	}
	public void setTicketList(List<Ticket> ticketList) {
		this.ticketList = ticketList;
	}
	
	//Helper Methods
	public Ticket removeTicket(Ticket ticket) {
		ticketList.remove(ticket);
		ticket.setStudent(null);
		return ticket;
	}
}
