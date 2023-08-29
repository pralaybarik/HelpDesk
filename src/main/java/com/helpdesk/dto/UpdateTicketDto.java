package com.helpdesk.dto;

import com.helpdesk.entities.TicketStatus;

public class UpdateTicketDto {
	
	private Long ticketId;
	private TicketStatus status;
	//NoArgsConstructor
	public UpdateTicketDto() {
		super();
	}
	//AllArgsConstructor
	public UpdateTicketDto(Long ticketId, TicketStatus status) {
		super();
		this.ticketId = ticketId;
		this.status = status;
	}
	//Getters & Setters
	public Long getTicketId() {
		return ticketId;
	}
	public void setTicketId(Long ticketId) {
		this.ticketId = ticketId;
	}
	public TicketStatus getStatus() {
		return status;
	}
	public void setStatus(TicketStatus status) {
		this.status = status;
	}
	
	
}
