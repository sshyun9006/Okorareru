import React from 'react';

const PhoneLink = ({ phoneNumber }) => {
  const handleLinkClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <button className='telButton' onClick={handleLinkClick}></button>
  );
};

export default PhoneLink;