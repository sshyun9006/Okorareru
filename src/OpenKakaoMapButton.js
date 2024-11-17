import React from 'react';
import NaverMapButton from './NaverMapButton';

const OpenKakaoMapButton = () => {
  const handleOpenKakaoMap = () => {
    // 좌표 및 검색어 정보
    const latitude = 37.563862;
    const longitude = 126.986175;
    const placeName = encodeURIComponent('명동성당 파밀리아채플'); // 검색어를 URL에 인코딩

    // 카카오맵 앱 URL
    const kakaoAppUrl = `kakaomap://look?p=${latitude},${longitude}&q=${placeName}`;

    // 카카오맵 웹 URL (앱이 없는 경우 대비)
    const kakaoWebUrl = `https://map.kakao.com/link/map/${placeName},${latitude},${longitude}`;

    // 카카오맵 앱 열기 시도
    window.location.href = kakaoAppUrl;

    // 1초 후 앱 호출 실패 시 웹 URL 열기
    setTimeout(() => {
      window.open(kakaoWebUrl, '_blank');
    }, 1000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '30px',
        padding: '0 20px', // 양쪽 여백 추가
      }}
    >
      <button className="btnKakaoMap" onClick={handleOpenKakaoMap}>
        카카오맵 열기
      </button>
      <NaverMapButton />
    </div>
  );
};

export default OpenKakaoMapButton;
