import React from "react";
import { Form, Input, Button, Divider } from "antd";
import "./Login.css";
import Kakao from './oAuth/Kakao';
import Google from "./oAuth/Google";
import Facebook from "./oAuth/Facebook";

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

function Login() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Google />
      {/* <Button>Login with Naver</Button> */}
      {/* <div id="naverIdLogin" className="naver-login"></div> */}
      {/* <Button
        className="naver-login"
        onClick={loginWithNaver}
        size="large"
        block
      >
        <img
          className="naver-login-img"
          src="/assets/네이버 아이디로 로그인_아이콘형_White.PNG"
          alt="naverLogin"
        />
        Login with Naver
      </Button> */}
      <Facebook />
      <Kakao />
    </div>
  );
}

export default Login;
