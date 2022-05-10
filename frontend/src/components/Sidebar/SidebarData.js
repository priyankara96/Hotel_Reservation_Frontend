import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataStock = [

  {
    title: 'Dashboard',
    path: '/AdminDashboard',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'AAAA', // Priyankara
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {  
        title: '1',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '2',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },


  // 2nd
  {
    title: 'BBBB', // 
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {  
        title: '1',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '2',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

// 3rd

{
  title: 'CCC', // 
  path: '#',
  icon: <IoIcons.IoIosPaper />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {  
      title: '1',
      path: '/',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: '2',
      path: '/',
      icon: <IoIcons.IoIosPaper />
    }
  ]
},

//4th

{
  title: 'DDDD', // 
  path: '#',
  icon: <IoIcons.IoIosPaper />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {  
      title: '1',
      path: '/',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: '2',
      path: '/',
      icon: <IoIcons.IoIosPaper />
    }
  ]
},



];

