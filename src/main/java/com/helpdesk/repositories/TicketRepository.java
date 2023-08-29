package com.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.helpdesk.entities.Ticket;

public interface TicketRepository extends JpaRepository<Ticket,Long>{

}
