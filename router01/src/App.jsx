import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ChildComponent from "./Components/props/ChildComponent";

function App2() {
  const data = [
    {
      name: "Krishna",
      email: "krishnacool781@gmail.com",
      phone: "6264731357",
      pata: "abc road",
    },
    {
      name: "Krishna2",
      email: "krishnacool782@gmail.com",
      phone: "6264731356",
      pata: "abc road 123",
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        <ChildComponent
          key={index}
          name={item.name}
          email={item.email}
          contact={item.phone}
          address={item.pata}
        />;
      })}
    </>
  );
}

export default App2;
