import React from 'react';

import './style.css';

const TicketCard = ({ data }) => {
  console.log(data);
  return (
    <div className='card-container'>
      <p className='card--text__title'>
        {data.title} #{data.id}
      </p>
      <p className='card--text__customerName'>{data.customerName}</p>
      <div className='card--tag'>
        <span className='card--tag-priority__danger'>{data.priorityName}</span>
        <span>{data.statusName}</span>
      </div>
    </div>
  );
};

export default TicketCard;
