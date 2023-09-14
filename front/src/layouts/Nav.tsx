import React, { useState } from 'react';
import { CommentOutlined, GlobalOutlined, HomeOutlined, InfoCircleOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/SU.PA_BIG.png";
import './Nav.css';
import VideoPitchModal from '../components/VideoPitchModal';

const items = [
  {
    label: "Comunidade Eco",
    key: "home",
    icon: <HomeOutlined style={{ fontSize: '22px' }} />,
    path: "/home",
  },
  {
    label: "Sustentabilidade",
    key: "sustentabilidade",
    icon: <GlobalOutlined style={{ fontSize: '22px' }} />,
    path: "/sustentabilidade",
  },
  {
    label: "Comunidade",
    key: "comunidade",
    icon: <CommentOutlined style={{ fontSize: '22px' }} />,
    path: "/comunidade",
  },
  {
    label: "Video Pitch",
    key: "video",
    icon: <YoutubeOutlined style={{ fontSize: '22px' }} />,
    path: "/video", // Atualize o caminho para o vídeo
  },
  {
    label: "Sobre o projeto",
    key: "sobre",
    icon: <InfoCircleOutlined style={{ fontSize: '22px' }} />,
    path: "/sobre",
  },
];

const Nav: React.FC = () => {
  const [videoModalVisible, setVideoModalVisible] = useState(false);

  const openVideoModal = () => {
    setVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setVideoModalVisible(false);
  };

  return (
    <>
      <Menu mode="horizontal" className='nav_container'>
        {items.map((item) => {
          if (item) {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.key === 'video' ? (
                  <span onClick={openVideoModal}>{item.label}</span>
                ) : (
                  <NavLink to={item.path}>{item.label}</NavLink>
                )}
              </Menu.Item>
            );
          }
        })}
      </Menu>
      {/* Renderize a modal de vídeo aqui */}
      <VideoPitchModal isOpen={videoModalVisible} onClose={closeVideoModal} title="Video Pitch" />
    </>
  );
};

export default Nav;
