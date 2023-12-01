import Details from "pages/Details";
import Home from "pages/Home";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import fakeData from "fakeData.json";

function Router() {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="/details/:id"
          element={<Details letters={letters} setLetters={setLetters} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* 
        <Route path="*" element={<Navigate replace to="/" />} />
        올바르지 않은 경로를 입력할 시, 홈으로 강제 소환하는 기능 
        replace : param history 에 뒤로가기가 가능하도록 함.
        replace로 인해 무한 루프에 걸릴 수도 있음.
        */}
        {/* 
        <Route path="/details/:id" element={<Details />} />
        pathName/:id : path parameter => params ('파라미터의 이름을 id로 하겠다' 는 의미를 가짐)
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
