package com.helpdesk.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpdesk.dto.ApiResponse;
import com.helpdesk.dto.StudentChangePassword;
import com.helpdesk.dto.StudentLoginRequest;
import com.helpdesk.dto.TicketDto;
import com.helpdesk.services.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/newticket")
	public ResponseEntity<?> addNewTicket(@RequestBody TicketDto newTicket) {
		try {
			return new ResponseEntity<>(studentService.addTicketDetails(newTicket), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@GetMapping("/{prn}")
	public ResponseEntity<?> getStudentDetails(@PathVariable Long prn) {
		try {
			return new ResponseEntity<>(studentService.getStudentDetailsByPrn(prn), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@GetMapping("/ticket/{ticketId}")
	public ResponseEntity<?> getTicketDetails(@PathVariable Long ticketId) { 
		try {
			return new ResponseEntity<>(studentService.getTicketDetailsByTicketId(ticketId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PutMapping
	public ResponseEntity<?> studentLogin(@RequestBody @Valid StudentLoginRequest request) {
		
		try {
			return new ResponseEntity<>(studentService.loginAuthenticate(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PutMapping("/changepassword")
	public ResponseEntity<?> studentPasswordChange(@RequestBody @Valid StudentChangePassword request) {
		
		try {
			return new ResponseEntity<>(studentService.passwordUpdate(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@DeleteMapping("/ticket/{ticketId}")
	public ResponseEntity<?> deleteTicket(@PathVariable Long ticketId) { 
		try {
			return new ResponseEntity<>(studentService.deleteTicketByTicketId(ticketId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
}
