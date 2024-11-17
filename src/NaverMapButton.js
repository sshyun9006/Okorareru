import React from 'react';

const NaverMapButton = () => {
  const handleOpenNaverMap = () => {
    // 좌표 정보
    const latitude = 37.563862;
    const longitude = 126.986175;

    // 네이버 지도 앱 스키마 URL
    const naverAppUrl = `nmap://place?lat=${latitude}&lng=${longitude}&name=명동성당 파밀리아채플`;

    // 네이버 지도 웹 URL (앱이 없는 경우 대비)
    const naverWebUrl = `https://map.naver.com/v5/search/명동성당%20파밀리아채플?c=${longitude},${latitude},16,0,0,0,dh`;

    // 네이버 지도 앱 열기 시도
    window.location.href = naverAppUrl;

    // 1초 후 앱 호출 실패 시 웹 URL 열기
    setTimeout(() => {
      window.open(naverWebUrl, '_blank');
    }, 1000);
  };

  return (
    <button className="btnNaverMap" onClick={handleOpenNaverMap}>
      네이버 지도 열기
    </button>
  );
};

export default NaverMapButton;
