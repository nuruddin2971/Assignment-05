import { Suspense, useState } from "react";
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./type/technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();
  
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
