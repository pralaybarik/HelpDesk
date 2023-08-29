package com.helpdesk.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin,String> {
	Optional<Admin> findByUnameAndPassword(String uname,String password);
}
