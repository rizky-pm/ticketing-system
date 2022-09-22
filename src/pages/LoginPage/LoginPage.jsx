import React from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../features/LoginForm/LoginForm';

import './LoginPage.css';
import LoginIllustration from '../../assets/illustrations/login.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  if (user) {
    navigate('/home');
  }

  return (
    <Row justify='space-between' align='middle'>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <h2 className='logo'>Ticket System</h2>
        <Row justify='center' align='middle'>
          <Col xs={{ span: 20 }} sm={{ span: 12 }} md={{ span: 12 }}>
            <h1 className='heading-1'>Welcome Back</h1>
            <p>Welcome back! Please enter your details</p>
            <LoginForm />
          </Col>
        </Row>
        <p className='copyright'>© RPM 2022</p>
      </Col>
      <Col xs={{ span: 0 }} lg={{ span: 12 }}>
        <Row justify='center' align='middle'>
          <Col xs={{ span: 20 }} sm={{ span: 12 }} md={{ span: 22 }}>
            <img
              className='login-illustration'
              src={LoginIllustration}
              alt='Login illustration'
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
