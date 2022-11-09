import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';

const products = [
    {
        key: '1',
        image: require('../../assets/images/img5.jpg'),
        title: 'How to be a broker?',
        price: '$20.00',
        saleprice: '$15.00'
    },
    {
        key: '2',
        image: require('../../assets/images/img6.jpg'),
        title: 'Fundamental Analysis',
        price: '$300.00',
        saleprice: '$250.00'
    },
    {
        key: '3',
        image: require('../../assets/images/img7.jpg'),
        title: 'Macro Economic',
        price: '$50.00',
        saleprice: '$45.00'
    },
    {
        key: '4',
        image: require('../../assets/images/img8.jpg'),
        title: 'Pre-CFA Charter Holder',
        price: '$50.00',
        saleprice: '$45.00'
    }
]

function SaleProducts() {
  return (
    <div className='block products'>
        <h2>Sale Products</h2>
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
                                <div className='price'>
                                    <span className='salePrice'>{product.saleprice}</span>
                                    {product.price}
                                </div>
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

export default SaleProducts