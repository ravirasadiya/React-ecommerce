import React from 'react';
import './menu-item.style.scss';

export const MenuItem = ({ title, id }) => (
  <div className='menu-item' key={id}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
