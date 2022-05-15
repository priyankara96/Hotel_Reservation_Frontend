import React from 'react';
import * as AiIcons from 'react-icons/ai'; // https://react-icons.github.io/react-icons/icons?name=ai
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataStock = [

  
  // User management - Priyankara
  {
    title: 'Dashboard',
    path: '/AdminDashboard',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'My Profile',
    path: '/AdminProfile',
    icon: <AiIcons.AiOutlineUser />
  },

  {
    title: 'User Management', 
    path: '#',
    icon: <AiIcons.AiOutlineSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {  
        title: 'Add Traveller',
        path: '/Add_Traveller',
        icon: <AiIcons.AiOutlinePlusCircle />
      },
      {
        title: 'Add User',
        path: '/Add_User',
        icon: <AiIcons.AiOutlinePlusCircle />
      },
      {
        title: 'Details of all Users',
        path: '/All_Data',
        icon: <AiIcons.AiOutlinePlusCircle />
      }
    ]
  }, // End User management


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

