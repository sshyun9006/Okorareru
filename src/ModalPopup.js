import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalPopup = () => {
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
        <button onClick={handleButtonClick}>팝업 열기</button>
        
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="팝업"
          style={modalStyle}
        >
          <div>
            <p>히치히치야야야</p>
            <p>뚱뚱뚱뚱치</p>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </Modal>
      </div>
    );
  };
  

export default ModalPopup;