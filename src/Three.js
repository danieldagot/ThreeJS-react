import React from 'react';
import ResizeObserver from "resize-observer-polyfill";
import * as THREE from 'three';
import './Three.scss';
export default class Three extends React.Component {
  state = {
    width: 512,
    height: 512
  };

  /**
   * Rendering
   */
  render() {
    return (
      <div className='three' ref={(el) => { this.three = el } } { ...this.loade}></div>
    );
  }

  /**
   * Initialization
   */
  componentDidMount () {
    this.loader = new THREE.FontLoader();
   
    console.log(this.text);
    
    this.loade = async () => {
      this.text = this.props.text
      let OrbitControls = require('three-orbitcontrols')
      await this.loader.load('https://raw.githubusercontent.com/danieldagot/3dhod/master/Open%20Sans%20Hebrew%20Extra%20Bold_Italic.json', font => {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(0, 0, 600);
        this.renderer = new THREE.WebGLRenderer({ antialias: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.three.appendChild(this.renderer.domElement);

        this.group = new THREE.Group();
        this.group.position.y = 100;
        this.scene.add(this.group);
        // this.directionalLight = new THREE.DirectionalLight(0x9090aa);
        // this.directionalLight.position.set(-10, 10, -10).normalize();
        // this.scene.add(this.directionalLight);

        // this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        // this.hemisphereLight.position.set(1, 1, 1);
        // this.scene.add(this.hemisphereLight);

        this.geometry = new THREE.TextGeometry(this.text, {
          font: font,
          size: 60,
          height: 10,
          curveSegments: 12,
          bevelThickness: 1,
          bevelSize: 1,
          bevelEnabled: true,
        });
        this.geometry.computeBoundingBox();
        this.geometry.computeVertexNormals();
        var centerOffset = - 0.5 * (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: false, opacity: 0.4 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.position.x = centerOffset;
        this.cube.position.y = -100;
        this.cube.position.z = 0;

        //this.camera.lookAt (new THREE.Vector3(0,0,0))

        this.cube.rotation.x = 0;
        this.group.add(this.cube)
        //this.scene.add(this.cube);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.controls.minPolarAngle = Math.PI/2;
        // this.controls.maxPolarAngle = Math.PI/2;
        this.controls.enablePan = false


        this.animate();

        this.observer = new ResizeObserver(entries => {
          const { width, height } = entries[0].contentRect;
          this.setState({
            width: Math.floor(width),
            height: Math.floor(height)
          });
        });

        this.observer.observe(this.three);
      }

      )
    }
    this.loade()
  }
  /**
   * Animation loop
   */
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    // var centerOffset = - 0.5 * ( this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x );
    // this.cube.position.x = centerOffset;
    // this.cube.position.y = -100;
    // this.cube.position.z = 0;
    this.controls.update()
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Invalidation handler
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.renderer.setSize(this.state.width, this.state.height);
    this.camera.aspect = this.state.width / this.state.height;
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
    console.log(prevProps);
    
  }

  /**
   * Dispose
   */
  componentWillUnmount() {
    this.observer.disconnect();
    
    
  }

}
