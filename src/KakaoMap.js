import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const center = { lat: 37.563862, lng: 126.986175 };

  return (
    <div>
      <Map
        center={center}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px",
          marginTop: "50px",
        }}
        level={3} // 지도 줌 레벨 설정
      >
        {/* 기본 마커 */}
        <MapMarker
          style={{ border: 'transparent' }}
          position={{ lat: 37.563862, lng: 126.986175 }}
        >
        </MapMarker>

        {/* 커스텀 오버레이 */}
        <CustomOverlayMap position={center}>
          <div
            style={{
              position: "relative",
              background: "rgb(255, 255, 255)",
              border: "2px solid #cd853f",
              zIndex: 1,
              display: "block",
              width: "200px",
              height: "20px",
              color: "#cd853f",
              fontSize: "14px",
              fontWeight: "900",
              padding: "5px",
              textAlign: "center",
              borderRadius: "10px",
              transform: "translate(0%, -220%)", 
              marginTop: "30px", 
            }}
          >
            🧡 명동성당 파밀리아채플 🧡
          </div>
        </CustomOverlayMap>
      </Map>
    </div>
  );
};

export default KakaoMap;
