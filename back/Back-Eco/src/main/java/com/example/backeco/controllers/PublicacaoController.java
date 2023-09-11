package com.example.backeco.controllers;

import com.example.backeco.model.Publicacao;
import com.example.backeco.repositories.PublicacaoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/publicacoes")
@CrossOrigin(origins = "http://localhost:5173")
public class PublicacaoController {

    @Autowired
    private PublicacaoRepository publicacaoRepository;

    @PostMapping("/criar")
    public String criarPublicacao(
            @RequestParam("user") String user,
            @RequestParam("comment") String comment,
            @RequestParam("categories") List<String> categories,
            @RequestParam("fileName") String fileName,
            @RequestParam("midiaType") String midiaType,
            @RequestParam("file") MultipartFile file
    ) {
        try {
            
            if (user == null || comment == null || categories == null || fileName == null || midiaType == null || file == null) {
                return "Campos obrigatórios não preenchidos.";
            }

            Publicacao publicacao = new Publicacao();
            publicacao.setUser(user);
            publicacao.setComment(comment);
            publicacao.setCategories(categories);
            publicacao.setCreationDate(LocalDateTime.now());
//            publicacao.setNomeArquivo(fileName);
//            publicacao.setTipoMidia(midiaType);
            publicacao.setDados(file.getBytes()); // Converta o arquivo para bytes e salve

            publicacaoRepository.save(publicacao);

            return "Publicação criada com sucesso!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Erro ao criar a publicação.";
        }
    }
}
