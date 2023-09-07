import { CommentOutlined, GlobalOutlined, HomeOutlined, InfoCircleOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from "../assets/SU.PA_BIG.png"
import './Nav.css'



const items = [
    {
      label: "Comunidade Eco",
      key: "home",
      icon: <HomeOutlined style={{fontSize: '22px'}}/>,
      path: "/home",
    },
    {
      label: "Sustentabilidade",
      key: "sustentabilidade",
      icon: <GlobalOutlined  style={{fontSize: '22px'}} />,
      path: "/sustentabilidade",
    },
    {
      label: "Comunidade",
      key: "comunidade",
      icon: <CommentOutlined style={{fontSize: '22px'}} />,
      path: "/comunidade",
    },
    {
        label: "Video Pitch",
        key: "video",
        icon: <YoutubeOutlined style={{fontSize: '22px'}} />,
        path: "/comunidade", //lembrar de mudar
    },
    {
        label: "Sobre o projeto",
        key: "sobre",
        icon: <InfoCircleOutlined style={{fontSize: '22px'}}/>,
        path: "/sobre",
    },
  ];

const Nav: React.FC = () => {
  return (
    <Menu mode="horizontal" className='nav_container'>
    {items.map((item) => {
      if (item) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </Menu.Item>
        );
      }
    })}
  </Menu>
  )
}

export default Nav