import React from 'react';

const NaverMapButton = () => {
  const handleOpenNaverMap = () => {
    // 좌표 정보 
    const latitude = 37.5656326031847;
    const longitude = 126.97847432656822;

    // 네이버 지도 URL 스키마 구성
    const naverMapUrl = `nmap://place?lat=${latitude}&lng=${longitude}&name=서울광장`;

    // 새 창에서 네이버 지도 열기
    window.open(naverMapUrl, '_blank');
  };

  return (
      <button className={'btnNaverMap'} onClick={handleOpenNaverMap}>네이버 지도 열기</button>
  );
};

export default NaverMapButton;