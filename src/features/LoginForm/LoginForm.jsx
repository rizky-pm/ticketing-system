import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Alert } from 'antd';

import Spinner from '../../components/Spinner/Spinner';

import { loginUser } from '../../api';

import './LoginForm.css';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await loginUser(values);
    setIsLoading(false);

    if (res.status === 200) {
      return navigate('/');
    }

    if (res.response.status === 401) {
      setError(res.response.data.message);
    }
  };

  return (
    <Form name='basic' layout='vertical' onFinish={onSubmit} autoComplete='off'>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        initialValue='superadmin'
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        initialValue='superadmin'
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button disabled={isLoading} block type='primary' htmlType='submit'>
          {isLoading ? <Spinner /> : 'Login'}
        </Button>
      </Form.Item>

      {error && (
        <Form.Item>
          <Alert type='error' className='text-center' message={error} />
        </Form.Item>
      )}

      <Form.Item>
        <p className='text-center'>
          Don't have an account?{' '}
          <span className='text-highlighted'>Sign up</span>
        </p>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
