import React from 'react';
import { Col, Row } from 'antd';
import bgImage1 from '../../assets/images/ad-img1.png';
import bgImage2 from '../../assets/images/ad-img2.png';

function Information() {
  return (
    <div className='block informationBlock'>
        <Row gutter={24}>
            <Col md={12}> 
                <div className='holder' style={{
                    backgroundImage:`url(${bgImage1})`,
                    backgroundRepeat: 'no-repeat'
                }}>
                    <h3>Everyday 24/7 Listening to you !</h3>
                    <div className='price'>60p</div>
                </div>
            </Col>
            <Col md={12}> 
                <div className='holder' style={{
                    backgroundImage:`url(${bgImage2})`,
                    backgroundRepeat: 'no-repeat'
                }}>
                    <h3>Become an Investor right now !</h3>
                    <p>Good foundation for better future !</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Information