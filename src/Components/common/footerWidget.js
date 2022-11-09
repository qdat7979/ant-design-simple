import React from 'react'
import { Col, Row } from 'antd';
import { Avatar, List } from 'antd';
import { Tag } from 'antd';

const data = [
    {
        image: require('../../assets/images/img-footer1.jpg'),
        title: 'Ant Design Title 1',
        cost: '$2.50',
        link: 'https://www.google.com'
    },
    {
        image: require('../../assets/images/img-footer2.jpg'),
        title: 'Branston Baked Beans in a Rich',
        cost: '$2.50',
        link: 'https://www.google.com'
    },
    {
        image: require('../../assets/images/img-footer3.jpg'),
        title: 'Branston Baked Beans in a Rich',
        cost: '$3.50',
        link: 'https://www.google.com'
    }
];

const data2 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];



function FooterWidget() {
  return (
    <div className='footerWidget'>
        <div className='container'>
            <Row gutter={24}>
                {/* featured */}
                <Col md={6}>
                    <h3>Featured</h3>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src= {item.image} />}
                            title={<a href={item.link}>{item.title}</a>}
                            description={item.cost} 
                            />
                        </List.Item>
                        )}
                    />
                </Col>
                    
                {/* top rated */}
                <Col md={6}>
                    <h3>Top Rated</h3>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src= {item.image} />}
                            title={<a href={item.link}>{item.title}</a>}
                            description={item.cost} 
                            />
                        </List.Item>
                        )}
                    />
                </Col>

                {/* tags */}
                <Col md={6}>
                    <h3>Tags</h3>
                    <div className='tags'>
                        <Tag closable><a href='https://www.google.com'>Trading</a></Tag>
                        <Tag closable><a href='https://www.google.com'>CFA</a></Tag>
                        <Tag closable><a href='https://www.google.com'>Analysis</a></Tag>
                        <Tag closable><a href='https://www.google.com'>Finance</a></Tag>
                        <Tag closable><a href='https://www.google.com'>Crypto</a></Tag>
                    </div>
                </Col>

                {/* recent posts */}
                <Col md={6}>
                    <h3>Recent Posts</h3>
                    <List
                        size="small"
                        // header={<div>Header</div>}
                        // footer={<div>Footer</div>}
                        className='recentPost'
                        dataSource={data2}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FooterWidget