import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

import { getTicketById } from '../../api';
import './DetailTicket.scss';

const DetailTicket = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [ticket, setTicket] = useState(null);
  const { ticketId } = useParams();
  const navigate = useNavigate();

  const fetchDetailTicket = async (id) => {
    setIsFetching(true);
    const data = await getTicketById(id);
    setTicket(data.data.data);
    setIsFetching(false);
  };

  const backButtonHandler = () => {
    navigate('/tickets');
  };

  console.log(ticket);

  useEffect(() => {
    fetchDetailTicket(ticketId);
  }, []);

  return (
    <section className='container'>
      {isFetching ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className='container--header'>
            <LeftOutlined
              onClick={backButtonHandler}
              className='container--header__back-icon'
            />
            <h1 className='container--header__title'>Detail Ticket</h1>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailTicket;
