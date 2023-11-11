// app/page.js
"use client";
import style from "./style.module.css";
import Image from "next/image";
import Profile from "../assets/310144956_1514324079012994_5827464339962735330_n.jpg";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Container from "./container";
//importing typewriter-effect
import Typewriter from "typewriter-effect";

import TimelineObserver from "react-timeline-animation";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1("2021 - College passout");
    callback();
  };

  const someCallback2 = () => {
    setMessage2(
      "2021, Feb to 2022,Feb - Isten Technologia Pvt Ltd - Javascript Developer"
    );
    setImage1("/download.jpg");
  };

  const someCallback3 = () => {
    setMessage3(
      " 2022, March to 2022,Sep - Attosol Technologies Pvt Ltd - Frontend Developer"
    );
    setImage2("attosol-logo.png");
  };

  const someCallback4 = () => {
    setMessage4(
      "2023, July to Current - Rate Viewer Technologies Pvt Ltd - React Js,Next Js Developer"
    );
    setImage3("download.png");
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className={style.wrapper}>
      <div id="timeline1" ref={timeline1} className={style.timeline} />
      <div className={style.circleWrapper}>
        <div id="circle1" ref={circle1} className={style.circle}>
          1
        </div>
        <div className={style.message}>{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className={style.timeline} />
      <div className={style.circleWrapper}>
        <div id="circle2" ref={circle2} className={style.circle}>
          2
        </div>
        <div className={style.message}>
          {" "}
          {image1 && (
            <img
              className="m-2"
              style={{
                objectFit: "cover",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
              alt="image1"
              src={image1}
            />
          )}{" "}
          {message2}
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className={style.timeline} />
      <div className={style.circleWrapper}>
        <div id="circle3" ref={circle3} className={style.circle}>
          3
        </div>
        <div className={style.message}>
          {image2 && (
            <img
              className="m-2"
              style={{
                objectFit: "cover",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
              alt="image1"
              src={image2}
            />
          )}
          {message3}
        </div>
      </div>
      <div id="timeline4" ref={timeline4} className={style.timeline} />
      <div className={style.circleWrapper}>
        <div id="circle4" ref={circle4} className={style.circle}>
          4
        </div>
        <div className={style.message}>
          {image3 && (
            <img
              className="m-2"
              style={{
                objectFit: "cover",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
              alt="image1"
              src={image3}
            />
          )}
          {message4}{" "}
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  const [message, setMessage] = useState("");
  const onCallback = () => {
    console.log("awesome");
  };
  return (
    <>
      <div
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="d-lg-flex d-none row position-relative justify-content-between"
          style={{ color: "white", textAlign: "center", width: "80%" }}
        >
          <div className="col-lg-6 ">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  cursor: null,
                  height: 100,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString(
                      "<h1>Hi, I am <strong>Aishwariya Ghosal</strong></h1>"
                    )
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      "<h1>I am a <strong>Frontend Developer</strong></h1> "
                    )
                    .pauseFor(300)
                    .typeString(
                      '<h1><strong>Code <span style="color: orange;">Comes in my</span> Dream!</strong></h1>'
                    )
                    .pauseFor(300)
                    .deleteChars(23)
                    .typeString(
                      '<h1><strong>Download my <span style="color: orange;">Resume here</span></strong></h1>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
              />
              <Link
                style={{
                  padding: "10px",
                  width: "110px",
                  margin: " 10px  auto",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  borderRadius: "3px",
                  fontWeight: "800",
                  fontSize: "12px",
                }}
                href="Frontend-Developer-AISHWARIYA (1).pdf"
                target="_blank"
                download
              >
                Download CV
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 px-0 "
            style={{
              border: "1px solid white",
              height: "500px",
              maxWidth: "max-content",
              borderRadius: "0.85rem",
            }}
          >
            {" "}
            <img
              className="my-4"
              alt="background"
              style={{
                objectFit: "scale-down",
                borderRadius: "0.85rem",
                width: "100%",
                transform: "translate(-60px,30px)",
                height: "100%",
              }}
              src="/profile.jpg"
            />
          </div>
        </div>
        <div
          className="d-lg-none d-md-none d-flex row position-relative justify-content-between"
          style={{ color: "white", textAlign: "center", width: "80%" }}
        >
        

          <div
            className="col-lg-6 px-0 mb-4 "
            style={{
              border: "1px solid white",
              height: "400px",
              maxWidth: "max-content",
              borderRadius: "0.85rem",
              marginTop:"100px"
            }}
          >
            {" "}
            <img
              className=""
              alt="background"
              style={{
                objectFit: "cover",
                borderRadius: "0.85rem",
                width: "100%",
                height: "100%",
              }}
              src="/profile.jpg"
            />
          </div>
          <div className="col-lg-6 ">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: null,
                height: 100,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "<h1>Hi, I am <strong>Aishwariya Ghosal</strong></h1>"
                  )
                  .pauseFor(300)
                  .deleteAll()
                  .typeString(
                    "<h1>I am a <strong>Frontend Developer</strong></h1> "
                  )
                  .pauseFor(300)
                  .typeString(
                    '<h1><strong>Code <span style="color: orange;">Comes in my</span> Dream!</strong></h1>'
                  )
                  .pauseFor(300)
                  .deleteChars(23)
                  .typeString(
                    '<h1><strong>Download my <span style="color: orange;">Resume here</span></strong></h1>'
                  )
                  .pauseFor(1000)
                  .start();
              }}
            />
            <Link
              style={{
                padding: "10px",
                width: "110px",
                margin: " 10px  auto",
                background: "transparent",
                border: "1px solid white",
                color: "white",
                display: "block",
                textDecoration: "none",
                borderRadius: "3px",
                fontWeight: "800",
                fontSize: "12px",
              }}
              href="Frontend-Developer-AISHWARIYA (1).pdf"
              target="_blank"
              download
            >
              Download CV
            </Link>
          </div>
        </div>
        </div>
      </div>

      <div class={style.container_mouse}>
        <span class={style.mouse_btn}>
          <span class={style.mouse_scroll}></span>
        </span>
        <span>Scroll Down</span>
        <br></br>
        <span>To See My Journey</span>
      </div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#9a00ff"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className={style.timeline}
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>

      <div style={{ height: "500px" }}></div>
    </>
  );
}
