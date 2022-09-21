import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import './Spinner.css';

const LoadingIcon = <LoadingOutlined className='spinner' spin />;

const Spinner = () => <Spin indicator={LoadingIcon} />;

export default Spinner;
