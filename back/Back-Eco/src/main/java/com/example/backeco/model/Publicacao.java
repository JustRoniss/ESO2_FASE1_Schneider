package com.example.backeco.model;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user;

    private String comment;

    @ElementCollection
    @CollectionTable(name = "item_categories", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "category")
    private List<String> categories;

    private LocalDateTime creationDate;

    private String fileName; 
    private String midiaType;    // Tipo de mídia (por exemplo, "image/png")

    @Lob // Armazenar dados binários grandes - imagens
    private byte[] dados; // Os dados binários da foto

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

//    public String getNomeArquivo() {
//        return nome;
//    }
//
//    public void setNomeArquivo(String nomeArquivo) {
//        this.nomeArquivo = nomeArquivo;
//    }
//
//    public String getTipoMidia() {
//        return tipoMidia;
//    }
//
//    public void setTipoMidia(String tipoMidia) {
//        this.tipoMidia = tipoMidia;
//    }

    public byte[] getDados() {
        return dados;
    }

    public void setDados(byte[] dados) {
        this.dados = dados;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }
}