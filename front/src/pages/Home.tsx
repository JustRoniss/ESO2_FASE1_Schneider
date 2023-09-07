import { ArrowLeftOutlined, ArrowRightOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Button, Layout, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'

import Logo from '../assets/SU.PA.png'
import Natute from '../assets/undraw_nature_m5ll.svg'
import "./Home.css"
import BottomBackground from '../layouts/BottomBackground';
import BottomLeftBackground from '../layouts/BottomLeftBackground';


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '48px',
    color: '#b3ff99',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    // backgroundColor: '#00ff00',
    backgroundColor: 'white',

  };
  
  const contentStyle: React.CSSProperties = {
    fontSize: '28px',
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: 'black',
    // backgroundColor: '#d9ffcc',
    backgroundColor: 'white',
  };
  

  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'white',
  };



  const contents: string[] = [
    "Somos uma comunidade de pessoas que se preocupam com o futuro do nosso planeta e das futuras gerações",
    "Aqui você encontrará conteúdos que lhe ajudarão a criar hábitos mais sustentáveis no seu dia-a-dia",
    "Visite a página comunidade e veja como os membros da rede têm se tornado mais sustentáveis e ecológicos. Aproveite também para compartilhar como você tem feito sua parte em prol de nosso planeta"
  ]



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
      <div className='content_container'>
          <Space direction="vertical" style={{ width: '70%'}} size={[0, 48]}>
              <Layout>
              <Header style={headerStyle}>
              
                Comunidade Schneider Eco.     
              </Header>
              <Content style={contentStyle}>
              {/* <img src={Logo} alt="Logo" style={{ height: '90px', marginRight: '1rem', display: 'block'}} /> */}
                  {contents[currentIndex]}
              </Content>
              <Footer style={footerStyle}>
                <Button id='btn_back' type="primary" icon={<StepBackwardOutlined />} size="large" onClick={handleBack} disabled={currentIndex === 0}  />
                <Button id='btn_next' type="primary" icon={<StepForwardOutlined />} size="large" onClick={handleNext} disabled={currentIndex === contents.length - 1}/>
              </Footer>
              </Layout>
          </Space>
          <BottomLeftBackground/>
          <BottomBackground/>
      </div>
      
  )

};

export default Home