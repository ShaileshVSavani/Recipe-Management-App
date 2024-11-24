

import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../../../public/assets/logo.svg";
import "../../../styles/register.css";
import Spinner from "../../../components/Spinner.jsx";
import API_BASE_URL from "../../../constant.js";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      await axios.post(`${API_BASE_URL}/api/v1/users/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      setIsLoading(false);
      message.success("Registration successful");
      navigate("/auth/login");
    } catch (err) {
      setIsLoading(false);
      message.error("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="formContainer">
      <Form
        form={form}
        onFinish={onFinish}
        className="registerForm"
        layout="vertical"
      >
        <div className="registerFormLogo">
          <img src={logo} alt="App Logo" className="registerLogo" />
          <h2 className="formTitle">Create a New Account</h2>
        </div>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" className="formInput" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Email" className="formInput" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" className="formInput" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="registerButton"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Register"}
          </Button>
          <div className="formLinks">
            <Link to="/auth/login" className="formLink">
              Already have an account? Login
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
