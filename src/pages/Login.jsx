import React from "react";
import Logo from "../assets/img/logo.png";
import Banner from "../assets/img/login.png";
import { Form, Input, Button, Checkbox , message} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
const Login = () => {
  const onFinish = (values) => {
    if (values.email === "behuz@gmail.com" && values.password === "123456") {
      message.sucess("Login muvaffaqiyatli");
    } else {
      message.error("Email yoki parol noto‘g‘ri");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="bg-white w-[1000px] rounded-xl shadow-lg flex items-center gap-20 p-10">
        <div className="w-[50%]">
          <img className="mb-10 w-[150px]" src={Logo} alt="" />
          <h1 className="text-[36px] font-semibold mb-2">Login</h1>
          <p className="text-gray-600 mb-8">
            Login to access your travelwise account
          </p>

          <Form name="login" layout="vertical" onFinish={onFinish}>
            <Form.Item
              lable="Email"
              name="email"
              rules={[{ required: true, alert: "email kerting" }]}
            >
              <Input prefix={<MailOutlined />} size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, alert: "Parol kiriting" }]}
            >
              <Input.Password prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <div className="flex justify-between items-center mb-4">
              <Checkbox>Remember me</Checkbox>
              <Button type="link">Forgot password?</Button>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
            >
              Login
            </Button>
          </Form>
          <p className="text-center mt-5">
            Don't have an account?
            <a href="/register" className="text-blue-700">
              Sign up
            </a>
          </p>
        </div>
        <div className="w-[55%] flex justify-center">
          <img src={Banner} className="w-[380px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
