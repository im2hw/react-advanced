import Details from "pages/Details";
import Home from "pages/Home";
import Login from "pages/SignUp";
import UserDetails from "pages/UserDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
