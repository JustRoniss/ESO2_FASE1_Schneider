import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Upload,
} from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import axios from 'axios';


import "./Comunidade.css"
import CommunityList from "../components/CommunityList";
import { IPublicacao } from "../interfaces/IPublicacao";






const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const onFinish = (values: IPublicacao	) => {
  axios({
    method: "post",
    url: "http://localhost:8080/publicacoes/criar",
    data: {
      user: values.user,
      comment: values.comment,
      categories: values.categories,
      fileName: values.fileName,
      midiaType: values.midiaType,
      file: values.dados    
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}; 

const Comunidade = () => {
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
            message: 'Por favor preencha seu nome!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Conte o que fez">
          <TextArea
          showCount
          maxLength={200}
          style={{ height: 120 }}
          onChange={onChange}
          placeholder="Conte como você fez a diferença!"
          />
      </Form.Item>

        <Form.Item
          name="categoria"
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
          name="upload"
          label="Insira uma foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Opcional"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
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
