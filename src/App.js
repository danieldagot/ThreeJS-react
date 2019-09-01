
import React, { Component } from "react";
import * as THREE from "three";
import "./App.css"

import ThreeD from "./3d";
import jquery from "jquery"
import Three from "./Three"
// const OrbitControls = require('three-orbitcontrols')
// let SVGLoader = require('three-svg-loader')
let f1 = require("./fonts/Tinos_Regular.json")

class App extends Component {
  constructor() {

    super()
    this.colorloder1 = new THREE.TextureLoader();
    this.loader = new THREE.FontLoader()
    this.temp = ""
    this.color = "#0080ff"
    this.state = {
      
      text: `היי
      שלאום דניאל` ,
      bool: false,
      color: "#0080ff",
      font: "Amatic",
      mode: false
    }

  }




  updateText = (event) => {
    // jquery.get(".temp").empty()
    // this.setState({
    //   temp: event.target.value
    // }, function () {
    //   console.log(this.state.text)
    // })
    this.temp = event.target.value
    console.log(this.temp)
    this.colorloder1.load()
  }

  updateFirst = (event) => {
    this.first = event.target.value
    console.log(this.temp)
    this.colorloder1.load()
  }
  updateDoorNum = (event) => {
    this.DoorNum = event.target.value
  }




  updateColor = (event) => {
    // jquery.get(".temp").empty()
    // this.setState({
    //   color: event.target.value
    // }, function () {
    //   console.log(this.state.color)

    // })

    this.color = event.target.value
    console.log(this.color);
  }



  updateFont = (event) => {
    // jquery.get(".temp").empty()
    this.setState({
      font: event.target.value
    }, function () {
      console.log(this.state.font)
    })


    console.log(this.color);
  }
  cliced = () => {
    this.setState({ text: "" }, function () { })
    this.setState({ mode: !this.state.mode }, function () { })

  }

  
  change = () => {
    if (this.state.mode) {
      let text = `${this.first}
      ${this.DoorNum}`
      this.setState({
        color: this.color,
        text: text
      }, function () {
        console.log(this.state.text)

      })

    }
    else {
      this.setState({
        color: this.color,
        text: this.temp
      }, function () {
        console.log(this.state.text)

      })
    }

  }

  render() {

    jquery("canvas").remove()

    return (

      <div className="temp">
        <div class="input">
          <input type="color" value="#0080ff" name="favcolor" onChange={this.updateColor} />
          <div onClick={this.cliced} val='Extreme' className={this.state.mode ? 'Extreme2' : 'Extreme'}> Extreme </div>
          {this.state.mode ? <div> <input type="text" placeholder={"שם משפחה"} onChange={this.updateFirst} />
            <input type="number" placeholder={"מספר"} onChange={this.updateDoorNum} /> </div>
            : <textarea id="name-input" cols="40" rows="1" onChange={this.updateText} placeholder="text" />}



          <select onChange={this.updateFont} >
            <option value="Tinos">Tinos</option>
            <option selected value="Amatic">Amatic</option>
            <option value="David">David</option>
            <option value="Sans">Sans</option>
          </select>

          <button onClick={this.change}>update</button>
        </div>
        {this.state.bool ? <div className="temp2">  <ThreeD text={this.state.text} bool="1" /></div> : null}
        <div className="temp2">  <ThreeD text={this.state.text} bool="1" color={this.state.color} font={this.state.font} mode ={this.state.mode} /></div>
        {/* <Three text={this.state.text}  /> */}
      </div>

    )
  }
}


export default App;
  // componentDidMount() {
  //   // === THREE.JS CODE START ===



  //   let camera, scene, renderer; init(); animate(); function init() {
  //     camera = new
  //       THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000); camera.position.set(0, - 400, 600); scene = new THREE.Scene(); scene.background = new THREE.Color(0xf0f0f0); let loader = new THREE.FontLoader(); loader.load(
  //         'https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/gentilis_bold.typeface.json', function (font) {
  //           // let xMid, text; let color = new THREE.Color(0x006699);
  //           //  let matDark = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
  //           //   let matLite = new THREE.MeshBasicMaterial(
  //           //   { color: color, transparent: true, opacity: 0.4, side: THREE.DoubleSide }); 
  //           //   let message = "shlom hod"; let shapes = font.generateShapes(message, 100);
  //           //    let geometry = new THREE.ShapeBufferGeometry(shapes); geometry.computeBoundingBox();
  //           // xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x); 
  //           // geometry.translate(xMid, 0, 0); // make shape ( N.B. edge view not visible ) 
  //           // text = new THREE.Mesh(geometry, matLite); text.position.z = - 150; scene.add(text);
  //           // // make line shape ( N.B. edge view remains visible )



  //           var textGeometry = new THREE.TextGeometry( "hoooooood", {
  //             font: font,
  //             size: 60,
  //             height: 10,
  //             curveSegments: 12,
  //             bevelThickness: 1,
  //             bevelSize: 1,
  //             bevelEnabled: true
  //           });

  //           var textMaterial = new THREE.MeshPhongMaterial( 
  //             { color: 0xdddddd,}
  //           );

  //           var mesh = new THREE.Mesh( textGeometry, textMaterial );

  //           scene.add( mesh );

  //         }); //end load ffunction
  //     renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight
  //     ); document.body.appendChild(renderer.domElement); let controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, 0, 0); controls.update(); window.addEventListener('resize', onWindowResize, false);
  //   } // end init
  //   function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); } function animate() {
  //     requestAnimationFrame(animate); render();
  //   } function render() { renderer.render(scene, camera); }



  //   // let scene = new THREE.Scene();
  //   // let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   // let renderer = new THREE.WebGLRenderer();
  //   // renderer.setSize( window.innerWidth, window.innerHeight );
  //   // document.body.appendChild( renderer.domElement );
  //   // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   // let cube = new THREE.Mesh( geometry, material );

  //   // // let text = new THREE.TextGeometry( 'Hello three.js!', {
  //   // //   font: "helvetiker",
  //   // //   size: 80,
  //   // //   height: 5,
  //   // //   curveSegments: 12,
  //   // //   bevelEnabled: true,
  //   // //   bevelThickness: 10,
  //   // //   bevelSize: 8,
  //   // //   bevelOffset: 0,
  //   // //   bevelSegments: 5
  //   // // } );
  //   // let loader = new THREE.FontLoader();

  //   // loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

  //   //   let geometry = new THREE.TextGeometry( 'Hello three.js!', {
  //   //     font: font,
  //   //     size: 80,
  //   //     height: 5,
  //   //     curveSegments: 12,
  //   //     bevelEnabled: true,
  //   //     bevelThickness: 10,
  //   //     bevelSize: 8,
  //   //     bevelOffset: 0,
  //   //     bevelSegments: 5
  //   //   } );
  //   // } );

  //   // scene.add( cube );
  //   // //scene.add(geometry)
  //   // camera.position.z = 5;
  //   // let animate = function () {
  //   //   requestAnimationFrame( animate );
  //   //   cube.rotation.x += 0.01;
  //   //   cube.rotation.y += 0.01;
  //   //   renderer.render( scene, camera );
  //   // };
  //   // animate();
  //   // // === THREE.JS EXAMPLE CODE END ===
  // }