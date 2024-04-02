import React from "react";
import "../../components/css/Home.css";
import granos from "../../components/imgs/granos.png";
import Carousel from "../../components/common/Carousel";
import History from "./History";
export default function Home() {
  return (
    <section>
      <div className="home">
        <div>
          <h1>Descubre el Mejor Café</h1>
        </div>
        {
          <div>
            <img className="granos d-none d-lg-block" src={granos} alt="" />
          </div>
        }
      </div>
      {
        <div>
          <Carousel />
        </div>
      }
      <div>
        <History />
      </div>
    </section>
  );
}
