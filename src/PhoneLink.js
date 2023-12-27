import React from 'react';

const PhoneLink = ({ phoneNumber }) => {
  const handleLinkClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <button onClick={handleLinkClick}>
      전화 걸기
    </button>
  );
};

export default PhoneLink;