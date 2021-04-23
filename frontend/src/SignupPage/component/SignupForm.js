import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from "axios"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const SignupForm = () => {
  const onFinish = (values) => {
    console.log('Submit Register Form Success');
    axios.post(`http://localhost:5000/user/signup`, {
      uid: values.uid,
      userName: values.userName,
      email: values.email,
      password: values.password
    }, { 
      headers: { "Content-Type": "application/json" },
    })
    .then(response => response.status)
    .catch(err => console.warn(err.response));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="UID"
        name="uid"
        rules={[
          {
            required: true,
            message: 'Please input your uid!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Username"
        name="userName"
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;