import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalPopup from './ModalPopup';
import ModalPopup2 from './ModalPopup2';

const ModalPopMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const modalStyle = {
      content: {
        width: '80%', // 가로 크기를 화면의 90%로 설정
        height: '500px',
        maxWidth: '400px', // 최대 가로 크기를 400px로 제한
        left: 20,
      },
    };
  
    return (
        
      <div>
        <p style={{fontFamily:"YeongdeokSea", fontWeight:"bold", fontSize:"20px", color:"#cd853f"}}> 영덕바다체 가나다라마바사아자차카타파하</p>
        <p style={{fontFamily:"JejuMyeongjo", fontWeight:"bold", fontSize:"20px", color:"#eee6c4"}}> 제주명조체 가나다라마바사아자차카타파하</p>
        <p style={{fontFamily:"omyuPretty", fontWeight:"bold", fontSize:"20px", color:"#deb887"}}> 오뮤 다예쁨체 가나다라마바사아자차카타파하</p>
        <p style={{fontFamily:"Cafe24Ssurround", fontWeight:"bold", fontSize:"20px", color:"#eee6c4"}}> 카페24 서라운드체 가나다라마바사아자차카타파하</p>

        <button className={'btnHelped'} onClick={handleButtonClick}>Those who helped</button>
        
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="팝업"
          style={modalStyle}
        >
        <ModalPopup />

        <ModalPopup2 />

          <div>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </Modal>
      </div>
    );
  };
  

export default ModalPopMain;