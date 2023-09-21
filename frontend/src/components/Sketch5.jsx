import { NextReactP5Wrapper } from "@p5-wrapper/next";
class Particle {
  constructor(p5) {
    this.pos = p5.createVector(
      p5.random(p5.width) - p5.width / 2,
      p5.random(p5.height) - p5.height / 2,
      p5.random(100) - 50
    ); // Add z coordinate
    // console.log(this.pos);
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
    this.p5 = p5;
    this.lineHistory = []; // Array to store line history
    this.maxLineHistory = 2; // Limit the number of lines to store
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = this.p5.floor(this.pos.x / scl);
    var y = this.p5.floor(this.pos.y / scl);
    var z = this.p5.floor(this.pos.z / scl); // Map z to flow field dimensions
    var index = x + y * cols + z * cols * rows; // Adjust index calculation for 3D
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show(color) {
    this.p5.stroke(color * 250);
    this.p5.strokeWeight(10);
    for (let i = 1; i < this.lineHistory.length; i++) {
      const linePos = this.lineHistory[i];
      const linePrePos = this.lineHistory[i - 1];
      // this.p5.stroke(0, 250);
      this.p5.line(
        linePrePos.x,
        linePrePos.y,
        linePrePos.z,
        linePos.x,
        linePos.y,
        linePos.z
      );
    }
    this.updatePrev(false);
  }

  updatePrev(edge = true) {
    if (edge) {
      this.lineHistory = [];
      console.log(this.lineHistory.length);
    } else {
      // Add the current position to the line history
      this.lineHistory.push(this.pos.copy());

      // Limit the line history size
      if (this.lineHistory.length > this.maxLineHistory) {
        this.lineHistory.shift(); // Remove the oldest position
      }
    }
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.prevPos.z = this.pos.z;
  }

  edges(vectors) {
    if (this.pos.x > this.p5.width / 2) {
      this.pos.x = -this.p5.width / 2;
      this.updatePrev();
    }
    if (this.pos.x < -this.p5.width / 2) {
      this.pos.x = this.p5.width / 2;
      this.updatePrev();
    }
    if (this.pos.z > 50) {
      this.pos.z = -50;
      this.updatePrev();
    }
    if (this.pos.z < -50) {
      this.pos.z = 50;
      this.updatePrev();
    }
    if (this.pos.y > this.p5.height / 2) {
      this.pos.y = -this.p5.height / 2;
      this.updatePrev();
    }
    if (this.pos.y < -this.p5.height / 2) {
      this.pos.y = this.p5.height / 2;
      this.updatePrev();
    }
  }
}

let scl = 20;
let cols, rows, depth;
let inc = 0.1;

let zoff = 0;
let particles = [];
let flowfield;
let colorfield;

const sketch = (p5) => {
  let slider;
  let slider1;
  let slider2;
  let slider3;
  let slider4;
  let slider5;
  let slider6;
  let slider7;
  let slider8;
  let checkbox1;
  let checkbox2;
  let checkbox3;
  let checkbox4;
  let checkbox5;
  let checkbox6;
  let radio1;
  let myRate = 0;

  let raindrops = [];
  let customRaindropImage;

  // p5.preload = () => {
  //   customRaindropImage = p5.loadImage("/logo/p5js.svg");
  // };

  p5.setup = () => {
    // p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);

    // p5.perspective(p5.PI / 2, p5.width / p5.height, 0.1, 500);
    p5.noStroke();

    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);
    depth = p5.floor(50 / scl); // Adjust depth based on 3D dimensions

    flowfield = new Array(cols * rows * depth); // Adjust array size for 3D
    colorfield = new Array(cols * rows * depth); // Adjust array size for 3D

    // flowfield = new Array(cols * rows);

    for (var i = 0; i < 100; i++) {
      particles[i] = new Particle(p5);
    }

    slider = p5.createSlider(0, 99, 20);
    slider.position(10, 10);
    slider.style("width", "65px");
    slider1 = p5.createSlider(0, p5.PI * 2, 0, 0.1);
    slider1.position(10, 30);
    slider1.style("width", "65px");
    slider2 = p5.createSlider(0, p5.PI * 2, 0, 0.1);
    slider2.position(10, 50);
    slider2.style("width", "65px");
    slider3 = p5.createSlider(0, 100, 5);
    slider3.position(10, 70);
    slider3.style("width", "65px");
    slider4 = p5.createSlider(0, 100, 20);
    slider4.position(10, 90);
    slider4.style("width", "65px");
    slider5 = p5.createSlider(0, 100, 20);
    slider5.position(10, 110);
    slider5.style("width", "65px");

    radio1 = p5.createRadio();
    radio1.option(" cam1");
    radio1.option(" cam2");
    radio1.option(" cam3");
    radio1.style("width", "65px");
    radio1.position(10, 130);

    checkbox1 = p5.createCheckbox("light1", false);
    checkbox1.position(10, 200);
    checkbox2 = p5.createCheckbox("light2", false);
    checkbox2.position(10, 220);
    checkbox3 = p5.createCheckbox("light3", false);
    checkbox3.position(10, 240);
    checkbox4 = p5.createCheckbox("light4", false);
    checkbox4.position(10, 260);
    checkbox5 = p5.createCheckbox("lines", false);
    checkbox5.position(10, 280);
    checkbox6 = p5.createCheckbox("test", false);
    checkbox6.position(10, 300);

    slider6 = p5.createSlider(0, 500, 100);
    slider6.position(10, 320);
    slider6.style("width", "65px");

    slider7 = p5.createSlider(-50, 150, 50);
    slider7.position(10, 340);
    slider7.style("width", "65px");

    slider8 = p5.createSlider(0, 3, 0);
    slider8.position(10, 360);
    slider8.style("width", "65px");

    // p5.noLoop();
  };

  const light = () => {
    // p5.background(250, 0);
    p5.camera(
      // (120 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      0,
      -slider6.value(),
      250 + (50 * (window.innerHeight - p5.mouseY * 2)) / window.innerHeight,
      // (80 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      0,
      40 - slider7.value(),
      0,
      0,
      1,
      0
    );
    p5.ortho();
  };

  p5.draw = () => {
    light(); // Apply camera settings
    // p5.background(0, 1);
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;

      for (var x = 0; x < cols; x++) {
        for (var z = 0; z < depth; z++) {
          // Loop through depth
          var index = x + y * cols + z * cols * rows; // Adjust index calculation for 3D
          var angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 8;
          var v = p5.createVector();
          v.set(p5.cos(angle), p5.sin(angle), p5.cos(angle)); // Create a 3D vector
          v.setMag(1);
          flowfield[index] = v;
          colorfield[index] = p5.noise(v);
          zoff += inc * 0.0003;
          // ... (existing code)
          // push();
          // translate(x * scl, y * scl);
          // rotate(v.heading());
          // line(0, 0, scl, 0);
          // pop();
        }
        xoff += inc;
      }
      yoff += inc;
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges(flowfield);
      particles[i].show(colorfield);
    }
    // p5.sphere(10);
    console.log(p5.frameRate().toFixed(1));
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[100]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
