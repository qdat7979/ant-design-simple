import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';

const products = [
    {
        key: '1',
        image: require('../../assets/images/img1.jpg'),
        title: 'Trading System "Pro" version',
        price: '$10.00/month'
    },
    {
        key: '2',
        image: require('../../assets/images/img2.jpg'),
        title: 'Trading System "Pro +" version',
        price: '$15.00/month'
    },
    {
        key: '3',
        image: require('../../assets/images/img3.jpg'),
        title: 'Technical Alalysis "Pro Version"',
        price: '$10.00/month'
    },
    {
        key: '4',
        image: require('../../assets/images/img4.jpg'),
        title: 'Field Analysis',
        price: '$10.00/month'
    }
]

function RecentProduct() {
  return (
    <div className='block products'>
        <h2>Recent Product</h2>
        <Row gutter={24}>
              {
                products.map(product => {
                    return (
                        <Col lg={6}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt='product'></img>
                                </div>
                                <h3>{product.title}</h3>
                                <div className='price'>{product.price}</div>
                                <Button type='primary'>Add to basket</Button>
                            </div>
                        </Col>
                    )
                })
              }
        </Row>
    </div>
  )
}

export default RecentProduct