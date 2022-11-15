import React from 'react'
import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import image1 from '../../assets/images/banner-img1.jpg'
import image2 from '../../assets/images/banner-img2.jpg'
import image3 from '../../assets/images/banner-img3.jpg'

function Hero() {
    console.log(Row)
  return (
    <div className='heroBlock'>
        <Row gutter={[24, 24]}>
            {/* carousel */}
            <Col xs={24} lg={16}>
            <Carousel autoplay={true}>
                <div>
                    <img src={image1} alt="banner1"/>
                </div>
                <div>
                    <img src={image2} alt="banner2"/>
                </div>
                <div>
                    <img src={image3} alt="banner3"/>
                </div>
            </Carousel>
            </Col>

            {/* Information block */}
            <Col xs={24} lg={8}>
            <div className='heroBlocks'>
                <div className='holder'>
                    <div className='icon'>
                        <i class="fa-solid fa-book"></i>
                    </div>
                    <div className='content'>
                        <h3>Educaion should be Free!!</h3>
                        <p>All lessons in basic level are Free for new Investor</p>
                    </div>
                </div>

                <div className='holder'>
                    <div className='icon'>
                        <i class="fa-solid fa-money-bill-trend-up"></i>
                    </div>
                    <div className='content'>
                        <h3>The best trading system</h3>
                        <p>Bring you the best order for your trade !</p>
                    </div>
                </div>

                <div className='holder'>
                    <div className='icon'>
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <div className='content'>
                        <h3>Open Account Right now</h3>
                        <p>Open Account right now to start your journey</p>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Hero