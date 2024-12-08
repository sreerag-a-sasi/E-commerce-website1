import React, { useState } from 'react';
import './DescriptionBox.css';

export const DescriptionBox = (props) => {
  const { product } = props;
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
          onClick={() => setActiveTab('description')}>
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
          onClick={() => setActiveTab('reviews')}>
          Reviews (122)
        </div>
      </div>
      {activeTab === 'description' ? (
        <div className="descriptionbox-description">
          <p>{product.description}</p>
        </div>
      ) : (
        <div className="descriptionbox-description">
          <div className="reviews">
            {/* Add your review content here */}
            <p>Review content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
}
