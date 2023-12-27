import './App.css';
import './index.css';
import copyBtn from "./img/copyBtn.png";
import chiGif from './img/babyChi.gif';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive' //반응형 적용
import {CopyToClipboard} from "react-copy-to-clipboard/src"; // 복사기능
import React from 'react';
import DDayCounter from './DDayCounter'; // DDayCounter 파일의 경로에 맞게 수정
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ModalPopup from './ModalPopup';
import PhoneLink from './PhoneLink';

// git add src/수정한 js 파일 or css or  ----> 
// --->  add . 사용 (다음 변경(commit)을 기록할 때까지 변경분을 모아놓기 위해서 사용 OR -A 사용 (작업 디렉토리 내의 모든 변경 내용을 몽땅 스테이징 영역으로 넘기고 싶을 때)

// git commit src/수정한 파일 -m "커밋내용"
// git push origin master

function App() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  useEffect(() => {
    setScreenSize();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'});
  const images = [ // esdrop 사이트 이미지 url 생성
    { // 1
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/bI3O36qZfW.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/bI3O36qZfW.jpg',
    },
    { // 2
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/Xrb2rN62Sm.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/Xrb2rN62Sm.jpg',
    },
    { // 3
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/vQj7eHaA1D.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/vQj7eHaA1D.jpg',
    },
    { // 4
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/8NAQgbjmdP.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/8NAQgbjmdP.jpg',
    },
    { // 5
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/imX4U0Z1Af.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/imX4U0Z1Af.jpg',
    },
    { // 6
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/57x9MmTdmH.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/57x9MmTdmH.jpg',
    },
    { // 7
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/D16A4qOfZc.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/D16A4qOfZc.jpg',
    },
    { // 8
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/UjnisSz3Rs.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/UjnisSz3Rs.jpg',
    },
    { // 9
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/reRR6B3B0z.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/reRR6B3B0z.jpg',
    },
  ];
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
  
    const openModal = (index) => {
      setModalIndex(index);
      setModalIsOpen(true);
    };
    
  // 복사할 문장
  const accountNumberText = '뭐라도 복사';
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => { // 클릭 이벤트
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // 클릭 후 '복사되었습니다' 문장 2초 후 삭제
  };




  

  return (
    <div className="wrapper">

      {isDesktopOrMobile !== true ? 
        <div style={{border:"1px solid #DBDBDB", width:"1000px", textAlign: "center"}}>
          {/** 데스크탑으로 접속 시 메시지 표시--*/}
        <h1>모바일로 접속해주세요</h1>
      </div>
       : 
      <div style={{border:"1px solid #DBDBDB", width:"100%"}}>
        {/** 모바일 화면 시작 */}

        <DDayCounter /> {/* D-day 카운터 */}

        {/* gif 화면 적용*/} 
      <img src={chiGif} style={{ width: '100%', height: '100%' }} />
      
      <p className="desc3" style={{ opacity: (position + 10) / 200, marginTop: "200px"}}> 나랏말싸미 듕귁에 달아 문자와로 사맛디 아니할쎄</p>
      <p className="desc3" style={{ opacity: (position - 100) / 200, }} > 이런 젼차로 어린 백셩이 니르고져 홇베이셔도 </p>
      <p className="desc3" style={{ opacity: (position - 200) / 200, }} > 마참내 제 뜨들 시러펴디 몯핧 노미하니라 </p>
      <p className="desc3" style={{ opacity: (position - 300) / 200, }} > 내 이랄 윙하여 어엿비너겨 새로 스믈 여덟 짜랄 맹가노니 </p>
      <p className="desc3" style={{ opacity: (position - 400) / 200, marginBottom: "200px"}} > 사람마다 해여 수비니겨 날로 쑤메 뻔한킈 하고져 할따라미니라 </p>

      <p className="desc5">갤러리</p>

      {/** 이미지 갤러리 */}
      <Gallery items={images} onClick={(e) => openModal(e.index)} />
      {/** 이미지 갤러리 END */}


      {/** 팝업버튼 */}
      <ModalPopup />
        <div>
      <PhoneLink phoneNumber="01095603936" />
      </div>

      {/* 계좌번호 복사버튼 */}

      <CopyToClipboard text={accountNumberText} onCopy={handleCopyClick}>
        <img
          src={copyBtn} // 이미지 경로
          style={{cursor: 'pointer', width: '80%', height: '59px'}}
        />
        </CopyToClipboard>

      {copied && <span style={{ color: 'black', fontSize: '10px' }}>복사 되었습니다.</span>}

    {/* 계좌번호 복사버튼 END */}
      
      </div>} {/** isDesktopOrMobile END */}

       {/**className="wrapper End */}
    </div>
  );
}

export default App;
