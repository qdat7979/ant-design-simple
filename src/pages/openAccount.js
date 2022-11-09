import React from 'react';
import { Button, Form, Input, InputNumber, Checkbox } from 'antd';

function OpenAccount() {
  return (
    <div className='block contactPage'>
      <div className='container'>
        <h2>Open Account</h2>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default OpenAccount