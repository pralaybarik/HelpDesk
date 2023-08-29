package com.helpdesk.dto;

import java.util.ArrayList;
import java.util.List;

public class StudentProfileDto {

	private Long prn;
	private String name;
	private String email;
	private List<TicketListDto> ticketList = new ArrayList<>();
	
	//NoArgsConstructor
	public StudentProfileDto() {
		super();
	}
	//AllArgsConstructor
	public StudentProfileDto(Long prn, String name, String email, List<TicketListDto> ticketList) {
		super();
		this.prn = prn;
		this.name = name;
		this.email = email;
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
	public List<TicketListDto> getTicketList() {
		return ticketList;
	}
	public void setTicketList(List<TicketListDto> ticketList) {
		this.ticketList = ticketList;
	}
	
}
