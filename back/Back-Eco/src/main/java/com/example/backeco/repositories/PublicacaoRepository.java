package com.example.backeco.repositories;

import com.example.backeco.model.Publicacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Long > {
}
