import React from 'react';
import { Row, Col } from 'antd';
import { Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from '../../features/Sidebar/Sidebar';

const HomePage = () => {
  const data = useLoaderData();

  return (
    <Row>
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default HomePage;
