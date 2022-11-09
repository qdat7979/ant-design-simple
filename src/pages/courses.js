import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import { Dropdown, Space } from 'antd';

const products = [
  {
      key: '1',
      image: require('../assets/images/img1.jpg'),
      title: 'Trading System "Pro" version',
      price: '$10.00/month'
  },
  {
      key: '2',
      image: require('../assets/images/img2.jpg'),
      title: 'Trading System "Pro +" version',
      price: '$15.00/month'
  },
  {
      key: '3',
      image: require('../assets/images/img3.jpg'),
      title: 'Technical Alalysis "Pro Version"',
      price: '$10.00/month'
  },
  {
      key: '4',
      image: require('../assets/images/img4.jpg'),
      title: 'Field Analysis',
      price: '$10.00/month'
  },
  {
    key: '5',
    image: require('../assets/images/img5.jpg'),
    title: 'Field Analysis',
    price: '$10.00/month'
  },
  {
    key: '6',
    image: require('../assets/images/img6.jpg'),
    title: 'Field Analysis',
    price: '$10.00/month'
  },
  {
    key: '7',
    image: require('../assets/images/img7.jpg'),
    title: 'Field Analysis',
    price: '$10.00/month'
  },
  {
    key: '8',
    image: require('../assets/images/img8.jpg'),
    title: 'Field Analysis',
    price: '$10.00/month'
  }
]

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        High to Low
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Low to High
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Featured
      </a>
    ),
  },
];

function Courses() {
  return (
    <div className='block products shopPage'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>All Our Courses</h2>  
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <Button>Sort by</Button>
          </Dropdown>
        </div>

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
    </div>
  )
}

export default Courses