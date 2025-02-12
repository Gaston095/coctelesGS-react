import { Route, Routes } from "react-router-dom";
import CardDetail from "../CardDetail";
import Home from "../Home";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}
