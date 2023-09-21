import { NextReactP5Wrapper } from "@p5-wrapper/next";
class Ball {
  constructor(p5) {
    this.pos = p5.createVector(
      (p5.random(p5.width) - p5.width / 2) * 0.8,
      -100,
      0
    ); // Add z coordinate
    // console.log(this.pos);
    this.vel = p5.createVector((p5.random() - 0.5) * 4, 0);
    this.acc = p5.createVector(0, 0.1);
    // this.maxspeed = 4;
    this.prevPos = this.pos.copy();
    this.p5 = p5;
    // this.lineHistory = []; // Array to store line history
    // this.maxLineHistory = 2; // Limit the number of lines to store
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    if (this.pos.y >= 100) {
      if (this.vel.y > 0.5) {
        this.vel.y *= -0.8;
        this.vel.x *= 0.9;
      } else {
        this.acc.y = 0;
        this.vel.y = 0;
        this.acc.x = this.vel.x > 0 ? -0.01 : 0.01;
      }
    }
    if (this.p5.abs(this.vel.x) < 0.1) {
      this.vel.x = 0;
      this.acc.x = 0;
    }
  }

  // follow() {
  //   // var x = this.p5.floor(this.pos.x / scl);
  //   // var y = this.p5.floor(this.pos.y / scl);
  //   // var z = 0; // Map z to flow field dimensions
  //   // var index = x + y * cols; // Adjust index calculation for 3D
  //   // var force = vectors[index];
  //   this.applyForce(this.acc);
  // }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    this.p5.push();
    this.p5.translate(this.pos.x, this.pos.y);
    this.p5.sphere(10);
    this.p5.pop();
    // this.updatePrev();
  }

  updatePrev(edge = true) {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.prevPos.z = this.pos.z;
  }

  // edges(vectors) {
  //   if (this.pos.x > this.p5.width / 2) {
  //     this.pos.x = -this.p5.width / 2;
  //     this.updatePrev();
  //   }
  //   if (this.pos.x < -this.p5.width / 2) {
  //     this.pos.x = this.p5.width / 2;
  //     this.updatePrev();
  //   }
  //   if (this.pos.z > 50) {
  //     this.pos.z = -50;
  //     this.updatePrev();
  //   }
  //   if (this.pos.z < -50) {
  //     this.pos.z = 50;
  //     this.updatePrev();
  //   }
  //   if (this.pos.y > this.p5.height / 2) {
  //     this.pos.y = -this.p5.height / 2;
  //     this.updatePrev();
  //   }
  //   if (this.pos.y < -this.p5.height / 2) {
  //     this.pos.y = this.p5.height / 2;
  //     this.updatePrev();
  //   }
  // }
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
  let button;

  let balls = [];

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

    // for (var i = 0; i < 100; i++) {
    //   particles[i] = new Particle(p5);
    // }

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

    button = p5.createButton("click me");
    button.position(10, 380);
    button.mousePressed(ballDrop);

    // p5.noLoop();
  };

  const ballDrop = () => {
    balls.push(new Ball(p5));
  };

  const light = () => {
    p5.background(250, 0);
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
    p5.push();
    p5.translate(0, 100, 0);
    p5.rotateX(p5.PI / 2);
    p5.fill(100, 40);
    p5.plane(1000);
    p5.pop();

    for (var i = 0; i < balls.length; i++) {
      balls[i].show();
      balls[i].update();
      // particles[i].follow(flowfield);
      // particles[i].update();
      // particles[i].edges(flowfield);
      // particles[i].show(colorfield);
    }

    // console.log(p5.frameRate().toFixed(1));
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[100]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
