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
        {renderPriorityTag(data.priorityName)}
        <span>{data.statusName}</span>
      </div>
    </div>
  );
};

const renderPriorityTag = (priority) => {
  switch (priority) {
    case 'High':
      return <span className='card--tag-priority__danger'>{priority}</span>;

    case 'Medium':
      return <span className='card--tag-priority__warning'>{priority}</span>;

    case 'Low':
      return <span className='card--tag-priority__success'>{priority}</span>;

    default:
      break;
  }
};

export default TicketCard;
