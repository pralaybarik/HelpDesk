package com.helpdesk.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

	Optional<Student> findByPrnAndPassword(Long prn, String password);

}
