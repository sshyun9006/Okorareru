import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalPopup2 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputNumber, setInputNumber] = useState('');
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const handleButtonClick = () => {
      // 버튼을 클릭했을 때 특정 번호를 확인하고 모달을 열거나 열지 않습니다.
      if (inputNumber === '4220') {
        openModal();
      }
    };

    const modalStyle = {
        content: {
          width: '80%', // 가로 크기를 화면의 90%로 설정
          height: '500px',
          maxWidth: '400px', // 최대 가로 크기를 400px로 제한
          left: 20,
        },
      };

    const handleInputChange = (event) => {
      // 입력창의 값이 변경될 때마다 상태를 업데이트합니다.
      setInputNumber(event.target.value);
    };
  
    return (
      <div>

        {/* 특정 번호를 입력하는 창 */}

        <label>
          입력 : &nbsp;
          <input
            type="text"
            value={inputNumber}
            onChange={handleInputChange}
            style={{width: "40px"}}
          />
          &nbsp;&nbsp;
        </label>

        <button onClick={handleButtonClick}>전달된 번호 입력</button>
  
        {/* 모달 컴포넌트 */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="팝업"
          style={modalStyle}
        >
          <div>
            <h2> 내용 </h2>
            <p style={{fontFamily:"YeongdeokSea", fontWeight:"bold", fontSize:"20px", color:"#cd853f"}}> 영덕바다체 가나다라마바사아자차카타파하</p>
            <p style={{fontFamily:"JejuMyeongjo", fontWeight:"bold", fontSize:"20px", color:"#eee6c4"}}> 제주명조체 가나다라마바사아자차카타파하</p>
            <p style={{fontFamily:"omyuPretty", fontWeight:"bold", fontSize:"20px", color:"#deb887"}}> 오뮤 다예쁨체 가나다라마바사아자차카타파하</p>
            <p style={{fontFamily:"Cafe24Ssurround", fontWeight:"bold", fontSize:"20px", color:"#eee6c4"}}> 카페24 서라운드체 가나다라마바사아자차카타파하</p>

            <button onClick={closeModal}> 닫기 </button>
          </div>
        </Modal>
      </div>
    );
  };

export default ModalPopup2;