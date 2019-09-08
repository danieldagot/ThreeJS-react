
import React, { Component } from "react";
import * as THREE from "three";
import Iframe from 'react-iframe'
import ThreeD from "./3d";
import jquery from "jquery"
import Three from "./Three"
// const OrbitControls = require('three-orbitcontrols')
// let SVGLoader = require('three-svg-loader')
const utf8 = require('utf8');


class App extends Component {
  constructor() {
     
    super()
    this.colorloder1 = new THREE.TextureLoader();
    this.loader = new THREE.FontLoader()
    this.temp = ""
    this.color = ""
    this.state = {
      text: "hello",
      bool: false,
      color: "#00ff00", 
     fonts : {}  
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
  change = () => {

    this.setState({
      color: this.color,
      text: this.temp
    }, function () {
      console.log(this.state.text)
      
    })

  }

async componentDidMount(){
  this.loader.load(
    'https://raw.githubusercontent.com/danieldagot/3dhod/master/Open%20Sans%20Hebrew%20Extra%20Bold_Italic.json', function (font) {
      console.log(font);
  })
let f =  await this.loader.parse("./fonts/Tinos_Regular.json")
this.loader.load(
  f.data, function (font) {
    console.log(font);
})
  console.error(f);
 
console.log(f);


}
  render() {
    
 jquery("canvas").remove()
  
    return (

      <div className="temp">
        <input type="color" name="favcolor" onChange={this.updateColor} />
        <textarea  id="name-input" cols="40" rows="1"  onChange={this.updateText} placeholder="text" />
        <button onClick={this.change}>update</button>
        {/* {this.state.bool  ? <div className ="temp2">  <ThreeD text = {this.state.text} bool = "1" /></div> : null }
         <div className="temp2">  <ThreeD text={this.state.text} bool="1" color={this.state.color}   /></div> */}
        {/* <Three text={this.state.text}  /> */}
        <Iframe url={`"https://dagot1.herokuapp.com/text?test=${utf8.encode(this.state.text)}&font=${this.state.font}&color=${this.color.replace("#","")}` 
        }
          width="100%"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative" />
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