import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <div>
      <Map
        center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        style={{
          width: '360px',
          height: '400px',
          borderRadius: '20px',
        }}
      >
      
        <MapMarker
          style={{ border: 'tranparent' }}
          position={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        >
        
          <div
            style={{
              color: '#9971ff',
              fontSize: '15px',
              fontWeight: '900',
              border: '4px solid #9971ff',
              borderRadius: '8px',
              padding: '2.5px',
            }}
          >
            🎬 딱세욱 약혐 🎬
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  );
};


export default KakaoMap;