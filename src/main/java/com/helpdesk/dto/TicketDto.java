package com.helpdesk.dto;

public class TicketDto {
	private String systemId;
	private String issueTitle;
	private String issueDescription;
	private Long prn;
	
	//NoArgsConstructor
	public TicketDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	//AllArgsConstructor
	public TicketDto(String systemId, String issueTitle, String issueDescription, Long prn) {
		super();
		this.systemId = systemId;
		this.issueTitle = issueTitle;
		this.issueDescription = issueDescription;
		this.prn = prn;
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
	public String getIssueDescription() {
		return issueDescription;
	}
	public void setIssueDescription(String issueDescription) {
		this.issueDescription = issueDescription;
	}
	public Long getPrn() {
		return prn;
	}
	public void setPrn(Long prn) {
		this.prn = prn;
	}
	
	
}
