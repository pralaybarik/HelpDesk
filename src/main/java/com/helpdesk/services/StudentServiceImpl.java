package com.helpdesk.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.dto.StudentChangePassword;
import com.helpdesk.dto.StudentLoginRequest;
import com.helpdesk.dto.StudentLoginResponse;
import com.helpdesk.dto.StudentProfileDto;
import com.helpdesk.dto.TicketDto;
import com.helpdesk.dto.TicketDetailsDto;
import com.helpdesk.dto.TicketListDto;
import com.helpdesk.entities.Student;
import com.helpdesk.entities.Ticket;
import com.helpdesk.repositories.StudentRepository;
import com.helpdesk.repositories.TicketRepository;

import custom_exceptions.ResourceNotFoundException;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private TicketRepository ticketRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public String addTicketDetails(TicketDto newTicket) {
		Ticket ticket = modelMapper.map(newTicket,Ticket.class);
		Optional<Student> student=studentRepo.findById(newTicket.getPrn());
		if(student.isPresent()) {
			ticket.setStudent(student.get());
			ticketRepo.save(ticket);
			return "Ticket Created";
		}
		else {
			throw new ResourceNotFoundException("Unmatched PRN");
		}
	}

	@Override
	public StudentProfileDto getStudentDetailsByPrn(Long prn) {
		Student student = studentRepo.findById(prn).get();
		StudentProfileDto studentDto = modelMapper.map(student,StudentProfileDto.class);
		List<TicketListDto> ticketList = new ArrayList<TicketListDto>();
		for (Ticket ticket : student.getTicketList()) {
			ticketList.add(modelMapper.map(ticket,TicketListDto.class));
		}
		studentDto.setTicketList(ticketList);
		return studentDto;
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
	public StudentLoginResponse loginAuthenticate(@Valid StudentLoginRequest request) {
		Student student = studentRepo.findByPrnAndPassword(request.getPrn(),request.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Bad Credentials , Invalid Login!"));
		return modelMapper.map(student, StudentLoginResponse.class);
	}

	@Override
	public String passwordUpdate(@Valid StudentChangePassword request) {
		Student student = studentRepo.findByPrnAndPassword(request.getPrn(),request.getOldPassword()).orElseThrow(() -> new ResourceNotFoundException("Wrong Password, Try Again!"));
		student.setPassword(request.getNewPassword());
		studentRepo.save(student);
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
