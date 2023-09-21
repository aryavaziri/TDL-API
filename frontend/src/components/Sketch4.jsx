import { NextReactP5Wrapper } from "@p5-wrapper/next";
let alfa = -12;

class Particle {
  constructor(p5) {
    this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.color = p5.random(["#99d98c", "#56cfe1", "#5390d9", "#6930c3"]);

    this.maxspeed = 2 + p5.noise(this.pos.x) * 0.5;
    this.prevPos = this.pos.copy();
    this.p5 = p5;
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
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    this.p5.stroke(this.color);
    this.p5.strokeWeight(2);
    this.p5.line(
      this.pos.x + alfa,
      this.pos.y + alfa,
      this.prevPos.x + alfa,
      this.prevPos.y + alfa
    );
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > this.p5.width * 2) {
      this.pos.x = 0;
      this.pos.y = this.p5.random(this.p5.width);
      this.updatePrev();
    }
    if (this.pos.x < -this.p5.width) {
      this.pos.x = this.p5.width;
      this.pos.y = this.p5.random(this.p5.height);
      this.updatePrev();
    }
    if (this.pos.y > this.p5.height * 2) {
      this.pos.y = 0;
      this.pos.x = this.p5.random(this.p5.width);
      this.updatePrev();
    }
    if (this.pos.y < -this.p5.height) {
      this.pos.y = this.p5.height;
      this.pos.x = this.p5.random(this.p5.height);
      this.updatePrev();
    }
    // if (
    //   this.p5.dist(
    //     this.pos.x,
    //     this.pos.y,
    //     this.p5.mouseX + alfa,
    //     this.p5.mouseY + alfa
    //   ) < 8
    // ) {
    //   this.pos.x = this.p5.random(this.p5.width);
    //   this.pos.y = this.p5.random(this.p5.height);
    //   this.updatePrev();
    // }
  }
}
let bg;
let scl = 15;
let cols, rows;
let inc = 8;

let zoff = 0;
let particles = [];
let flowfield;

const sketch = (p5) => {
  // p5.preload = () => {
  //   customRaindropImage = p5.loadImage("/logo/p5js.svg");
  // };

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.noStroke();

    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 500; i++) {
      particles[i] = new Particle(p5);
    }
    // p5.noLoop();
  };
  p5.updateWithProps = (props) => {
    if (props.theme == "dark") {
      bg = "#f1f2f209";
    } else {
      bg = "#ffffff09";
    }
  };

  p5.draw = () => {
    p5.background(bg);
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        // var angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 2;
        var angle =
          Math.atan2(p5.mouseY - y * scl, p5.mouseX - x * scl) +
          p5.noise(xoff, yoff, zoff) * (p5.TWO_PI / 8);
        var v = p5.createVector();
        v.set(p5.cos(angle), p5.sin(angle));
        v.setMag(0.08);
        flowfield[index] = v;
        xoff += inc;
        // p5.strokeWeight(1);
        // p5.stroke(0, 250, 250, 250);
        // p5.push();
        // p5.translate(x * scl, y * scl);
        // p5.rotate(v.heading());
        // p5.line(0, 0, scl, 0);
        // p5.pop();
      }
      yoff += inc;
    }
    zoff += 0.003;

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
    // console.log(p5.frameRate());
    p5.stroke("#0e7490aa");
    p5.strokeWeight(2);
    p5.point(p5.mouseX, p5.mouseY);
  };
};
export default function Sketch({ theme }) {
  return (
    <div className={`absolute top-0 left-0 z-[100] `}>
      <NextReactP5Wrapper
        sketch={sketch}
        theme={theme}
      />
    </div>
  );
}