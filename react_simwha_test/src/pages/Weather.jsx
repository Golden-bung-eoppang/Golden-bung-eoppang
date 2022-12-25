import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [weatherResult, setWeatherResult] = useState("");

  const API_KEY = "30ccac4351c9964310cd3cce7aceb7d3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url,
        });
        setWeatherResult(data);
      } catch (err) {
        alert("잘못된 지역이름입니다");
      }
    }
  };

  // const weatherTemp = Math.abs(
  //   Math.round((weatherResult.data.main.temp - 273.15) * 10) / 10
  // );
  // console.log(weatherTemp);

  // const checkWeatherTemp=()=>{
  //   if()
  // }

  return (
    <>
      <input
        style={{
          marginTop: "10px",
          width: "100px",
          height: "30px",
          backgroundColor: "rgba( 255, 255, 50, 0.5 ) ",

          borderRadius: "8px",
          marginLeft: "5px",
          border: "2px solid #000000",
          color: "black",
        }}
        placeholder="Add City"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        onKeyDown={searchWeather}
      />

      {Object.keys(weatherResult).length !== 0 && (
        <>
          <ResultWrap>
            <City>{weatherResult.data.name}</City>
            <Temp>
              {Math.round((weatherResult.data.main.temp - 273.15) * 10) / 10}
              °C
            </Temp>

            <TodayWeather>
              현재날씨
              <SkyStatus>{weatherResult.data.weather[0].main}</SkyStatus>
            </TodayWeather>
          </ResultWrap>
          {/* <div style={{ marginLeft: "10px", marginTop: "5px" }}> */}
          🫵오늘 황금잉어빵 &nbsp;
          {Math.abs(
            Math.floor((weatherResult.data.main.temp - 273.15) * 10) / 10
          ).toFixed(0)}
          개 추천합니다&nbsp;(덥던 춥던 드세요) 🫵
          {/* </div> */}
        </>
      )}
    </>
  );
}

const ResultWrap = styled.div`
  display: flex;
  float: right;
  flex-direction: column;
  align-content: center;
  margin-right: 30px;
  border: 1px solid #ffcd00;
  border-radius: 8px;
  background-color: rgba(255, 255, 50, 0.5);
`;

const City = styled.div`
  margin-left: auto;
`;

const TodayWeather = styled.div`
  float: right;
  margin-left: auto;
`;

const SkyStatus = styled.div`
  font-weight: bolder;
  font-size: 20px;
`;

const Temp = styled.div`
  font-weight: bolder;
  margin-left: 5px;
  font-size: 30px;
`;
