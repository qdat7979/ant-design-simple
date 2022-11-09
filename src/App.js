import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';
import './App.css';
import AppHeader from './Components/common/header';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import Courses from './pages/courses';
import Faq from './pages/faq';
import OpenAccount from './pages/openAccount';
import AppAbout from './pages/about';
import FooterWidget from './Components/common/footerWidget';
import FooterCopyRight from './Components/common/footerCopyRight';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App"> 
      <Layout>

        <BrowserRouter>

          <Header>
            <AppHeader/>
          </Header>

          <Content>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<AppAbout/>}/>
              <Route path='/courses' element={<Courses/>}/>
              <Route path='/openAccount' element={<OpenAccount/>}/>
              <Route path='/faq' element={<Faq/>}/>
            </Routes>
          </Content>

        </BrowserRouter>

        <Footer>
          <FooterWidget/>
          <FooterCopyRight/>
        </Footer>
        
      </Layout>
    </div>
  );
}

export default App;
