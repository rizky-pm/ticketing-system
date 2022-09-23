import React from 'react';

import './TicketCard.scss';

const TicketCard = ({ data }) => {
  console.log(data);
  return (
    <div className='card-container'>
      <p className='card--text__title'>
        {data.title} #{data.id}
      </p>
      <p className='card--text__customerName'>{data.customerName}</p>
      <div className='card--tag'>
        {renderTag(data)}
        <span className='card--tag-status'>{data.statusName}</span>
      </div>
    </div>
  );
};

const renderTag = (data) => {
  switch (data.priorityName) {
    case 'Low':
      return (
        <span className='card--tag-priority__low'>{data.priorityName}</span>
      );

    case 'Medium':
      return (
        <span className='card--tag-priority__medium'>{data.priorityName}</span>
      );

    case 'High':
      return (
        <span className='card--tag-priority__high'>{data.priorityName}</span>
      );

    default:
      break;
  }
};

export default TicketCard;
