import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined, FileOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/id';

import { getTicketById } from '../../api';
import './DetailTicket.scss';
import { downloadFile, kebabCase } from '../../utils';

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

          <div className='container--content'>
            <h1 className='container--content__title'>{ticket?.title}</h1>
            <p className='container--content__customer-name'>
              By {ticket?.customerName}
            </p>
            <p className='container--content__date'>
              {moment(ticket?.createdAt).format('dddd, Do MMMM YYYY -- HH:mm')}
            </p>
            <p className='container--content__desc'>
              {ticket?.description} Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Beatae accusamus ut iure perspiciatis illo esse
              provident qui incidunt unde officiis officia ipsa, quaerat
              inventore ratione aliquam eligendi. Accusamus, tenetur maxime.
            </p>

            {ticket?.fileId ? (
              <div
                className='container--content__attachment'
                onClick={() => {
                  downloadFile(ticket);
                }}
              >
                <FileOutlined className='container--content__attachment--icon' />
                <span className='container--content__attachment--fileName'>
                  {kebabCase(ticket?.title) + '_attachment.' + ticket.fileExt}
                </span>
              </div>
            ) : (
              <p>There is no attachment</p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default DetailTicket;
