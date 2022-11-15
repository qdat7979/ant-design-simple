import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
    MobileOutlined,
    MailOutlined,
    FacebookFilled,
    InstagramFilled,
    YoutubeFilled,
    UserOutlined,
    MenuOutlined
  } from '@ant-design/icons';

import { Button, Drawer } from 'antd';

function AppHeader() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    
  return (
    <div className='container'>
        {/* topbar */}
        <div className='topBar'>
            <div className='contactInfo'>
                <ul>
                    <li>
                        <a href="tel:0947997966"><span><MobileOutlined rotate={0}/> 0947997966</span></a>
                    </li>
                    <li>
                        <a href="mailto:thebrokernotebook@gmail.com"><span><MailOutlined />thebrokernotebook@gmail.com</span></a>
                    </li>
                </ul>
            </div>
             
             <div className='otherInfo'>
                <ul className='socialMedia'>
                    <li>
                        <a href='https://www.facebook.com/dat.duongquoc.33/' target={"_blank"} rel={"noreferrer noopener"}><FacebookFilled /></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UC9CqubzJ9vgidP4xlW5GfLg' target={"_blank"} rel={"noreferrer noopener"}><YoutubeFilled /></a>
                    </li>
                    <li>
                        <a href='https//www.instagram.com' target={"_blank"} rel={"noreferrer noopener"}><InstagramFilled /></a>
                    </li>
                </ul>
                <button><UserOutlined />My Account</button>
             </div>
        </div>

        {/* header */}
        <div className='header separator'>
            <div className='logo'>Educate, Invest and more...</div>

            {/* Show on mobile */}
            <div className='mobileVisible'>
                <Button type="primary" onClick={showDrawer}>
                    <MenuOutlined />
                </Button>
                <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                    <nav>
                        <ul>
                            <li><NavLink onClick={onClose} to={'/'}>Home</NavLink></li>
                            <li><NavLink onClick={onClose} to={'/about'}>About</NavLink></li>
                            <li><NavLink onClick={onClose} to={'/courses'}>Courses</NavLink></li>
                            <li><NavLink onClick={onClose} to={'/openAccount'}>Open Account</NavLink></li>
                            <li><NavLink onClick={onClose} to={'/faq'}>FAQs</NavLink></li>
                        </ul>
                    </nav>
                </Drawer>
            </div>

            {/* Show on wide screen */}
            <nav className='mobileHidden'>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/courses'}>Courses</NavLink></li>
                    <li><NavLink to={'/openAccount'}>Open Account</NavLink></li>
                    <li><NavLink to={'/faq'}>FAQs</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default AppHeader