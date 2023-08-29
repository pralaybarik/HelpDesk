package com.helpdesk.dto;

import com.helpdesk.entities.Student;
import com.helpdesk.entities.TicketStatus;

public class TicketDetailsDto {

	private long ticketId;
	
	private String systemId;
	
	private String issueTitle;
	
	private String issueDescription;
	
	private TicketStatus status = TicketStatus.PENDING;
	
	private Long prn;
	
	private String name;
	
	private String email;
	
	//NoArgsConstructor
	public TicketDetailsDto() {
		super();
	}

	//AllArgsConstructor
	public TicketDetailsDto(long ticketId, String systemId, String issueTitle, String issueDescription,
			TicketStatus status, Long prn, String name, String email) {
		super();
		this.ticketId = ticketId;
		this.systemId = systemId;
		this.issueTitle = issueTitle;
		this.issueDescription = issueDescription;
		this.status = status;
		this.prn = prn;
		this.name = name;
		this.email = email;
	}

	//Getters & Setters
	public long getTicketId() {
		return ticketId;
	}
	public void setTicketId(long ticketId) {
		this.ticketId = ticketId;
	}
	public String getSystemId() {
		return systemId;
	}
	public void setSystemId(String systemId) {
		this.systemId = systemId;
	}
	public String getIssueTitle() {
		return issueTitle;
	}
	public void setIssueTitle(String issueTitle) {
		this.issueTitle = issueTitle;
	}
	public String getIssueDescription() {
		return issueDescription;
	}
	public void setIssueDescription(String issueDescription) {
		this.issueDescription = issueDescription;
	}
	public TicketStatus getStatus() {
		return status;
	}
	public void setStatus(TicketStatus status) {
		this.status = status;
	}
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

	//helper method
	public void map(Student student) {
		this.name = student.getName();
		this.email = student.getEmail();
		this.prn = student.getPrn();
		
	}	
	
}
