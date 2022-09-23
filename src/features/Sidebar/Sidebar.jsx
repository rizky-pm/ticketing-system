import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Sidebar.css';
import { fetchProducts } from '../../store/product.slices';
import CollapseComponent from '../../components/Collapse';

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;
