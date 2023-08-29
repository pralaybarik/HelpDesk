package com.helpdesk.services;

import java.util.List;

import javax.validation.Valid;

import com.helpdesk.dto.AdminChangePassword;
import com.helpdesk.dto.AdminDto;
import com.helpdesk.dto.AdminLoginRequest;
import com.helpdesk.dto.AdminLoginResponse;
import com.helpdesk.dto.StudentDto;
import com.helpdesk.dto.TicketDetailsDto;
import com.helpdesk.dto.TicketListDto;
import com.helpdesk.dto.UpdateTicketDto;

public interface AdminService {
	
	AdminDto addAdminDetails(AdminDto newAdmin);

	List<AdminDto> getAllAdmins();

	AdminDto getAdminDetailsByUname(String uname);

	AdminLoginResponse loginAuthenticate(@Valid AdminLoginRequest request);

	List<TicketListDto> getAllTickets();

	String addStudentDetails(StudentDto newStudent);

	TicketDetailsDto getTicketDetailsByTicketId(Long ticketId);

	String updateTicket(UpdateTicketDto request);

	String passwordUpdate(@Valid AdminChangePassword request);

	String deleteTicketByTicketId(Long ticketId);
}
