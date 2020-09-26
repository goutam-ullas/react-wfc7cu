/*imports*/
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  SliderInput,
  SliderTrack,
  SliderTrackHighlight,
  SliderHandle,
  SliderMarker
} from "@reach/slider";
import "@reach/slider/styles.css";
import ReactPlayer from "react-player";
import smoothscroll from "smoothscroll-polyfill";
import Typekit from "react-typekit";
//import { Document, Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.parcel";
import "./style.css";
import mapboxgl from "mapbox-gl";
//import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ";

/*Main Class*/
class Application extends React.Component {
  /*Constructor*/
  constructor(props) {
    super(props);
    this.state = {
      mapHeight: window.innerHeight,
      mapWidth: window.innerWidth,
      lng: 78.47455,
      lat: 17.37563,
      value: 50,
      index: true,
      squareState: true,
      aboutState: true,
      aboutWidth: 0,
      researchState: true,
      researchWidth: 0,
      researchBorder: 0,
      legendState: true,
      legendHeight: 0,
      squareText: "",
      circleText: "",
      themeGap: window.innerHeight,
      videoDimX1: 1,
      videoDimX2: 1,
      videoDimX3: 1,
      videoDimX4: 1,
      videoDimX5: 1,
      videoDimX6: 1,
      videoDimX7: 1,
      videoDimX8: 1,
      videoZindex1: 1,
      videoZindex2: 1,
      videoZindex3: 1,
      videoZindex4: 1,
      videoZindex5: 1,
      videoZindex6: 1,
      videoZindex7: 1,
      videoZindex8: 1,
      videoHeight: 270,
      videoWidth: 480,
      imageDimX1: 0,
      imageZindex1: 1,
      popUp: false,
      popUpX: 0,
      popUpY: 0,
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0,
      popUpColor: "",
      scaleDistance: 13,
      themeWidth: 0.75,
      themeDescWidth: "40%",
      themeDescBottom: 70,
      themeVidLeft: 1000,
      video1play: false,
      video2play: false,
      video3play: false,
      video4play: false,
      video5play: false,
      video6play: false,
      video7play: false,
      video8play: false
    };
    /*Bind Functions*/
    this.researchRef = React.createRef();
    this.aboutRef = React.createRef();
    this.legendRef = React.createRef();
    this.video1Ref = React.createRef();
    this.video2Ref = React.createRef();
    this.video3Ref = React.createRef();
    this.video4Ref = React.createRef();
    this.video5Ref = React.createRef();
    this.video6Ref = React.createRef();
    this.video7Ref = React.createRef();
    this.video8Ref = React.createRef();
    this.handleAboutResearchClick = this.handleAboutResearchClick.bind(this);
    this.circleFunction = this.circleFunction.bind(this);
    this.aboutFunction = this.aboutFunction.bind(this);
    this.legendFunction = this.legendFunction.bind(this);
    this.researchFunction = this.researchFunction.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.setCircleState = this.setCircleState.bind(this);
    /*Text Variables*/
    this.aboutText =
      "Goods, Gods and Goddesses alternates performances with moments of their making. In portraying the market, Begum Bazar, and the many goods, gods and goddesses that move this space, I am looking, seeking but also escaping what I’ve been rummaging. These are individual segments, fragments of a whole, a whole I may never conceive. Because the thing is, in the telling of the various parts that will build this whole, I’m left with impressions of acts about acts, of scripted acts and scripting acts, of directing in the Bazar and being directed by the Bazar, of watching people perform with intermittent awareness of my own performance. Here, bodies become, a bride, a mother, a devotee, a woman. Stores advertise wholesale deals, actors play multiple parts, wholesale roles. It is a patch of land, but a theatre, with rehearsals, scripts and episodic memories keeping gender desirable, as imagined by some, exacted and ordered, with its outlines defined, insides determined, and borders enforced.";
    this.theme0Desc = "The opening act set in the market scene, outside of the stores with their own smaller acts, is the longest one. It starts at about 10 AM, when the first actors, men, all playing storekeepers gradually enter the scene with women following after. About an hour before noon, the set is full, with all actors, occupying their respective positions. Smaller acts include men and women crossing streets, with women walking past stores in groups. Some actors are to walk with stage directions from google reviews. Others are to act from memory and the nostalgia of a previous act. The vital, perhaps the most challenging part is to co-ordinate the whole scene while the traffic moves as usual along the jagged lanes. The actors, the stores, the space, the traffic, the honking, all merge together, composing, enacting and reenacting. Each corner of the market concentrates on recreating different moments through different acts.";
    this.theme1Title = "This is Theme 1";
    this.theme1Desc =
      "This thesis looks at an urban market, Begum Bazar situated in the old city of Hyderabad and its relation to gender. The work, initially set out to explore kitchen objects and their place in shaping one’s life, eventually becomes an exploration into how, space and gender narratives co-exist and help sustain each other. By using the example of this market situated in a major metropolitan Indian city, and through interviews of people occupying and visiting the space, the work speculates on how social hierarchies and practices gain ground.";
    this.theme2Title = "This is Theme 2";
    this.theme2Desc =
      "This thesis looks at an urban market, Begum Bazar situated in the old city of Hyderabad and its relation to gender. The work, initially set out to explore kitchen objects and their place in shaping one’s life, eventually becomes an exploration into how, space and gender narratives co-exist and help sustain each other. By using the example of this market situated in a major metropolitan Indian city, and through interviews of people occupying and visiting the space, the work speculates on how social hierarchies and practices gain ground.";
    this.theme3Title = "This is Theme 3";
    this.theme3Desc =
      "This thesis looks at an urban market, Begum Bazar situated in the old city of Hyderabad and its relation to gender. The work, initially set out to explore kitchen objects and their place in shaping one’s life, eventually becomes an exploration into how, space and gender narratives co-exist and help sustain each other. By using the example of this market situated in a major metropolitan Indian city, and through interviews of people occupying and visiting the space, the work speculates on how social hierarchies and practices gain ground.";
  }
  /* Video URLs*/
  theme0Video = "https://player.vimeo.com/video/462185422";
  theme1Video = "https://vimeo.com/448631749/8c1e28fe46";
  theme2Video = "https://vimeo.com/448630508/11ec6d4d54";
  theme3Video = "https://vimeo.com/448632066/2ab228f98c";
  theme4Video = "https://vimeo.com/448631454/d006e93a41";
  theme5Video = "https://vimeo.com/448631543/98f339b864";
  theme6Video = "https://vimeo.com/454107513/7c4b053989";
  theme7Video = "https://vimeo.com/448631543/98f339b864";
  theme8Video = "https://vimeo.com/448630300/810e46cfce";
  theme9Video = "https://vimeo.com/448630508/11ec6d4d54";

  /* Legend colors */
  godsColor = "#79859a";
  godsStoreColor = "#6999a4";
  restoColor = "#37482b";
  bnwColor = "#355b75";
  kitchenColor = "#75492f";
  groceryColor = "#c2b89e";
  toysColor = "#4971a2";
  plasticColor = "#8f7f56";
  barsColor = "#57858e";
  /* Theme Position Variables*/
  circleState = 0;
  maxThemes = 8;
  prevScrollPos = 0;
  /*On Mount*/
  componentDidMount() {
    /*Update Dimenstions based on screen size*/
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    /*Initiate Map*/
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/nnikita/ckd7n4m5b04e31ip8ai5a1xfj",
      center: [this.state.lng, this.state.lat],
      zoom: 19.5,
      pitch: 60,
      attributionControl: false,
      interactive: false
    });
    /*Map Functions*/
    this.map.scrollZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.dragPan.enable();
    smoothscroll.polyfill();
    var deltaDistance = 100;
    var deltaDegrees = 10;
    function easing(t) {
      return t * (2 - t);
    }
    /*Map- Game Controls*/
    this.map.on("load", () => {
      this.map.getCanvas().focus();
      window.addEventListener(
        "keydown",
        e => {
          e.preventDefault();
          if (e.which === 38) {
            // up
            this.map.panBy([0, -deltaDistance], {
              easing: easing
            });
          } else if (e.which === 40) {
            // down
            this.map.panBy([0, deltaDistance], {
              easing: easing
            });
          } else if (e.which === 37) {
            // left
            this.map.easeTo({
              bearing: this.map.getBearing() - deltaDegrees,
              easing: easing
            });
          } else if (e.which === 39) {
            // right
            this.map.easeTo({
              bearing: this.map.getBearing() + deltaDegrees,
              easing: easing
            });
          }
        },
        true
      );
    });
    /*Map - Dots PopUp*/
    this.map.on("click", e => {
      var pageX = window.event.pageX - window.scrollX;
      var pageY = window.event.pageY - window.scrollY;
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ["gods"]
      });
      if (features.length) {
        this.setState({
          pointName: features[0].properties.Name,
          layerName: "Place of Worship",
          popUpX: pageX,
          popUpY: pageY,
          popUpH: 500,
          popUpW: 500,
          popUpPad: 3,
          popUpColor: this.godsColor
        });
      } else {
        features = this.map.queryRenderedFeatures(e.point, {
          layers: ["gods-stores"]
        });
        if (features.length) {
          this.setState({
            pointName: features[0].properties.Name,
            layerName: "Religious Store",
            popUpX: pageX,
            popUpY: pageY,
            popUpH: 500,
            popUpW: 500,
            popUpPad: 3,
            popUpColor: this.godsStoreColor
          });
        } else {
          features = this.map.queryRenderedFeatures(e.point, {
            layers: ["restaurant"]
          });
          if (features.length) {
            this.setState({
              pointName: features[0].properties.Name,
              layerName: "Restaurant",
              popUpX: pageX,
              popUpY: pageY,
              popUpH: 500,
              popUpW: 500,
              popUpPad: 3,
              popUpColor: this.restoColor
            });
          } else {
            features = this.map.queryRenderedFeatures(e.point, {
              layers: ["beauty-and-wedding"]
            });
            if (features.length) {
              this.setState({
                pointName: features[0].properties.Name,
                layerName: "Beauty and Wedding Store",
                popUpX: pageX,
                popUpY: pageY,
                popUpH: 500,
                popUpW: 500,
                popUpPad: 3,
                popUpColor: this.bnwColor
              });
            } else {
              features = this.map.queryRenderedFeatures(e.point, {
                layers: ["kitchen-utensils"]
              });
              if (features.length) {
                this.setState({
                  pointName: features[0].properties.Name,
                  layerName: "Kitchen Utensils Store",
                  popUpX: pageX,
                  popUpY: pageY,
                  popUpH: 500,
                  popUpW: 500,
                  popUpPad: 3,
                  popUpColor: this.kitchenColor
                });
              } else {
                features = this.map.queryRenderedFeatures(e.point, {
                  layers: ["grocery-stores"]
                });
                if (features.length) {
                  this.setState({
                    pointName: features[0].properties.Name,
                    layerName: "Grocery Store",
                    popUpX: pageX,
                    popUpY: pageY,
                    popUpH: 500,
                    popUpW: 500,
                    popUpPad: 3,
                    popUpColor: this.groceryColor
                  });
                } else {
                  features = this.map.queryRenderedFeatures(e.point, {
                    layers: ["toys-stores"]
                  });
                  if (features.length) {
                    this.setState({
                      pointName: features[0].properties.Name,
                      layerName: "Toys Store",
                      popUpX: pageX,
                      popUpY: pageY,
                      popUpH: 500,
                      popUpW: 500,
                      popUpPad: 3,
                      popUpColor: this.toysColor
                    });
                  } else {
                    features = this.map.queryRenderedFeatures(e.point, {
                      layers: ["plastic-goods-stores"]
                    });
                    if (features.length) {
                      this.setState({
                        pointName: features[0].properties.Name,
                        layerName: "Plastic Goods Store",
                        popUpX: pageX,
                        popUpY: pageY,
                        popUpH: 500,
                        popUpW: 500,
                        popUpPad: 3,
                        popUpColor: this.plasticColor
                      });
                    } else {
                      features = this.map.queryRenderedFeatures(e.point, {
                        layers: ["bars-and-liquor"]
                      });
                      if (features.length) {
                        this.setState({
                          pointName: features[0].properties.Name,
                          layerName: "Bar and Liquor Store",
                          popUpX: pageX,
                          popUpY: pageY,
                          popUpH: 500,
                          popUpW: 500,
                          popUpPad: 3,
                          popUpColor: this.barsColor
                        });
                      } else {
                        this.setState({
                          popUpH: 0,
                          popUpW: 0,
                          pointName: "",
                          layerName: "",
                          popUpPad: 0,
                          popUpColor: ""
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    /*Map - Reset PopUps on Drag*/
    this.map.on("drag", () => {
      this.setState({
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    });
    /*Map - Cursor Style*/
    this.map.getCanvas().style.cursor = "all-scroll";
    /*Map - Reset location on move*/
    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2),
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    });
    /*Map - Change Cursor Style when hover over dots*/
    this.map.on("mousemove", e => {
      // Set variables equal to the current feature's magnitude, location, and time
      var hoverFeatures = this.map.queryRenderedFeatures(e.point, {
        layers: [
          "gods",
          "gods-stores",
          "restaurant",
          "beauty-and-wedding",
          "kitchen-utensils",
          "grocery-stores",
          "toys-stores",
          "plastic-goods-stores",
          "bars-and-liquor"
        ]
      });
      // Check whether features exist
      if (hoverFeatures.length > 0) {
        this.map.getCanvas().style.cursor = "pointer";
      } else {
        this.map.getCanvas().style.cursor = "all-scroll";
      }
    });
    /*Remove PopUp when clicked on About, Research, or Legend windows*/
    window.addEventListener("mousedown", this.handleAboutResearchClick);

    /* set circle state to current scroll position on scroll */
    window.addEventListener("scroll", this.setCircleState);
  }

  /* set circle state to current scroll position on scroll */
  setCircleState() {
    var i = 8;
    var currentScrollPos = window.pageYOffset;
    if((currentScrollPos>this.prevScrollPos)&&(currentScrollPos < this.state.themeGap*1.505)){
      window.scrollTo(0,this.state.themeGap*1.505);
    }
    for (i = 8; i > -1; i--) {
      if (currentScrollPos >= this.state.themeGap * i * 1.48) {
        this.circleState = i;
        break;
      }
    }
    this.prevScrollPos = currentScrollPos;
  }

  /*When clicked on Home Button*/
  indexFunction() {
    console.log("index");
    window.location.reload(false);
    window.scrollTo(0, 0);
  }
  /*Function to Update dimensions*/
  updateDimensions() {
    this.setState({
      mapHeight: window.innerHeight,
      mapWidth: window.innerWidth
    });
  }
  /*Function to remove popups when clicked inside About, Research, or Legend windows*/
  handleAboutResearchClick(event) {
    if (
      this.aboutRef.current.contains(event.target) ||
      this.researchRef.current.contains(event.target) ||
      this.legendRef.current.contains(event.target)
    ) {
      this.setState({
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    }
  }
  /*When clicked on About button*/
  aboutFunction() {
    this.setState(prevState => ({
      aboutState: !prevState.aboutState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.researchState == false) {
      this.setState({ researchWidth: 0, researchState: true });
    }
    if (this.state.legendState == false) {
      this.setState({ legendHeight: 0, legendState: true });
    }
    if (this.state.aboutState == true) {
      this.setState({
        aboutWidth: window.innerWidth / 2,
        themeWidth: 0.375,
        themeDescWidth: "100%",
        themeDescBottom: 600,
        themeVidLeft: 100
      });
    } else {
      this.setState({
        aboutWidth: 0,
        themeWidth: 0.75,
        themeDescWidth: "40%",
        themeDescBottom: 70,
        themeVidLeft: 1000
      });
    }
  }
  /*When clicked on Legend button*/
  legendFunction() {
    console.log("legend");
    this.setState(prevState => ({
      legendState: !prevState.legendState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.aboutState == false) {
      this.setState({
        aboutWidth: 0,
        aboutState: true,
        themeWidth: 0.75,
        themeDescWidth: "40%",
        themeDescBottom: 70,
        themeVidLeft: 1000
      });
    }
    if (this.state.researchState == false) {
      this.setState({
        researchWidth: 0,
        researchState: true,
        themeWidth: 0.75,
        themeDescWidth: "40%",
        themeDescBottom: 70,
        themeVidLeft: 1000
      });
    }
    if (this.state.legendState == true) {
      this.setState({ legendHeight: window.innerHeight / 5 });
      var legendId = document.getElementById("legendWindow");
      legendId.scrollTop = 0;
    } else {
      this.setState({ legendHeight: 0 });
    }
  }
  /*When clicked on Research button*/
  researchFunction() {
    this.setState(prevState => ({
      researchState: !prevState.researchState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.aboutState == false) {
      this.setState({ aboutWidth: 0, aboutState: true });
    }
    if (this.state.legendState == false) {
      this.setState({ legendHeight: 0, legendState: true });
    }
    if (this.state.researchState == true) {
      this.setState({
        researchWidth: window.innerWidth / 2,
        researchBorder: 50,
        themeWidth: 0.375,
        themeDescWidth: "100%",
        themeDescBottom: 600,
        themeVidLeft: 100
      });
    } else {
      this.setState({
        researchWidth: 0,
        researchBorder: 0,
        themeWidth: 0.75,
        themeDescWidth: "40%",
        themeDescBottom: 70,
        themeVidLeft: 1000
      });
    }
  }
  /*When clicked on Next button*/
  circleFunction() {
    console.log("circle");
    this.setState({
      aboutWidth: 0,
      aboutState: true,
      researchWidth: 0,
      researchState: true,
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.circleState > this.maxThemes - 1) {
      this.circleState = 0;
    } else {
      this.circleState += 1;
    }
    console.log(this.circleState);
    if (this.circleState == 0) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: this.state.themeGap * this.circleState * 1.505,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  /*When Slider position is changed*/
  sliderChange(v) {
    this.setState({ value: v });
    var zoomLevel = (1 / 33) * (v - 1) + 18;
    if (zoomLevel < 19) {
      this.setState({
        scaleDistance: Math.round(33.72 - 16.92 * (zoomLevel - 18))
      });
    } else {
      if (zoomLevel < 20) {
        this.setState({
          scaleDistance: Math.round(16.8 - 8.4 * (zoomLevel - 19))
        });
      } else {
        this.setState({
          scaleDistance: Math.round(8.4 - 4.2 * (zoomLevel - 20))
        });
      }
    }
    this.map.zoomTo(zoomLevel);
  }

  /*Function to toggle image size*/
  toggleImage1() {
    this.setState(prevState => ({
      imageDimX1: 1 - prevState.imageDimX1
    }));
    this.setState(prevState => ({
      imageZindex1: prevState.imageZindex1 == 1 ? 10 : 1
    }));
  }

  render() {
    return (
      /*Main Div*/
      <div>
        {/*Theme 0*/}
        <ReactPlayer
          className="video"
          style={{
            margin: -50,
            top: 0,
            left: 0,
            zIndex: 0
          }}
          url={this.theme0Video}
          height={1.1 * this.state.mapHeight}
          width={1.1 * this.state.mapWidth}
          controls={true}
          config={{
            vimeo: {
              playerOptions: { background: 1 }
            }
          }}
        />
        {/*Theme 0 Description*/}
        <div
          style={{
            padding: 20,
            position: "absolute",
            zIndex: 1,
            width: 500,
            top: 300,
            left: 200
          }}
        >
          <text className="themeDesc">{this.theme0Desc}</text>
        </div>
        {/*Map Div*/}
        <div
          ref={el => (this.mapContainer = el)}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            height: this.state.mapHeight,
            width: this.state.mapWidth,
            backgroundColor: "transparent"
          }}
        />
        {/*Theme 1*/}
        <div
          style={{
            position: "absolute",
            top: 1.47 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 1 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme1Desc}</text>
          </div>
          {/*Theme 1 Video*/}
          <ReactPlayer
            className="video"
            ref={el => (this.video1Ref = el)}
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex1,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX1 * this.state.videoHeight}
            width={this.state.videoDimX1 * this.state.videoWidth}
            url={this.theme1Video}
            controls={true}
            playing={this.state.video1play}
            onPlay={() =>
              this.setState({
                videoDimX1: 1.25,
                videoZindex1: 10,
                playing: true
              })
            }
            onPause={() =>
              this.setState({
                videoDimX1: 1,
                videoZindex1: 1,
                playing: false
              })
            }
          />
        </div>
        {/*Theme 2*/}
        <div
          style={{
            position: "absolute",
            top: 3 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 2 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 2 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex2,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX2 * this.state.videoHeight}
            width={this.state.videoDimX2 * this.state.videoWidth}
            url={this.theme2Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX2: 1.25,
                videoZindex2: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX2: 1,
                videoZindex2: 1
              })
            }
          />
        </div>
        {/*Theme 3*/}
        <div
          style={{
            position: "absolute",
            top: 4.5 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 3 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 3 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex3,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX3 * this.state.videoHeight}
            width={this.state.videoDimX3 * this.state.videoWidth}
            url={this.theme3Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX3: 1.25,
                videoZindex3: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX3: 1,
                videoZindex3: 1
              })
            }
          />
        </div>
        {/*Theme 4*/}
        <div
          style={{
            position: "absolute",
            top: 6 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 4 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 4 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex4,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX4 * this.state.videoHeight}
            width={this.state.videoDimX4 * this.state.videoWidth}
            url={this.theme4Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX4: 1.25,
                videoZindex4: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX4: 1,
                videoZindex4: 1
              })
            }
          />
        </div>
        {/*Theme 5*/}
        <div
          style={{
            position: "absolute",
            top: 7.5 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 5 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 5 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex5,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX5 * this.state.videoHeight}
            width={this.state.videoDimX5 * this.state.videoWidth}
            url={this.theme5Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX5: 1.25,
                videoZindex5: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX5: 1,
                videoZindex5: 1
              })
            }
          />
        </div>
        {/*Theme 6*/}
        <div
          style={{
            position: "absolute",
            top: 9 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 6 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 6 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex6,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX6 * this.state.videoHeight}
            width={this.state.videoDimX6 * this.state.videoWidth}
            url={this.theme6Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX6: 1.25,
                videoZindex6: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX6: 1,
                videoZindex6: 1
              })
            }
          />
        </div>
        {/*Theme 7*/}
        <div
          style={{
            position: "absolute",
            top: 10.5 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 7 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 7 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex7,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX7 * this.state.videoHeight}
            width={this.state.videoDimX7 * this.state.videoWidth}
            url={this.theme7Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX7: 1.25,
                videoZindex7: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX7: 1,
                videoZindex7: 1
              })
            }
          />
        </div>
        {/*Theme 8*/}
        <div
          style={{
            position: "absolute",
            top: 12 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none",
            left: (window.innerWidth * this.state.themeWidth) / 6,
            width: this.state.themeWidth * window.innerWidth,
            transition: "width 1s, left 1s"
          }}
        >
          {/*Theme 8 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 8 Video*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.themeGap / 3,
              zIndex: this.state.videoZindex8,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoDimX8 * this.state.videoHeight}
            width={this.state.videoDimX8 * this.state.videoWidth}
            url={this.theme8Video}
            controls={true}
            onPlay={() =>
              this.setState({
                videoDimX8: 1.25,
                videoZindex8: 10
              })
            }
            onPause={() =>
              this.setState({
                videoDimX8: 1,
                videoZindex8: 1
              })
            }
          />
        </div>
        {/*End of Themes Buffer*/}
        <div
          style={{
            position: "absolute",
            left: window.innerWidth / 8,
            width: (3 * window.innerWidth) / 4,
            top: 13.5 * this.state.themeGap,
            height: (3 * this.state.themeGap) / 4,
            pointerEvents: "none"
          }}
        />
        {/*Title Bar*/}
        <div className="titlebar" style={{ top: -10, width: 550, zIndex: 10 }}>
          <Typekit kitId="bor7jxc" />
          {/*Home Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.indexFunction}
            style={{
              fontSize: 48,
              position: "relative",
              display: "inline",
              top: 5.5,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9675;
          </span>
          {/*About Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.aboutFunction}
            style={{
              fontFamily: "ballinger-mono",
              fontSize: 24,
              position: "relative",
              display: "inline",
              top: 0,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            About
          </span>
          {/*Slider Button*/}
          <SliderInput
            min={0}
            max={100}
            step={0.1}
            value={this.state.value}
            style={{
              position: "relative",
              display: "inline-block",
              top: -2,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center",
              verticalAlign: "middle",
              width: 120
            }}
            onChange={value => this.sliderChange(value)}
          >
            <SliderTrack style={{ height: 1 }}>
              <SliderTrackHighlight />
              <SliderHandle />
            </SliderTrack>
          </SliderInput>
          {/*Next Button*/}
          <span
            role="button"
            aria-label="Next"
            data-balloon-pos="down-right"
            onClick={this.circleFunction}
            style={{
              fontSize: 32,
              position: "relative",
              display: "inline",
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#11027;
          </span>
          {/*Triangle Button*/}
          <span
            role="button"
            aria-label="Triangle Button"
            data-balloon-pos="down-right"
            onClick={this.triangleFunction}
            style={{
              fontSize: 30,
              position: "relative",
              display: "inline-block",
              top: 3,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9653;
          </span>
          {/*Legend Button*/}
          <span
            role="button"
            aria-label="Legend"
            data-balloon-pos="down-right"
            onClick={this.legendFunction}
            style={{
              fontSize: 32,
              position: "relative",
              display: "inline",
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9677;
          </span>
          {/*Research Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.researchFunction}
            style={{
              fontFamily: "ballinger-mono",
              fontSize: 24,
              position: "relative",
              display: "inline",
              top: 0,
              marginLeft: 10,
              textAlign: "center"
            }}
          >
            Research
          </span>
        </div>
        {/*Map Scale Top Right*/}
        <div>
          <span className="mapScaleMain" />
          <span className="mapScaleSide" style={{ right: 25 }} />
          <span className="mapScaleSide" style={{ right: 145 }} />
          <text className="mapScaleNumber" style={{ right: 25 }}>
            {this.state.scaleDistance} meters
          </text>
        </div>
        {/*About Window*/}
        <div
          className="about"
          ref={this.aboutRef}
          style={{
            width: this.state.aboutWidth,
            height: window.innerHeight,
            fontSize: 14,
            zIndex: 100
          }}
        >
          {/*About Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.aboutFunction}
            style={{
              fontSize: 22,
              position: "absolute",
              marginLeft: 10,
              marginTop: 10,
              color: "white",
              zIndex: 101
            }}
          >
            &#10005;
          </span>
          {/*About Window - Text Content*/}
          <p style={{ margin: 50, fontSize: 14 }}> {this.aboutText} </p>
        </div>
        {/*Legend Window*/}
        <div
          id="legendWindow"
          className="legend"
          ref={this.legendRef}
          style={{
            width: window.innerWidth,
            height: this.state.legendHeight,
            fontSize: 28,
            zIndex: 100
          }}
        >
          {/*Legend Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.legendFunction}
            style={{
              fontSize: 22,
              position: "fixed",
              marginLeft: 10,
              marginTop: 10,
              color: "white",
              zIndex: 101
            }}
          >
            &#10005;
          </span>
          {/*Legend Window - Content Div Left*/}
          <div
            style={{
              marginTop: 20,
              marginLeft: 50,
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 10,
              display: "inline-block"
            }}
          >
            {/*Legend Gods*/}
            <div
              style={{
                marginLeft: 10
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.godsColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Place of Worship; # Stores: 63; Commonly Sold: Religion
              </p>
            </div>
            {/*Legend Gods Stores*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.godsStoreColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Religious Goods; # Stores: 37; Commonly Sold: Idols, Incense,
                Vermillon
              </p>
            </div>
            {/*Legend Beauty & Wedding*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.bnwColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Beauty & Wedding; # Stores: 196; Commonly Sold: Bangles,
                Jewelry, Cosmetics, Bridal wear
              </p>
            </div>
            {/*Legend Kitchen Utensils*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.kitchenColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Kitchen Utensils; # Stores: 115; Commonly Sold: Pots, Pans,
                Ladles, Crockery
              </p>
            </div>
            {/*Legend Grocery*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.groceryColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Grocery; # Stores: 33; Commonly Sold: Grains, Spices
              </p>
            </div>
          </div>
          {/*Legend Window - Content Div Right*/}
          <div
            style={{
              marginTop: 20,
              marginLeft: 100,
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 10,
              display: "inline-block"
            }}
          >
            {/*Legend Toys*/}
            <div
              style={{
                marginLeft: 10
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.toysColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Toys; # Stores: 77; Commonly Sold: Dolls, Bikes, Stuffed animals
              </p>
            </div>
            {/*Legend Plastic Goods*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.plasticColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Plastic Goods; # Stores: 71; Commonly Sold: Mops, Buckets,
                Diapers
              </p>
            </div>
            {/*Legend Restaurant*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.restoColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Restaurant; # Stores: 5; Commonly Sold: Meals & snacks
              </p>
            </div>
            {/*Legend Bars & Liquor*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.barsColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Bar & Liquor; # Stores: 2; Commonly Sold: Alcholic beverages
              </p>
            </div>
          </div>
        </div>
        {/*Research Window*/}
        <div
          className="research"
          ref={this.researchRef}
          style={{
            width: this.state.researchWidth,
            leftBorder: this.state.researchBorder,
            height: window.innerHeight,
            fontSize: 28,
            zIndex: 100
          }}
        >
          {/*Research Window - Inner Box*/}
          <div
            style={{
              left: 0,
              width: 50,
              height: window.innerHeight,
              position: "absolute",
              backgroundColor: "black",
              zIndex: 101
            }}
          />
          {/*Research Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.researchFunction}
            style={{
              fontSize: 22,
              position: "fixed",
              marginTop: 10,
              marginLeft: 10,
              color: "white",
              zIndex: 102
            }}
          >
            &#10005;
          </span>
          {/*Research Window - Image Holder*/}
          <div
            className="research"
            style={{
              width: this.state.researchWidth,
              leftBorder: this.state.researchBorder,
              height: window.innerHeight,
              fontSize: 28,
              zIndex: 100
            }}
          >
            {/*Research Window - Image 1*/}
            <img
              style={{ marginLeft: 50, marginTop: window.innerHeight / 10 }}
              src="https://i.imgur.com/oEgq3R8.jpg"
              height={(4 * window.innerHeight) / 5}
              width="auto"
            />
            {/*Research Window - Image 2*/}
            <img
              style={{ marginLeft: 50, marginTop: window.innerHeight / 10 }}
              src="https://i.imgur.com/Fn7Komh.jpg"
              height={(4 * window.innerHeight) / 5}
              width="auto"
            />
          </div>
        </div>
        {/*Map Dots PopUps*/}
        <div>
          <text
            style={{
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 12,
              position: "fixed",
              left: this.state.popUpX,
              top: this.state.popUpY,
              textAlign: "center",
              color: "white",
              backgroundColor: this.state.popUpColor,
              alignSelf: "flex-start",
              padding: this.state.popUpPad
            }}
          >
            {this.state.pointName} <br /> {this.state.layerName}
          </text>
        </div>
      </div>
    );
  }
}

export default Application;
