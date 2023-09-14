import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

import "./Comunidade.css";
import CommunityList from "../components/CommunityList";
import { IPublicacao } from "../interfaces/IPublicacao";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Comunidade = () => {
  const [fileList, setFileList] = useState([]);

  const normFile = (e:any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    const files = e.fileList.map((file:any) => file.originFileObj);
    setFileList(files);
    return files;
  };

  const onChange = (e:any) => {
    console.log("Change:", e.target.value);
  };

  const onFinish = (values:any) => {
    const formData = new FormData();
    formData.append("user", values.user);
    formData.append("comment", values.comment);
    formData.append("categories", values.categories.join(","));
    formData.append("file", fileList[0]);

    axios({
      method: "post",
      url: "http://localhost:8080/publicacoes/criar",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <Form
          name="post_community"
          {...formItemLayout}
          onFinish={onFinish}
          style={{ width: 900 }}
        >
          <Form.Item label="Interaja">
            <span className="ant-form-text">Faça um post na comunidade!</span>
          </Form.Item>

          <Form.Item
            name="user"
            label="Nome"
            rules={[
              {
                required: true,
                message: "Por favor preencha seu nome!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Conte o que fez" name="comment">
            <TextArea
              showCount
              maxLength={200}
              style={{ height: 120 }}
              onChange={onChange}
              placeholder="Conte como você fez a diferença!"
            />
          </Form.Item>

          <Form.Item
            name="categories"
            label="Selecione a(s) categoria"
            rules={[
              {
                required: true,
                message: "Por favor, selecione a caregoria",
                type: "array",
              },
            ]}
          >
            <Select mode="multiple">
              <Option value="reciclagem">Reciclagem</Option>
              <Option value="botanica">Botanica</Option>
              <Option value="meioAmbiente">Meio-ambiente</Option>
              <Option value="preservacao">Preservação</Option>
              <Option value="economia">Econimia de energia</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="file"
            label="Insira uma foto"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Opcional"
          >
            <Upload
              name="logo"
              listType="picture"
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload imagem</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
              <Button htmlType="reset">Limpar</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div>
        <CommunityList></CommunityList>
      </div>
    </>
  );
};

export default Comunidade;
