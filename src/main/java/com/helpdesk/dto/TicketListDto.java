package com.helpdesk.dto;

import com.helpdesk.entities.TicketStatus;

public class TicketListDto {
	
	private Long ticketId;
	private String studentName;
	private String systemId;
	private String issueTitle;
	private TicketStatus status = TicketStatus.PENDING;
	
	//NoArgsConstructor
	public TicketListDto() {
		super();
	}
	
	//AllArgsConstructor
	public TicketListDto(Long ticketId,String studentName,String systemId, String issueTitle, TicketStatus status) {
		super();
		this.ticketId = ticketId;
		this.systemId = systemId;
		this.issueTitle = issueTitle;
		this.status = status;
		this.studentName=studentName;
	}
	
	//Getters & Setters
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

	public TicketStatus getStatus() {
		return status;
	}

	public void setStatus(TicketStatus status) {
		this.status = status;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Long getTicketId() {
		return ticketId;
	}

	public void setTicketId(Long ticketId) {
		this.ticketId = ticketId;
	}
	
}
