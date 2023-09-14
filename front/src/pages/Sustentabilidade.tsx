import { Card, Col, Radio, RadioChangeEvent, Row } from "antd";
import React, { useState } from "react";
import { Image } from "antd";
import "./Sustentabilidade.css";
import Logo from "../assets/SU.PA.png";
import Sust from "../assets/sustSemFundo.png";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "50%",
};

const Sustentabilidade: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Dicas de Sustentabilidade</h1>
      <div className="image-container">
        <img src={Sust} alt="Imagem Responsiva" className="responsive-image" />
      </div>
      
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Reciclagem" className="card-container">
            <h4>Reciclar materiais é importante para reduzir o desperdício.</h4>
            <ul>
              <li>
                <b>Separe os Materiais:</b> Comece por separar os materiais
                recicláveis dos não recicláveis. Isso inclui papel, plástico,
                vidro e metais. Tenha diferentes recipientes de coleta seletiva
                em casa para facilitar o processo.
              </li>
              <div style={{ marginTop: "2rem" }} />
              <li>
                <b>Descarte Adequadamente Pilhas e Baterias:</b> Pilhas e
                baterias contêm substâncias tóxicas que podem ser prejudiciais
                ao meio ambiente se descartadas de forma inadequada. Procure
                locais de recolhimento específicos para esses produtos.
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Botânica" className="card-container">
            <h4>
              Conheça e proteja a flora local para preservar a biodiversidade.
            </h4>
            <ul>
              <li>
                <b>Promova Jardins Nativos:</b> Considere plantar jardins com
                espécies nativas em sua propriedade. Essas plantas geralmente
                requerem menos manutenção e são importantes para a vida selvagem
                local.
              </li>
              <div style={{ marginTop: "2rem" }} />
              <li>
                <b>Conserve Áreas Naturais:</b> Apoie organizações e iniciativas
                que trabalhem na conservação de áreas naturais, como parques
                nacionais, reservas e terras de conservação.
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Preservação" className="card-container">
            <h4>Preserve áreas naturais e cuide dos ecossistemas.</h4>
            <ul>
              <li>
                <b>Não Perturbe a Vida Selvagem:</b> Mantenha uma distância
                segura da vida selvagem e evite alimentá-la. Alimentar animais
                selvagens pode prejudicá-los e alterar seu comportamento
                natural.
              </li>
              <div style={{ marginTop: "2rem" }} />
              <li>
                <b>Promova a Conscientização:</b> Eduque os outros sobre a
                importância da preservação e dos ecossistemas saudáveis. A
                conscientização pública pode levar a ações mais sustentáveis.
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Economia de Energia" className="card-container">
            <h4>Economize energia adotando práticas sustentáveis.</h4>
            <ul>
              <li>
                <b>Escolha Eletrodomésticos Eficientes:</b> Ao comprar
                eletrodomésticos novos, verifique as classificações de
                eficiência energética e escolha os modelos mais eficientes, como
                os com etiqueta A++ ou A+++.
              </li>
              <div style={{ marginTop: "2rem" }} />
              <li>
                <b>Troque para Lâmpadas LED:</b> Substitua as lâmpadas
                incandescentes por lâmpadas LED, que são mais eficientes em
                termos energéticos e têm uma vida útil mais longa. 
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Sustentabilidade;
