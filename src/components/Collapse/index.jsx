import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from 'antd';

import { fetchProducts } from '../../store/product.slices';
import { slugFromName } from '../../utils';

const { Panel } = Collapse;

const CollapseComponent = ({ children }) => {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header={'Product Category'}>
        {data.products.map((product) => {
          const slug = slugFromName(product.productName);
          return (
            <Link
              key={product.productCode}
              className='sidebar-link'
              to={`${slug}`}
            >
              {product.productName}
            </Link>
          );
        })}
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent;
