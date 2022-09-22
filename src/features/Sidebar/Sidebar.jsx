import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Sidebar.css';
import { fetchProducts } from '../../store/product.slices';
import { slugFromName } from '../../utils';
import CollapseComponent from '../../components/Collapse';

const Sidebar = () => {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='sidebar-container'>
      <Link className='sidebar-link' to={'/tickets'}>
        All Tickets
      </Link>
      <CollapseComponent />
      {/* {data.products.map((product) => {
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
      })} */}
    </div>
  );
};

export default Sidebar;
