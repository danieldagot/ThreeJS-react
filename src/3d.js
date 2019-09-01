import React, { Component } from "react";
import * as THREE from "three";
const utf8 = require('utf8');
const OrbitControls = require('three-orbitcontrols')
//let SVGLoader = require('three-svg-loader')
let f1 = require("./fonts/Tinos_Regular.json")
let f2 = require("./fonts/Amatic SC_Regular.json")
let f3 = require("./fonts/David Libre_Regular.json")
let f4 = require("./fonts/Open Sans Hebrew Extra Bold_Italic (1).json")
const fonts = {
  Tinos: new THREE.Font(f1),
  Amatic: new THREE.Font(f2),
  David: new THREE.Font(f3),
  Sans: new THREE.Font(f4),
}

const font3 = new THREE.Font(f1);

class ThreeD extends Component {

  text(bool, text, color, fontName) {
    // === THREE.JS CODE START ===



    let camera, scene, renderer; init(); animate(); function init() {
      camera = new
        THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
      //camera.position.set(0, 0, 600);
      scene = new THREE.Scene();

      //     scene.background = new THREE.Color(0xf0f0f0);
      let loader = new THREE.FontLoader();
      let loder1 = new THREE.TextureLoader();
      loder1.load('data:image/jpeg;base64,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', function (texture) {
        console.log(texture)

        //  scene.background = texture;
        scene.background = texture

      });
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

          console.log(font);
          console.log(fontName);


          var textGeometry = new THREE.TextGeometry(text, {
            font: fonts[fontName],
            size: 30,
            height: 10,
            curveSegments: 12,
            bevelThickness: 1,
            bevelSize: 1,
            bevelEnabled: true,

          });
          textGeometry.computeBoundingBox();
          textGeometry.computeVertexNormals();
          let centerOffset = - 0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
          // let textMaterial =  new THREE.MeshPhongMaterial( {
          //   shading: THREE.FlatShading,
          //   transparent: true,
          //   opacity: 0.7,
          // } );
          let color2 = new THREE.Color(color);
          let textMaterial = new THREE.MeshBasicMaterial({ color: color2, transparent: false, opacity: 0.4 });





          //#8080ff
          let mesh = new THREE.Mesh(textGeometry, textMaterial);
          mesh.position.x = centerOffset;
          mesh.position.y = 0;
          mesh.position.z = 0;
          scene.add(mesh);

        }); //end load ffunction
      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight
      );

      camera.position.set(0, 0, 600)
      console.log(renderer.domElement);

      document.body.appendChild(renderer.domElement);
      let controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false
      // controls.maxDistance = 1000

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


  getLen = (inputtxt, mode) => {

    function reverseIt(data) {

      // This function reverses a textarea
      // Copyright (C) 2002 Eliram Haklai
      // www.eliram.com

      let theLineChars = "\n\r";
      let theStraightChars = "";

      theStraightChars = "0123456789" + theStraightChars;
      theStraightChars = "./:-" + theStraightChars;
      theStraightChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + theStraightChars;
      let theString = data
      let theReverse = "";
      let theReverseArea = "";
      let theStraightBuffer = "";
      let theLength = theString.length;
      for (let i = 0; i < theLength; i++) {
        if (theLineChars.indexOf(theString.charAt(i)) >= 0) {
          if (theStraightBuffer != "") {
            theReverse = theStraightBuffer + theReverse;
            theStraightBuffer = "";
          }
          theReverse = theReverse + theString.charAt(i);
        } else {
          if (theStraightChars.indexOf(theString.charAt(i)) >= 0) {
            theStraightBuffer = theStraightBuffer + theString.charAt(i);
          } else {
            if (theStraightBuffer != "") {
              theReverse = theStraightBuffer + theReverse;
              theStraightBuffer = "";
            }
            theReverse = theString.charAt(i) + theReverse;
          }
        }
        if (theString.charAt(i) == "\r") {
          theReverseArea = theReverseArea + theReverse;
          theReverse = "";
        }
      }
      if (theStraightBuffer != "") {
        theReverse = theStraightBuffer + theReverse;
        theStraightBuffer = "";
      }
      theReverseArea = theReverseArea + theReverse;
      console.log(theReverseArea);
      return theReverseArea

    }
    function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }

    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    function reverseSent(str) {

      return (str.split(/\s/).reverse().join(" "));
      // return str = arr.join(" ");
    }

    if (inputtxt != undefined) {


      var letters = /^[A-Za-z]+$/;
      if (inputtxt.match(letters)) {
        console.log(inputtxt);
        return inputtxt;
      }
      else {


        console.log(inputtxt.includes("\n") ? inputtxt = replaceAll(inputtxt, "\n", " !!!!!!!!!!!!!!!! ") : null);

        if (inputtxt.includes("!!!!!!!!!!!!!!!!")) { inputtxt = reverseSent(inputtxt) }
        let test = reverseIt(inputtxt)

        if (!mode) {
          test = replaceAll(test, "!!!!!!!!!!!!!!!!", "\n")
          let lines = test.split('\n');
          for (var i = 0; i < lines.length; i++) {
            lines[i] = reverseSent(lines[i])
            console.log(lines[i]);

          }
          lines = lines.join("!!!!!!!!!!!!!!!!")
          lines = replaceAll(lines, "!!!!!!!!!!!!!!!!", "\n")
          return lines;


        }
        else {

          console.log(test);
          // test=  test.split('\n')
          test =  reverseSent(test)
          test = replaceAll(test, "!!!!!!!!!!!!!!!!", "\n")
          

          return test
        }




        //  test = reverseIt(test)



        //  return reverseString(inputtxt);

        //  return reverseIt(inputtxt)
        //return inputtxt

      }
    }

  }

  render() {

    return (
      <div>
        {this.text(this.props.bool, this.getLen(this.props.text, this.props.mode), this.props.color, this.props.font)}
      </div>



    )
  }
}



export default ThreeD;
