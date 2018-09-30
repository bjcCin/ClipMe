package br.ufpe.cin.clipMe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufpe.cin.clipMe.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByLogin(String login);
}