import React from "react";
import Logo from "../assets/img/logo.png";
import Banner from "../assets/img/register.png";
import { Form, Input, Button, Checkbox , message} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const SingUp = () => {
  const onFinish = (values) => {
    message.success("Hisob muvaffaqiyatli yaratildi");
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="bg-white w-[1100px] rounded-xl shadow-lg flex items-center gap-20 p-10">
        <div className="w-[50%] flex justify-center">
          <img src={Banner} className="w-[350px]" alt="" />
        </div>
        <div className="w-[50%]">
          <img src={Logo} lassName="mb-[100px] w-[150px]" alt="" />

          <h1 className="text-[36px] font-semibold mb-2">Sign up</h1>
          <p className="text-gray-600 mb-8">
            Let’s get you all set up so you can access your account.
          </p>

          <Form layout="vertical" onFinish={onFinish}>
            <div className="flex gap-4">
              <Form.Item
                label="Ism"
                name="fname"
                rules={[{ required: true, message: "Ism kiriting" }]}
                className="w-full"
              >
                <Input prefix={<UserOutlined />} size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lname"
                className="w-full"
                rules={[{ required: true, message: "Familiya kiriting!" }]}
              >
                <Input prefix={<UserOutlined />} size="large" />
              </Form.Item>
            </div>

            <div className="flex gap-4">
              <Form.Item
                label="Email"
                name="email"
                className="w-full"
                rules={[{ required: true, message: "Email kiriting!" }]}
              >
                <Input prefix={<MailOutlined />} size="large" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                className="w-full"
                rules={[{ required: true, message: "Telefon kiriting!" }]}
              >
                <Input prefix={<PhoneOutlined />} size="large" />
              </Form.Item>
            </div>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "parol kiriting" }]}
            >
              <Input.Password prefix={<LockOutlined />} size="large" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "parolni tasdiqlang" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("parollar mos emas");
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <Checkbox className="mb-4">
              I agree to the Terms and Privacy Policy
            </Checkbox>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
            >
              Create account
            </Button>
          </Form>
          <p className="text-center mt-5">
            Already have an account?
            <a href="/" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
