import React from 'react';

const KakaoTalkButton = ({ targetKakaoId, message }) => {
  const handleOpenKakaoTalk = () => {
    if (!targetKakaoId) {
      console.error('Target KakaoTalk ID is missing.');
      return;
    }

    // 카카오톡으로 특정 사용자와 1:1 대화를 시작하는 링크 생성
    const kakaoTalkLink = `kakaotalk://ti/p/${targetKakaoId}?text=${encodeURIComponent(
      message || '메시지 전송'
    )}`;

    // 카카오톡 어플 열기
    window.location.href = kakaoTalkLink;
  };

  return (

        <button className="kakao-talk-button" onClick={handleOpenKakaoTalk}> </button>
  );
};

export default KakaoTalkButton;