import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataLogged = [
    {
      title: 'Principal',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Galeria',
      path: '/listings',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Sobre',
      path: '/about',
      icon: <AiIcons.AiFillInfoCircle />,
      cName: 'nav-text'
    },
    {
      title: 'Contato',
      path: '/contact',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Logou',
      path: '/login',
      icon: <AiIcons.AiOutlineLogin />,
      cName: 'nav-text'
    },

  ];