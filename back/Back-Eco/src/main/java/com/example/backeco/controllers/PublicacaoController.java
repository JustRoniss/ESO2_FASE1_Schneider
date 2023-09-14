package com.example.backeco.controllers;

import com.example.backeco.model.Publicacao;
import com.example.backeco.repositories.PublicacaoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/publicacoes")
public class PublicacaoController {

    @Autowired
    private PublicacaoRepository publicacaoRepository;

    @PostMapping("/criar")
    public ResponseEntity<?> criarPublicacao(@RequestBody @Validated Publicacao publicacao) {
        String base64Data = publicacao.getDados();
        publicacao.setDados(base64Data);
        publicacaoRepository.save(publicacao);
        return ResponseEntity.ok("Publicao criada com sucesso");
    }

    @GetMapping("/consultar")
    public ResponseEntity<List<Publicacao>> buscarTodasPublicacoes() {
        List<Publicacao> publicacoes = publicacaoRepository.findAll();
        return ResponseEntity.ok(publicacoes);
    }

}