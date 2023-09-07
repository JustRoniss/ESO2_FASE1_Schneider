import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Layout, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React from 'react'
import "./Home.css"


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '48px',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',

  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  

  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };


const Home = () => {
    return (
        <div className='content_container'>
            <Space direction="vertical" style={{ width: '70%'}} size={[0, 48]}>
                <Layout>
                <Header style={headerStyle}>Comunidade Shcneider Eco</Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Space>
        </div>

    )

};

export default Home