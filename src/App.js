
import React, { Component } from "react";
import * as THREE from "three";

const OrbitControls = require('three-orbitcontrols')
let SVGLoader = require('three-svg-loader')
class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===



    let camera, scene, renderer; init(); animate(); function init() {
      camera = new
        THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000); camera.position.set(0, - 400, 600); scene = new THREE.Scene(); scene.background = new THREE.Color(0xf0f0f0); let loader = new THREE.FontLoader(); loader.load(
          'https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/gentilis_bold.typeface.json', function (font) {
            // let xMid, text; let color = new THREE.Color(0x006699);
            //  let matDark = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
            //   let matLite = new THREE.MeshBasicMaterial(
            //   { color: color, transparent: true, opacity: 0.4, side: THREE.DoubleSide }); 
            //   let message = "shlom hod"; let shapes = font.generateShapes(message, 100);
            //    let geometry = new THREE.ShapeBufferGeometry(shapes); geometry.computeBoundingBox();
            // xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x); 
            // geometry.translate(xMid, 0, 0); // make shape ( N.B. edge view not visible ) 
            // text = new THREE.Mesh(geometry, matLite); text.position.z = - 150; scene.add(text);
            // // make line shape ( N.B. edge view remains visible )
           

          
            var textGeometry = new THREE.TextGeometry( "hoooooood", {
              font: font,
              size: 60,
              height: 10,
              curveSegments: 12,
              bevelThickness: 1,
              bevelSize: 1,
              bevelEnabled: true
            });
          
            var textMaterial = new THREE.MeshPhongMaterial( 
              { color: 0xdddddd,}
            );
          
            var mesh = new THREE.Mesh( textGeometry, textMaterial );
          
            scene.add( mesh );
        
          }); //end load ffunction
      renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight
      ); document.body.appendChild(renderer.domElement); let controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, 0, 0); controls.update(); window.addEventListener('resize', onWindowResize, false);
    } // end init
    function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); } function animate() {
      requestAnimationFrame(animate); render();
    } function render() { renderer.render(scene, camera); }



    // let scene = new THREE.Scene();
    // let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // let renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // let cube = new THREE.Mesh( geometry, material );

    // // let text = new THREE.TextGeometry( 'Hello three.js!', {
    // //   font: "helvetiker",
    // //   size: 80,
    // //   height: 5,
    // //   curveSegments: 12,
    // //   bevelEnabled: true,
    // //   bevelThickness: 10,
    // //   bevelSize: 8,
    // //   bevelOffset: 0,
    // //   bevelSegments: 5
    // // } );
    // let loader = new THREE.FontLoader();

    // loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    //   let geometry = new THREE.TextGeometry( 'Hello three.js!', {
    //     font: font,
    //     size: 80,
    //     height: 5,
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 10,
    //     bevelSize: 8,
    //     bevelOffset: 0,
    //     bevelSegments: 5
    //   } );
    // } );

    // scene.add( cube );
    // //scene.add(geometry)
    // camera.position.z = 5;
    // let animate = function () {
    //   requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };
    // animate();
    // // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div />
    )
  }
}


export default App;
