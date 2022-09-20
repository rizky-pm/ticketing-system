import React from 'react';
import { Col, Row } from 'antd';

import LoginForm from '../../features/LoginForm/LoginForm';

import './LoginPage.css';

const LoginPage = () => {
  return (
    <Row justify='center' align='middle'>
      <Col
        xs={{ span: 18 }}
        sm={{ span: 14 }}
        md={{ span: 10 }}
        lg={{ span: 6 }}
      >
        <div className='form-container'>
          <h1 className='heading-1'>Login</h1>
          <LoginForm />
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
