package com.helpdesk.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ticket")
public class Ticket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ticketId;
	
	@Column(nullable = false)
	private String systemId;
	
	@Column(length = 256)
	private String issueTitle;
	
	@Column(length = 5000)
	private String issueDescription;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private TicketStatus status = TicketStatus.PENDING;
	
	@ManyToOne
	@JoinColumn(name = "student_prn")
	private Student student;

	//NoArgsConstructor
	public Ticket() {
		super();
	}
	
	//AllArgsConstructor
	public Ticket(long ticketId, String systemId, String issueTitle, String issueDescription, TicketStatus status,
			Student student) {
		super();
		this.ticketId = ticketId;
		this.systemId = systemId;
		this.issueTitle = issueTitle;
		this.issueDescription = issueDescription;
		this.status = status;
		this.student = student;
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

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}
	
	
}