
import React, { Component } from "react";
import * as THREE from "three";
import "./App.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ThreeD from "./3d";
import jquery from "jquery"
import Three from "./Three"
import Iframe from 'react-iframe'
// const OrbitControls = require('three-orbitcontrols')
// let SVGLoader = require('three-svg-loader')
let f1 = require("./fonts/Tinos_Regular.json")
const utf8 = require('utf8');



class App extends Component {
  constructor() {

    super()
    this.colorloder1 = new THREE.TextureLoader();
    this.loader = new THREE.FontLoader()
    this.temp = ""
    this.color = "#0080ff"
    this.state = {

      text: `
      היי
      בדיקה דניאל
      nv eurv
      ` ,
      bool: false,
      color: "#0080ff",
      font: "David",
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


  muse = () => {
    this.setState({ bool: !this.state.bool }, function () {
      console.log(this.state.bool);
      console.log(jquery("canvas"));

    })

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
    console.log(jquery("canvas"));
console.log(`/search?test=${utf8.encode(this.state.text)}&font=${this.state.font}&color=${this.color.replace("#","")}` );

    return (

      <div className="temp">
        {/* <div class="input">
          <input type="color" value="#0080ff" name="favcolor" onChange={this.updateColor} />
          <div onClick={this.cliced} val='Extreme' className={this.state.mode ? 'Extreme2' : 'Extreme'}> מצב דלת </div>
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
        </div> */}
        <Router>
          <Route exact path={"/text"} component={ThreeD} />
        </Router>
        {/* <div className="temp2" onClick ={this.muse} >  <ThreeD text={this.state.text}  color={this.state.color} font={this.state.font} mode ={this.state.mode} bool = {this.state.bool} /></div> */}

        <Iframe url={`/text?test=${utf8.encode(this.state.text)}&font=${this.state.font}&color=${this.color.replace("#","")}` 
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
 