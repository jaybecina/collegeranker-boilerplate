import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { ICSSProperties } from "./interfaces/interface";
import CollegeView from "../../pages/CollegeView";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const contentStyle: ICSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};

const Layouts = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<CollegeView />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
