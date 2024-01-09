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
import ModalPopMain from './ModalPopMain';
import PhoneLink from './PhoneLink';
import KakaoMap from './KakaoMap';

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
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/eI6cXOuVlq.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/eI6cXOuVlq.jpg',
    },
    { // 2
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/CwDPiEoLRn.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/CwDPiEoLRn.jpg',
    },
    { // 3
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/UVf3Vyde0E.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/UVf3Vyde0E.jpg',
    },
    { // 4
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/rA08OkDfwp.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/rA08OkDfwp.jpg',
    },
    { // 5
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/nt9KxoI3o5.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/nt9KxoI3o5.jpg',
    },
    { // 6
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/LSHhuRmBcQ.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/LSHhuRmBcQ.jpg',
    },
    { // 7
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/dIUQ8AhTKg.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/dIUQ8AhTKg.jpg',
    },
    { // 8
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/Zq24E3WrlI.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/Zq24E3WrlI.jpg',
    },
    { // 9
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/2Pb9IgRFYd.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/2Pb9IgRFYd.jpg',
    },
    { // 10
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/KFjBj6MMQt.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/KFjBj6MMQt.jpg',
    },
    { // 11
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/g4glz4O59q.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/g4glz4O59q.jpg',
    },
    { // 12
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/4Y1Uwh0Dax.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/4Y1Uwh0Dax.jpg',
    },
    { // 13
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/BC9zo64VJR.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/BC9zo64VJR.jpg',
    },
    { // 14
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/SwHrcNttkh.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/SwHrcNttkh.jpg',
    },
    { // 15
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/qVUaKHoHXJ.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/qVUaKHoHXJ.jpg',
    },
    { // 16
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/mK3nlueOPe.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/mK3nlueOPe.jpg',
    },
    { // 17
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/0tcWZXD7yu.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/0tcWZXD7yu.jpg',
    },
    { // 18
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/cSk1RbJiv1.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/cSk1RbJiv1.jpg',
    },
    { // 19
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/YINt10mx9V.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/YINt10mx9V.jpg',
    },
    { // 20
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/vqrb2mhEal.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/vqrb2mhEal.jpg',
    },
    { // 20
      original: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/JPAFpqXWIC.jpg',
      thumbnail: 'https://i.esdrop.com/d/f/oHOtFsEQ4n/JPAFpqXWIC.jpg',
    },
  ];
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
  
    const openModal = (index) => {
      setModalIndex(index);
      setModalIsOpen(true);
    };
    
  // 복사할 문장
  const accountNumberText = '서울시 서대문구 홍제천로 190-12';
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => { // 클릭 이벤트
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // 클릭 후 '복사되었습니다' 문장 1초 후 삭제
  };

  // 선 그리기
  const hrStyle = {
    border: 'none', 
    borderTop: '2px solid #cd853f',
    width: '105px', 
    marginTop: '-20px', 
    marginLeft: "45px",
  };

  const hrStyle2 = {
    border: 'none', 
    borderTop: '2px solid #cd853f',
    width: '105px', 
    marginTop: '-10px', 
    marginLeft: "238px",
  };


  return (
    <div>

      {isDesktopOrMobile !== true ? 
        <div style={{border:"1px solid #DBDBDB", width:"1000px", textAlign: "center"}}>
          {/** 데스크탑으로 접속 시 메시지 표시--*/}
          
      </div>
       : 
      <div style={{border:"1px solid #DBDBDB", width:"100%"}}>
        {/** 모바일 화면 시작 */}
        <br />
        <DDayCounter /> {/* D-day 카운터 */}
        <br />
      

        <p className='mainTitle' style={{fontSize: "15px"}}> MM/DD </p>
        <p className='mainTitle' style={{lineHeight: "5%"}}> 홍길동 | 홍길동 </p>
        <p className='mainTitle'> COMMENT </p>

        <br />
        <br />
        <br />

        {/* gif 화면 적용*/} 
      <img src={chiGif} style={{ width: '95%', height: '100%', padding: '10px', marginBottom: '40px'}} />

      <p className='mainTitle' style={{lineHeight: "5%", fontSize: "20px"}}> YYYY. MM. DD. SAT PM HH.MM </p>
      <p className='mainTitle' style={{fontSize: "20px"}}> place </p>

      <br />
      <br />
      <br />
      <div className='commentImg'>
        <br/>
          <p className="desc3" style={{ opacity: (position + 10) / 200, marginTop: "150px"}}> 나랏말싸미 듕귁에 달아 문자와로 사맛디 아니할쎄</p>
          <p className="desc3" style={{ opacity: (position - 100) / 200, }} > 이런 젼차로 어린 백셩이 니르고져 홇베이셔도 </p>
          <p className="desc3" style={{ opacity: (position - 200) / 200, }} > 마참내 제 뜨들 시러펴디 몯핧 노미하니라 </p>
          <p className="desc3" style={{ opacity: (position - 300) / 200, }} > 내 이랄 윙하여 어엿비너겨 새로 스믈 여덟 짜랄 맹가노니 </p>
          <p className="desc3" style={{ opacity: (position - 400) / 200, marginBottom: "150px"}} > 사람마다 해여 수비니겨 날로 쑤메 뻔한킈 하고져 할따라미니라 </p>
          <br/>
      </div>

      {/** 전화연결 */}
      <div style={{ display: 'flex', alignItems: 'center', lineHeight: "5%", marginTop: "50px", color: "#cd853f"}}>
        <p style={{ marginLeft: '20%', marginTop: "25px", fontFamily: "JejuMyeongjo", fontWeight: "bold"}}>예제 &nbsp;&nbsp; </p> 
        <p style={{fontSize: '30px', marginRight: '20%', fontFamily: "JejuMyeongjo", fontWeight: "bold"}}> 홍길동 </p>
        <PhoneLink phoneNumber="01011111111" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-10px', lineHeight: "5%" , marginBottom: "50px", color: "#cd853f"}}>
        <p style={{ marginLeft: '20%', marginTop: "25px", fontFamily: "JejuMyeongjo", fontWeight: "bold"}}>예제 &nbsp;&nbsp; </p> 
        <p style={{fontSize: '30px', marginRight: '20%', fontFamily: "JejuMyeongjo", fontWeight: "bold"}}> 홍길동 </p>
        <PhoneLink phoneNumber="01022222222" />
      </div>

      <div style={{ display: 'flex', marginTop: '80px', marginBottom: "15px", color: "#cd853f", fontWeight: "bold"}}>
        <p style={{fontFamily: "JejuMyeongjo", marginLeft:"13.5%", fontWeight: "bold", fontSize:"18px"}}>신랑측 혼주</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p style={{fontFamily: "JejuMyeongjo", marginLeft:"20%", fontWeight: "bold", fontSize:"18px"}}>신부측 혼주</p>
      </div>
      <div>
      <hr style={hrStyle} />
      <hr style={hrStyle2} />
      </div>

        {/* 신랑측 혼주 */}
      <div style={{ display: 'flex', marginTop: '20px', marginBottom: "50px", color: "#cd853f"}}>
        <p style={{ fontSize: '14px', fontFamily: "JejuMyeongjo", marginTop: "15px", marginLeft:"10%", fontWeight: "bold"}}>텍스트</p> &nbsp;&nbsp;
        <p style={{fontSize: '25px', fontFamily: "JejuMyeongjo", marginTop: "5px", fontWeight: "bold"}}> 홍길동 </p>
        

        <p style={{fontSize: '14px', fontFamily: "JejuMyeongjo", marginLeft: "20%", marginTop: "15px", fontWeight: "bold"}}>텍스트 &nbsp;&nbsp; </p> 
        <p style={{fontSize: '25px', fontFamily: "JejuMyeongjo", marginTop: "5px", fontWeight: "bold"}}> 홍길동 </p>
      </div>

      <div style={{ display: 'flex', marginTop: '-55px', marginBottom: "50px", marginLeft: "20%"}}>
        <PhoneLink phoneNumber="01033333333" />

        <div style={{ display: 'flex', marginLeft: "56%"}}>
          <PhoneLink phoneNumber="01044444444" />
        </div>

      </div>

        {/* 신부측 혼주 */}
      <div style={{ display: 'flex', marginTop: '-20px', marginBottom: "50px", color: "#cd853f"}}>
        <p style={{ fontSize: '14px', fontFamily: "JejuMyeongjo", marginTop: "15px", marginLeft:"10%", fontWeight: "bold"}}>텍스트</p> &nbsp;&nbsp;
        <p style={{fontSize: '25px', fontFamily: "JejuMyeongjo", marginTop: "5px", fontWeight: "bold"}}> 홍길동 </p>
        

        <p style={{fontSize: '14px', fontFamily: "JejuMyeongjo", marginLeft: "20%", marginTop: "15px", fontWeight: "bold"}}>텍스트 &nbsp;&nbsp; </p> 
        <p style={{fontSize: '25px', fontFamily: "JejuMyeongjo", marginTop: "5px", fontWeight: "bold"}}> 홍길동 </p>
      </div>

      <div style={{ display: 'flex', marginTop: '-55px', marginBottom: "50px", marginLeft: "20%"}}>
        <PhoneLink phoneNumber="01055555555" />

        <div style={{ display: 'flex', marginLeft: "56%"}}>
          <PhoneLink phoneNumber="01066666666" />
        </div>

      </div>      

      {/** 이미지 갤러리 */}
      <div className='mainTitle' style={{marginBlock: "20px", marginTop: "80px", marginBottom: "50px"}}>
        - Gallary -
      </div>
      <Gallery items={images} onClick={(e) => openModal(e.index)} />

      {/** 카카오맵 버튼 */}
      <div style={{marginTop: "150px"}}>
        <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', fontFamily: 'JejuMyeongjo', color: "#cd853f"}}>- 오시는 길 -</p>
        <KakaoMap /> 
      </div>

      {/* 계좌번호 복사버튼 */}
      <div>        
        <p style={{fontFamily: "JejuMyeongjo", fontSize: '20px', fontWeight: "bold"}}> 히바오집 10층</p>
        <p style={{marginTop:"-37px",fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 서울시 서대문구 홍제천로 190-12
        <CopyToClipboard text={accountNumberText} onCopy={handleCopyClick}>
          <img src={copyBtn} style={{height:"40px"}}/>
        </CopyToClipboard>
        </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 02-000-0000 </p>

        <p style={{fontFamily: "JejuMyeongjo", fontSize: '20px', fontWeight: "bold"}}> 지하철 안내</p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 3호선 홍제역 하차(1번출구) </p>

        <p style={{fontFamily: "JejuMyeongjo", fontSize: '20px', fontWeight: "bold"}}> 버스 안내</p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 홍제역 하차, 서대문구청 하차 </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 지선버스(초록): 7016, 7018 </p>

        <p style={{fontFamily: "JejuMyeongjo", fontSize: '20px', fontWeight: "bold"}}> 마음 전할 곳 </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 신랑 측 혼주: </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 국민은행 000-000000-00000 (예금주: 홍길동)</p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 국민은행 000-000000-00000 (예금주: 홍길동)</p>
        <br/>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 신부 측 혼주: </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 국민은행 000-000000-00000 (예금주: 홍길동)</p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 국민은행 000-000000-00000 (예금주: 홍길동)</p>
        <br />
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 신랑: 국민은행 000-000000-00000 (예금주: 홍길동)</p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 신부: 국민은행 000-000000-00000 (예금주: 홍길동)</p>

        <p style={{fontFamily: "JejuMyeongjo", fontSize: '20px', fontWeight: "bold"}}> 기타안내 </p>
        <p style={{marginTop:"-10px", fontFamily: "JejuMyeongjo", fontSize: '15px'}}> 히치 살빼야데!! </p>

        {/** 팝업버튼 */}
        <div>
          <ModalPopMain />
        </div>

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div style={{backgroundColor:"#808080", height:"100px", lineHeight:"100px", textAlign:"center", margin:"auto", fontFamily: 'JejuMyeongjo', fontWeight: "bold"}}>
        YYYY. MM. DD
      </div>

      <br/>
      <br/>

      <div className='madeBy'>
        made by ssh
      </div>
      <br/>
      <br/>


      </div>} {/** isDesktopOrMobile END */}

       {/**className="wrapper End */}
    </div>
  );
}

export default App;
