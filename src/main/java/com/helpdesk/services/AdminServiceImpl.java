package com.helpdesk.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.dto.AdminChangePassword;
import com.helpdesk.dto.AdminDto;
import com.helpdesk.dto.AdminLoginRequest;
import com.helpdesk.dto.AdminLoginResponse;
import com.helpdesk.dto.StudentDto;
import com.helpdesk.dto.TicketDetailsDto;
import com.helpdesk.dto.TicketListDto;
import com.helpdesk.dto.UpdateTicketDto;
import com.helpdesk.entities.Admin;
import com.helpdesk.entities.Student;
import com.helpdesk.entities.Ticket;
import com.helpdesk.repositories.AdminRepository;
import com.helpdesk.repositories.StudentRepository;
import com.helpdesk.repositories.TicketRepository;

import custom_exceptions.ResourceNotFoundException;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private TicketRepository ticketRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public AdminDto addAdminDetails(AdminDto newAdmin) {
		Admin admin=modelMapper.map(newAdmin, Admin.class);
		return modelMapper.map(adminRepo.save(admin), AdminDto.class);
	}

	@Override
	public List<AdminDto> getAllAdmins() {
		List<Admin> admins = adminRepo.findAll();
		List<AdminDto> adminsDto = new ArrayList<AdminDto>();
		for (Admin admin : admins) {
			adminsDto.add(modelMapper.map(admin,AdminDto.class));
		}
		return adminsDto;
	}

	@Override
	public AdminDto getAdminDetailsByUname(String uname) {
		return modelMapper.map(adminRepo.findById(uname).get(),AdminDto.class);
	}

	@Override
	public AdminLoginResponse loginAuthenticate(@Valid AdminLoginRequest request) {
		Admin admin = adminRepo.findByUnameAndPassword(request.getUname(),request.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Bad Credentials , Invalid Login!"));
		return modelMapper.map(admin, AdminLoginResponse.class);
	}

	@Override
	public List<TicketListDto> getAllTickets() {
		List<Ticket> tickets = ticketRepo.findAll();
		List<TicketListDto> ticketsDto = new ArrayList<TicketListDto>();
		for (Ticket ticket : tickets) {
			TicketListDto ticketDto = modelMapper.map(ticket,TicketListDto.class);
			ticketDto.setStudentName(ticket.getStudent().getName());
			ticketsDto.add(ticketDto);
		}
		return ticketsDto;
	}

	@Override
	public String addStudentDetails(StudentDto newStudent) {
		Student student=modelMapper.map(newStudent, Student.class);
		student.setPassword(String.valueOf(student.getPrn()));
		studentRepo.save(student);
		return "Student Added";
	}

	@Override
	public TicketDetailsDto getTicketDetailsByTicketId(Long ticketId) {
		Ticket ticket = ticketRepo.findById(ticketId).get();
		Student student = ticket.getStudent();
		TicketDetailsDto ticketDto = modelMapper.map(ticket,TicketDetailsDto.class);
		ticketDto.map(student); 
		return ticketDto;
	}

	@Override
	public String updateTicket(UpdateTicketDto request) {
		Ticket ticket = ticketRepo.findById(request.getTicketId()).get();
		ticket.setStatus(request.getStatus());
		ticketRepo.save(ticket);
		return "Status Updated";
	}

	@Override
	public String passwordUpdate(@Valid AdminChangePassword request) {
		Admin admin = adminRepo.findByUnameAndPassword(request.getUname(),request.getOldPassword()).orElseThrow(() -> new ResourceNotFoundException("Wrong Password , Try Again!"));
		admin.setPassword(request.getNewPassword());
		adminRepo.save(admin);
		return "Password Changed Successfully";
	}

	@Override
	public String deleteTicketByTicketId(Long ticketId) {
		if(ticketRepo.findById(ticketId).isPresent()) {
			Ticket ticket = ticketRepo.findById(ticketId).get();
			Student student = ticket.getStudent();
			ticket = student.removeTicket(ticket);
			ticketRepo.delete(ticket);
			return "Ticket Deleted";
		}
		else {
			throw new ResourceNotFoundException("Ticket Not Found,Invalid ID");
		}
	}

}
