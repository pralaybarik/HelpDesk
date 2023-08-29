package com.helpdesk.services;

import javax.validation.Valid;

import com.helpdesk.dto.StudentChangePassword;
import com.helpdesk.dto.StudentLoginRequest;
import com.helpdesk.dto.StudentLoginResponse;
import com.helpdesk.dto.StudentProfileDto;
import com.helpdesk.dto.TicketDto;
import com.helpdesk.dto.TicketDetailsDto;

public interface StudentService {

	String addTicketDetails(TicketDto newTicket);

	StudentProfileDto getStudentDetailsByPrn(Long prn);

	TicketDetailsDto getTicketDetailsByTicketId(Long ticketId);

	StudentLoginResponse loginAuthenticate(@Valid StudentLoginRequest request);

	String passwordUpdate(@Valid StudentChangePassword request);

	String deleteTicketByTicketId(Long ticketId);

}
