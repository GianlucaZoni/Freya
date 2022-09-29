import React, { useRef, useEffect, useState, replaceState } from "react";
import ReactDOM from "react-dom";
import Webcam from "react-webcam";
import { drawMesh, valuation } from "./utilities";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  NavMenu,
  NavItem,
  NavLinksH,
  Container,
  FeedWrapper,
  YouHeading,
  UIBeautyScore,
  BeautyScore,
  BeautyScoreRing,
  Wrap,
  HistoryHeading,
  HistorySpan,
  Row,
  Column1,
  Column2,
  CalendarWrapper,
  Month,
  MonthSpan,
  CalendarTable,
  DayName,
  Day,
  DaySpan,
  SecondaryBeautyScore,
  Today
} from "./YouElements";
import Logo from "../../images/logo.png";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";
import "./you.css";
import beautyscoreouterring from "../../images/beautyscoreouterring.png";
import {BEAUTYDATA} from "./beautyHistory";

function You() {
  let bestScore = 0;
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [scoreOnShow, setScoreOnShow] = useState(bestScore);
  const [firstLoad, setFirstLoad] = useState(true);
  let tempScore = 0;
  const [buffer,setBuffer]=useState(bestScore);
  //let firstLoad = true;
  //var firstLoad = true;
  
  
  //console.log(firstLoad);

  const perfCheeksBoneWidth = 75;

  const runFacemesh = async () => {
    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    // NEW MODEL
    // const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    // setInterval(() => {
    //   detect(net);
    // }, 100);
    const net = await facemesh.load(
      facemesh.SupportedPackages.MediaPipeFaceMesh
    );
    setInterval(() => {
      detect(net);
    }, 250);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set Video Width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set Canvas Width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      // OLD MODEL
      //const face = await net.estimateFaces(video);
      // NEW MODEL
      const face = await net.estimateFaces({ input: video });
      //console.log(face);

      // Get Canvas Context for Drawing
      const ctx = canvasRef.current.getContext("2d");
      ctx.translate(videoWidth, 0);
      ctx.scale(-1, 1);
      //ctx.drawImage(image, 0, 0);
      //ctx.scale(-1, 1);
      
        requestAnimationFrame(() => {
          drawMesh(face, ctx);
        });
      // requestAnimationFrame(() => {
      //   valuation(face);
      // });
      setInterval(()=>{
        valuation(face);
      },250);
      setScore(tempScore);
    }
  };

  const valuation = (predictions) => {
    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        const keypoints = prediction.scaledMesh;
        let cheeksBoneWidth = Math.round(
          Math.abs(keypoints[134][0] - keypoints[454][0])
        );

        //console.log(cheeksBoneWidth);
        if (cheeksBoneWidth < perfCheeksBoneWidth) {
          tempScore = Math.round(
            100 - ((perfCheeksBoneWidth / cheeksBoneWidth) * 100 - 100)
          );
        } else {
          tempScore = Math.round((perfCheeksBoneWidth / cheeksBoneWidth) * 100);
        }
      });
    }
    if (tempScore>bestScore) {
      bestScore = tempScore;
      //console.log(bestScore);
      if (firstLoad) {
        setScoreOnShow(bestScore);
      }
    }
    //console.log(bestScore);
  };

  useEffect(() => {
    runFacemesh();
  }, []);

  const showToday = () => {
    setScoreOnShow(buffer);
    setFirstLoad(true);
  }

  const show1 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[0]);
  }

  const show2 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[1]);
  }

  const show3 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[2]);
  }

  const show4 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[3]);
  }

  const show5 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[4]);
  }

  const show6 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[5]);
  }


  const show7 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[6]);
  }

  const show8 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[7]);
  }

  const show9 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[8]);
  }

  const show10 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[9]);
  }

  const show11 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[10]);
  }

  const show12 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[11]);
  }

  const show13 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[12]);
  }

  const show14 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[13]);
  }

  const show15 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[14]);
  }

  const show16 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[15]);
  }

  const show17 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[16]);
  }

  const show18 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[17]);
  }

  const show19 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[18]);
  }

  const show20 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[19]);
  }

  const show21 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[20]);
  }

  const show22 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[21]);
  }

  const show23 = () => {
    setBuffer(bestScore);
    setFirstLoad(false);
    setScoreOnShow(BEAUTYDATA[22]);
  }

  return (
    <>
      {/* SKINNY NAVBAR */}
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImg src={Logo} alt={"freyə"} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinksH
                to="/"
                smooth={"true"}
                duration={500}
                spy={"true"}
                exact="true"
                offset={-55}
              >
                sign out
              </NavLinksH>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>

      <Container>
        <FeedWrapper>
          <YouHeading>You</YouHeading>
          <UIBeautyScore>
            <BeautyScoreRing className="ring" src={beautyscoreouterring} />
            <BeautyScore>{score}%</BeautyScore>
          </UIBeautyScore>
        </FeedWrapper>

          <Webcam
            className="feed"
            ref={webcamRef}
            mirrored={true}
          />

          <canvas
            className="feed"
            ref={canvasRef}
          />
        
      </Container>
      <Container>
        <Wrap>
          <HistoryHeading><HistorySpan>Beauty</HistorySpan> History</HistoryHeading>
          <Row>
            <Column1>
              <CalendarWrapper>
                <Month><MonthSpan>july</MonthSpan> 2022</Month>
                  <CalendarTable>
                    <DayName>mon</DayName>
                    <DayName>tue</DayName>
                    <DayName>wed</DayName>
                    <DayName>thu</DayName>
                    <DayName>fri</DayName>
                    <DayName>sat</DayName>
                    <DayName>sun</DayName>

                    <Day onClick={show1}><DaySpan>27</DaySpan></Day>
                    <Day onClick={show2}><DaySpan>28</DaySpan></Day>
                    <Day onClick={show3}><DaySpan>29</DaySpan></Day>
                    <Day onClick={show4}><DaySpan>30</DaySpan></Day>
                    <Day onClick={show5}>1</Day>
                    <Day onClick={show6}>2</Day>
                    <Day onClick={show7}>3</Day>
                    <Day onClick={show8}>4</Day>
                    <Day onClick={show9}>5</Day>
                    <Day onClick={show10}>6</Day>
                    <Day onClick={show11}>7</Day>
                    <Day onClick={show13}>8</Day>
                    <Day onClick={show14}>9</Day>
                    <Day onClick={show15}>10</Day>
                    <Day onClick={show16}>11</Day>
                    <Day onClick={show17}>12</Day>
                    <Day onClick={show18}>13</Day>
                    <Day onClick={show19}>14</Day>
                    <Day onClick={show20}>15</Day>
                    <Day onClick={show21}>16</Day>
                    <Day onClick={show22}>17</Day>
                    <Day onClick={show23}>18</Day>
                    <Today onClick={showToday}>19</Today>
                    <Day>20</Day>
                    <Day>21</Day>
                    <Day>22</Day>
                    <Day>23</Day>
                    <Day>24</Day>
                    <Day>25</Day>
                    <Day>26</Day>
                    <Day>27</Day>
                    <Day>28</Day>
                    <Day>29</Day>
                    <Day>30</Day>
                    <Day>31</Day>
                    
                  </CalendarTable>
              </CalendarWrapper>
            </Column1>
            <Column2>
              <SecondaryBeautyScore>
                  <BeautyScoreRing className="ring" src={beautyscoreouterring} />
                  <BeautyScore>{scoreOnShow}%</BeautyScore>
              </SecondaryBeautyScore>
            </Column2>
          </Row>
        </Wrap>
      </Container>
    </>
  );
}

export default You;
