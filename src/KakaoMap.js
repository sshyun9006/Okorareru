import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <div>
      <Map
        center={{ lat: 37.5656326031847, lng: 126.97847432656822 }}
        style={{
          width: '100%',
          height: '400px',
          borderRadius: '20px',
          marginTop: "50px",
        }}
      >
      
        <MapMarker
          style={{ border: 'tranparent' }}
          position={{ lat: 37.5656326031847, lng: 126.97847432656822 }}
        >
        
          <div
            style={{
              color: '#cd853f',
              fontSize: '14px',
              fontWeight: '900',
              border: '4px solid #cd853f',
             // borderRadius: '8px',
              padding: '2.5px 5px',
            }}
          >
            🧡 히치히치야야 🧡
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  );
};


export default KakaoMap;