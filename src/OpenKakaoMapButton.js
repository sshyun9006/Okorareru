import React from 'react';
import NaverMapButton from './NaverMapButton';

const OpenKakaoMapButton = () => {
  const handleOpenKakaoMap = () => {
    // 좌표 정보 
    const latitude = 37.5656326031847;
    const longitude = 126.97847432656822;
    
    // 카카오맵 URL 스키마 구성
    const kakaoMapUrl = `kakaomap://look?p=${latitude},${longitude}`;

    // 새 창에서 카카오맵 열기
    window.open(kakaoMapUrl, '_blank');
  };

  return (
    <div>
      <button className={'btnKakaoMap'} onClick={handleOpenKakaoMap}>카카오맵 열기 </button> <NaverMapButton />
      
    </div>
  );
};

export default OpenKakaoMapButton;