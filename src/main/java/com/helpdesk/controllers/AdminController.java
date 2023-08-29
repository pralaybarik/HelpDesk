package com.helpdesk.controllers;

import java.util.List;

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

import com.helpdesk.dto.AdminChangePassword;
import com.helpdesk.dto.AdminDto;
import com.helpdesk.dto.AdminLoginRequest;
import com.helpdesk.dto.ApiResponse;
import com.helpdesk.dto.StudentDto;
import com.helpdesk.dto.TicketListDto;
import com.helpdesk.dto.UpdateTicketDto;
import com.helpdesk.services.AdminService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	public AdminController() {
		
	}
	
	@GetMapping("/{uname}")
	public ResponseEntity<?> getStudentDetails(@PathVariable String uname) {
		try {
			return new ResponseEntity<>(adminService.getAdminDetailsByUname(uname), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PostMapping("/newadmin")
	public AdminDto addNewAdmin(@RequestBody AdminDto newAdmin) {
		return adminService.addAdminDetails(newAdmin);
	}
	@GetMapping()
	public List<AdminDto> fetchAllAdmins() {
		return adminService.getAllAdmins();
	}
	@GetMapping("/ticket/{ticketId}")
	public ResponseEntity<?> getTicketDetails(@PathVariable Long ticketId) { 
		try {
			return new ResponseEntity<>(adminService.getTicketDetailsByTicketId(ticketId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@DeleteMapping("/ticket/{ticketId}")
	public ResponseEntity<?> deleteTicket(@PathVariable Long ticketId) { 
		try {
			return new ResponseEntity<>(adminService.deleteTicketByTicketId(ticketId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PutMapping
	public ResponseEntity<?> adminLogin(@RequestBody @Valid AdminLoginRequest request) {
		
		try {
			return new ResponseEntity<>(adminService.loginAuthenticate(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@GetMapping("/ticketlist")
	public List<TicketListDto> getAllTicketList() {
		return adminService.getAllTickets();
	}
	@PostMapping("/newstudent")
	public ResponseEntity<?> addNewStudent(@RequestBody StudentDto newStudent) {
		try {
			return new ResponseEntity<>(adminService.addStudentDetails(newStudent), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PutMapping("/ticket")
	public ResponseEntity<?> updateTicketStatus(@RequestBody UpdateTicketDto request) {
		
		try {
			return new ResponseEntity<>(adminService.updateTicket(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@PutMapping("/changepassword")
	public ResponseEntity<?> studentPasswordChange(@RequestBody @Valid AdminChangePassword request) {
		
		try {
			return new ResponseEntity<>(adminService.passwordUpdate(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
}
