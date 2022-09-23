import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import { fetchTickets } from '../../store/ticket.slice';

import TicketCard from '../../components/TicketCard';

import './AllTicket.css';

const AllTicket = () => {
  const [data, setData] = useState([]);

  const dataTicket = useSelector((state) => state.ticket);
  const dataProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const filterData = () => {
    const filteredData = [];
    dataProduct.products.forEach((product) => {
      const tickets = dataTicket.tickets.filter(
        (ticket) => ticket.productId === product.id
      );
      filteredData.push({
        product,
        tickets,
      });
    });

    setData(filteredData);
  };

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  useEffect(() => {
    filterData();
  }, [dataTicket, dataProduct]);

  return (
    <div className='section-container'>
      <Row justify='space-between'>
        {data.map((item, index) => {
          console.log(item);
          return (
            <Col key={index} span={Math.ceil(24 / data.length - 1)}>
              {/* data */}
              <div className='category-container'>
                <div className='category-header'>
                  <span className='category-title'>
                    {item.product.productName} ({item.tickets.length})
                  </span>
                </div>
                {item.tickets.map((data, index) => {
                  return <TicketCard key={index} data={data} />;
                })}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AllTicket;
