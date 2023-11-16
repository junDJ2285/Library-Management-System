
import  "./sigin.css";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate()
  const onFinish = (values) => {
    const exitedvalues = JSON.parse(localStorage.getItem("signup"))|| [];

    const updatedValues = [...exitedvalues,values];
   localStorage.setItem("signup", JSON.stringify(updatedValues));
  

    navigation("/")
    console.log('signup:',updatedValues);

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
   
  };
  return(
    <div>
  <Form
  className="sigin-form"
    name="signup"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }}
   
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="on"
  >
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
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
          message: 'Please input your userEmail!',
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

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
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
)
}


export default Login;
