import { useEffect, useState } from "react";
import chichi from "../img/chichi.jpg";
import ddungchi from "../img/ddungchi.jpg";
import hichi from "../img/hichi.jpg";


export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        className="bg chichi"
        style={{
          backgroundPositionY: position / 2,
        }}
      >
      </div> 
      <div
        className="aryun ddungchi"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
        <div>Happy New Year</div>
      </div>
      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
         튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치 튼튼치
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 700) / 50,
        }}
      >
       개아련 개아련 개아련 개아련 개아련 개아련 개아련
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 830) / 50,
        }}
      >
        Lorem ipsum dolor sit amet
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 960) / 50,
        }}
      >
        Excepteur sint occaecat
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1090) / 50,
        }}
      >
        sunt in culpa qui officia deserunt
      </p>
      <img
        src={chichi}
        className="item"
        alt=""
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      />

      <img
        src={hichi}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      />
      <img
        src={ddungchi}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 6}px)`,
        }}
      />
    </div>
  );
}