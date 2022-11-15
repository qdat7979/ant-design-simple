import React from 'react'
import { Col, Row } from 'antd';


const productCategories = [
    {
        key: '1',
        image: require('../../assets/images/img15.jpg'),
        title: 'Frozen'
    },
    {
        key: '2',
        image: require('../../assets/images/img16.jpg'),
        title: 'Frozen'
    },
    {
        key: '3',
        image: require('../../assets/images/img17.jpg'),
        title: 'Frozen'
    },
    {
        key: '4',
        image: require('../../assets/images/img18.jpg'),
        title: 'Frozen'
    },
    {
        key: '5',
        image: require('../../assets/images/img19.jpg'),
        title: 'Frozen'
    },
    {
        key: '6',
        image: require('../../assets/images/img20.jpg'),
        title: 'Frozen'
    },
    {
        key: '7',
        image: require('../../assets/images/img21.jpg'),
        title: 'Frozen'
    },
    {
        key: '8',
        image: require('../../assets/images/img22.jpg'),
        title: 'Frozen'
    },
    {
        key: '9',
        image: require('../../assets/images/img23.jpg'),
        title: 'Frozen'
    },
    {
        key: '10',
        image: require('../../assets/images/img24.jpg'),
        title: 'Frozen'
    },
    {
        key: '11',
        image: require('../../assets/images/img25.jpg'),
        title: 'Frozen'
    },
    {
        key: '12',
        image: require('../../assets/images/img26.jpg'),
        title: 'Frozen'
    }
]
function ProductCategories() {
  return (
    <div className='block productCategories'>
        <h2>Product Categories</h2>
        <Row gutter={[24,24]}>
            {
                productCategories.map(product => {
                    return (
                        <Col xs={8} sm={8} md={6} lg={4} key={product.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt="product categories"/>
                                </div>
                                <h3>{product.title}</h3>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}

export default ProductCategories