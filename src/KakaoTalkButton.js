import React, { useEffect, useRef } from 'react';

const KakaoTalkButton = ({ userId }) => {
  const chatButtonRef = useRef(null);

  // 1:1 채팅 열기 함수 정의
  const openKakaoTalkChat = () => {
    window.Kakao.Link.sendTalkLink({
      label: '1:1 채팅으로 이동',
      webLink: {
        text: '1:1 채팅으로 이동',
        url: `https://your-app-url/user-chat/${userId}`, // 유저와의 채팅 페이지 URL
      },
    });
  };

  useEffect(() => {
    // 환경 변수에서 앱 키 가져오기
    const appKey = process.env.REACT_APP_KAKAO_MAP_API_KEY;

    // Kakao SDK 초기화
    window.Kakao.init(appKey)
      .then(() => {
        // 1:1 채팅 열기 버튼 클릭 시 함수 호출
        chatButtonRef.current.addEventListener('click', openKakaoTalkChat);
      })
      .catch((error) => {
        console.error('Kakao SDK initialization failed', error);
      });

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      chatButtonRef.current.removeEventListener('click', openKakaoTalkChat);
    };
  }, [userId]);

  return (
    <div>
      <h1>KakaoTalk Chat</h1>
      <button ref={chatButtonRef} id="openChatBtn">1:1 채팅 열기</button>
    </div>
  );
};

export default KakaoTalkButton;