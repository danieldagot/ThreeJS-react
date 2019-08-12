import React, { Component } from "react";
import * as THREE from "three";

const OrbitControls = require('three-orbitcontrols')
//let SVGLoader = require('three-svg-loader')

class ThreeD extends Component {
  

    text(bool,text) {
        // === THREE.JS CODE START ===
        
    
   
        let camera, scene, renderer; init(); animate(); function init() {
          camera = new
            THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000); camera.position.set(0, - 400, 600); scene = new THREE.Scene(); scene.background = new THREE.Color(0xf0f0f0); 
            let loader = new THREE.FontLoader();

             loader.load(
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
               
    
              
                var textGeometry = new THREE.TextGeometry( text, {
                  font: font,
                  size: 60,
                  height: 10,
                  curveSegments: 12,
                  bevelThickness: 1,
                  bevelSize: 1,
                  bevelEnabled: true,
                
                });
                  
                let textMaterial =  new THREE.MeshPhongMaterial( {
                  color: 0x00ffff, 
                  shading: THREE.FlatShading,
                  transparent: true,
                  opacity: 0.7,
                } );
              //0xdddddd
                var mesh = new THREE.Mesh( textGeometry, textMaterial );
              
                scene.add( mesh );
            
              }); //end load ffunction
          renderer = new THREE.WebGLRenderer({ antialias: false }); 
          renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight
          ); document.body.appendChild(renderer.domElement); let controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, 0, 0); 
          controls.update(); 
          window.addEventListener('resize', onWindowResize, true);
        } // end init
        function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; 
          camera.updateProjectionMatrix();
           renderer.setSize(window.innerWidth, window.innerHeight); } 
           function animate() {
          requestAnimationFrame(animate);
           render();
        } 
        
        function render() { 
          if ( bool == true) {
            renderer.render(scene, camera);
          }
         else{

         }
         }
    
    
    }


  
   
        render() {

            return (
             <div>
               {this.text(this.props.bool,this.props.text)}
             </div>
             
             
             
            )
          }
}



export default ThreeD;
