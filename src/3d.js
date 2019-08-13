import React, { Component } from "react";
import * as THREE from "three";

const OrbitControls = require('three-orbitcontrols')
//let SVGLoader = require('three-svg-loader')

class ThreeD extends Component {


  text(bool, text, color) {
    // === THREE.JS CODE START ===



    let camera, scene, renderer; init(); animate(); function init() {
      camera = new
        THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(0, 0, 600); scene = new THREE.Scene(); scene.background = new THREE.Color(0xf0f0f0);
      let loader = new THREE.FontLoader();

      loader.load(
        'https://raw.githubusercontent.com/danieldagot/3dhod/master/Open%20Sans%20Hebrew%20Extra%20Bold_Italic.json', function (font) {
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



          var textGeometry = new THREE.TextGeometry(text, {
            font: font,
            size: 60,
            height: 10,
            curveSegments: 12,
            bevelThickness: 1,
            bevelSize: 1,
            bevelEnabled: true,

          });

          // let textMaterial =  new THREE.MeshPhongMaterial( {
          //   shading: THREE.FlatShading,
          //   transparent: true,
          //   opacity: 0.7,
          // } );
          let color2 = new THREE.Color(color);
          let textMaterial = new THREE.MeshBasicMaterial({ color: color2, transparent: false, opacity: 0.4 });

          //#8080ff
          let mesh = new THREE.Mesh(textGeometry, textMaterial);


          scene.add(mesh);

        }); //end load ffunction
      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight
      );
      document.body.appendChild(renderer.domElement);
      let controls = new OrbitControls(camera);

     
      camera.position.set(0, 0, 600)
      //controls.target.set(0, 0, 0);
      controls.update();
      window.addEventListener('resize', onWindowResize, true);
    } // end init
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      if (bool == true) {
        renderer.render(scene, camera);
      }
      else {

      }
    }


  }


  getLen = (inputtxt) => {


    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    if (inputtxt != undefined) {


      var letters = /^[A-Za-z1-9]+$/;
      if (inputtxt.match(letters)) {
        console.log(inputtxt);
        return inputtxt;
      }
      else {

        return reverseString(inputtxt);
      }
    }

  }

  render() {

    return (
      <div>
        {this.text(this.props.bool, this.getLen(this.props.text), this.props.color)}
      </div>



    )
  }
}



export default ThreeD;
