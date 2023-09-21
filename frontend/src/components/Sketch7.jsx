import { NextReactP5Wrapper } from "@p5-wrapper/next";
import {
  names,
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  v28,
  v29,
  v30,
} from "./data";
let balls = [];

class Ball {
  constructor(p5, vec) {
    this.pos = p5.createVector(
      (p5.random(p5.width) - p5.width / 2) * 0.8,
      -600,
      p5.random(-500, 500)
    );
    this.vec = vec;
    this.vel = p5.createVector((p5.random() - 0.5) * 8, 0);
    this.acc = p5.createVector(0, 0.5);
    this.prevPos = this.pos.copy();
    this.p5 = p5;
  }

  update(i) {
    if (this.vel.y == 0 && this.vel.x == 0) {
      return true;
    }
    // this.vel.limit(this.maxspeed);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if (this.pos.y >= 0) {
      this.vel.y *= -0.85;
      this.vel.x *= 0.95;
      this.pos.y = -1;
      if (this.p5.abs(this.vel.y) < 4) {
        this.pos.y = 0;
        this.vel.y = 0;
        this.acc.y = 0;
      }
    }

    if (this.p5.abs(this.vel.x) < 0.4) {
      this.vel.x = 0;
      this.acc.x = 0;
    }
  }
}

const sketch = (p5) => {
  let scl = 20;
  let cols, rows, depth;
  let flowfield;
  let colorfield;

  let html,
    css,
    js,
    nodejs,
    react,
    redux,
    expressjs,
    python,
    django,
    git,
    mongodb,
    c,
    csharp,
    unity,
    docker,
    kubernetes,
    nginx,
    postgres,
    rest,
    graphql,
    next,
    jwt,
    bootstrap,
    tailwind,
    redis,
    firebase,
    aws,
    php,
    ts,
    p5js;

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
  let radio2;

  let button;

  let random1, random2, random3;

  let spaceX = 50;
  let spaceY = 30;
  let spaceZ = 5;

  let var1 = 0,
    var2 = 0,
    var3 = 0;

  let scale = 0.015;
  let myRate = -10 * p5.PI;

  let vec;
  p5.preload = () => {
    html = p5.loadImage("/logo/html.svg");
    css = p5.loadImage("/logo/css.svg");
    js = p5.loadImage("/logo/js.svg");
    nodejs = p5.loadImage("/logo/nodejs.svg");
    react = p5.loadImage("/logo/react.svg");

    redux = p5.loadImage("/logo/redux.svg");
    expressjs = p5.loadImage("/logo/expressjs.svg");
    python = p5.loadImage("/logo/python.svg");
    django = p5.loadImage("/logo/django.svg");
    git = p5.loadImage("/logo/git.svg");
    mongodb = p5.loadImage("/logo/mongodb.svg");
    c = p5.loadImage("/logo/c.svg");
    csharp = p5.loadImage("/logo/csharp.svg");
    unity = p5.loadImage("/logo/unity.svg");
    docker = p5.loadImage("/logo/docker.svg");
    kubernetes = p5.loadImage("/logo/kubernetes.svg");
    nginx = p5.loadImage("/logo/nginx.svg");
    postgres = p5.loadImage("/logo/postgres.svg");
    rest = p5.loadImage("/logo/rest.svg");
    graphql = p5.loadImage("/logo/graphql.svg");
    next = p5.loadImage("/logo/next.svg");
    jwt = p5.loadImage("/logo/jwt.svg");
    bootstrap = p5.loadImage("/logo/bootstrap.svg");
    tailwind = p5.loadImage("/logo/tailwind.svg");
    redis = p5.loadImage("/logo/redis.svg");
    firebase = p5.loadImage("/logo/firebase.svg");
    aws = p5.loadImage("/logo/aws.svg");
    php = p5.loadImage("/logo/php.svg");
    ts = p5.loadImage("/logo/ts.svg");
    p5js = p5.loadImage("/logo/p5js.svg");
  };

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.perspective(p5.PI / 4, p5.width / p5.height, 0.1, 5000);
    p5.noStroke();
    p5.noStroke();

    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);
    depth = p5.floor(50 / scl); // Adjust depth based on 3D dimensions

    flowfield = new Array(cols * rows * depth); // Adjust array size for 3D
    colorfield = new Array(cols * rows * depth); // Adjust array size for 3D

    slider = p5.createSlider(0, 99, 20);
    slider.position(10, 10);
    slider.style("width", "65px");
    slider1 = p5.createSlider(0, p5.PI * 2, 0, 0.1);
    slider1.position(10, 30);
    slider1.style("width", "65px");
    slider2 = p5.createSlider(0, p5.PI * 2, 0, 0.1);
    slider2.position(10, 50);
    slider2.style("width", "65px");
    slider3 = p5.createSlider(0, 60, 15);
    slider3.position(10, 70);
    slider3.style("width", "65px");
    slider4 = p5.createSlider(30, 150, 55);
    slider4.position(10, 90);
    slider4.style("width", "65px");
    slider5 = p5.createSlider(0, 50, 28);
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

    html.resize(800, 800);
    css.resize(800, 800);
    git.resize(800, 800);
    js.resize(800, 800);
    nodejs.resize(800, 800);
    expressjs.resize(800, 800);
    django.resize(800, 800);
    python.resize(800, 800);
    mongodb.resize(800, 800);
    react.resize(800, 800);
    redux.resize(800, 800);
    c.resize(800, 800);
    csharp.resize(800, 800);
    unity.resize(800, 800);
    docker.resize(800, 800);
    kubernetes.resize(800, 800);
    nginx.resize(800, 800);
    postgres.resize(800, 800);
    rest.resize(800, 800);
    graphql.resize(800, 800);
    next.resize(800, 800);
    jwt.resize(800, 800);
    bootstrap.resize(800, 800);
    tailwind.resize(800, 800);
    redis.resize(800, 800);
    firebase.resize(800, 800);
    aws.resize(800, 800);
    php.resize(800, 800);
    ts.resize(800, 800);
    p5js.resize(800, 800);
    // p5.noLoop();
  };

  const Logo = (item) => {
    p5.push();
    // p5.rotateX(p5.PI / 6);
    p5.push();
    scale = slider5.value() / 1000;
    switch (item) {
      case "react":
        p5.scale(scale);
        p5.image(react, -400, -400);
        break;
      case "css":
        p5.scale(scale);
        p5.image(css, -400, -400);
        break;
      case "html":
        p5.scale(scale);
        p5.image(html, -400, -400);
        break;
      case "git":
        p5.scale(scale);
        p5.image(git, -400, -400);
        break;
      case "js":
        p5.scale(scale);
        p5.image(js, -400, -400);
        break;
      case "nodejs":
        p5.scale(scale);
        p5.image(nodejs, -400, -400);
        break;
      case "expressjs":
        p5.scale(scale);
        p5.image(expressjs, -400, -400);
        break;
      case "django":
        p5.scale(scale);
        p5.image(django, -400, -400);
        break;
      case "python":
        p5.scale(scale);
        p5.image(python, -400, -400);
        break;
      case "mongodb":
        p5.scale(scale);
        p5.image(mongodb, -400, -400);
        break;

      case "redux":
        p5.scale(scale);
        p5.image(redux, -400, -400);
        break;
      case "c":
        p5.scale(scale);
        p5.image(c, -400, -400);
        break;
      case "csharp":
        p5.scale(scale);
        p5.image(csharp, -400, -400);
        break;
      case "unity":
        p5.scale(scale);
        p5.image(unity, -400, -400);
        break;
      case "docker":
        p5.scale(scale);
        p5.image(docker, -400, -400);
        break;
      case "kubernetes":
        p5.scale(scale);
        p5.image(kubernetes, -400, -400);
        break;
      case "nginx":
        p5.scale(scale);
        p5.image(nginx, -400, -400);
        break;
      case "postgres":
        p5.scale(scale);
        p5.image(postgres, -400, -400);
        break;
      case "rest":
        p5.scale(scale);
        p5.image(rest, -400, -400);
        break;
      case "graphql":
        p5.scale(scale);
        p5.image(graphql, -400, -400);
        break;

      case "next":
        p5.scale(scale);
        p5.image(next, -400, -400);
        break;
      case "jwt":
        p5.scale(scale);
        p5.image(jwt, -400, -400);
        break;
      case "bootstrap":
        p5.scale(scale);
        p5.image(bootstrap, -400, -400);
        break;
      case "tailwind":
        p5.scale(scale);
        p5.image(tailwind, -400, -400);
        break;
      case "redis":
        p5.scale(scale);
        p5.image(redis, -400, -400);
        break;
      case "firebase":
        p5.scale(scale);
        p5.image(firebase, -400, -400);
        break;
      case "aws":
        p5.scale(scale);
        p5.image(aws, -400, -400);
        break;
      case "php":
        p5.scale(scale);
        p5.image(php, -400, -400);
        break;
      case "ts":
        p5.scale(scale);
        p5.image(ts, -400, -400);
        break;
      case "p5js":
        p5.scale(scale);
        p5.image(p5js, -400, -400);
        break;
    }
    p5.pop();
    p5.pop();
  };
  const createSphere2 = (item, n1, n2) => {
    p5.push();
    p5.fill(p5.color(256, slider.value()));
    p5.rotateX(p5.PI / 2);
    p5.rotateX((n1 * p5.PI) / n2 + myRate * 0.007);
    p5.rotateZ((n1 * 12 * p5.PI) / n2 + myRate * 0.009);
    p5.strokeWeight(2);
    p5.stroke(slider8.value() == item.group ? "#ff000060" : "#ffffff40");
    p5.line(
      (item.group == 1 ? var1 : item.group == 2 ? var2 : var3) +
        slider4.value(),
      0,
      0,
      0,
      0,
      0
    );
    p5.translate(
      (item.group == 1 ? var1 : item.group == 2 ? var2 : var3) +
        slider4.value(),
      0,
      0
    );
    // console.log(var1, var2, var3);
    const logoRotationX = p5.atan2(0, 0) - p5.atan2(0, 100);
    const logoRotationY = p5.atan2(0, 0) - p5.atan2(0, 100);
    const logoRotationZ = p5.atan2(0, 0) - p5.atan2(0, 100);
    p5.rotateX(p5.PI / -2);
    p5.rotateY(p5.PI / 2);

    p5.rotateX(logoRotationX);
    p5.rotateY(logoRotationY);
    p5.rotateZ(logoRotationZ);
    p5.scale((item.group == 1 ? var1 : item.group == 2 ? var2 : var3) / 20 + 2);
    Logo(item.name);
    p5.pop();
  };
  const light = () => {
    p5.camera(
      0 + (p5.mouseX - p5.width / 2) / 8,
      -600,
      1500 + p5.mouseY / 4,
      0,
      -400,
      50,
      0,
      1,
      0
    );
  };

  const ballDrop = () => {
    vec = Array(slider3.value())
      .fill()
      .map((_) => ({
        name: names[Math.floor(Math.random() * 30)],
        group: Math.floor(Math.random() * 3) + 1,
      }));
    if (balls.length >= 5) {
      balls.shift();
    }
    balls.push(new Ball(p5, vec));
  };

  p5.draw = () => {
    p5.background(0, 0);
    light();

    for (var i = 0; i < balls.length; i++) {
      p5.push();
      p5.translate(balls[i].pos.x, balls[i].pos.y, balls[i].pos.z);
      const render = balls[i].vec.map((item, ind, arr) => {
        return createSphere2(item, ind, arr.length);
      });
      if (balls[i].update(i)) {
        balls.splice(i, 1);
      }
      p5.pop();
    }

    myRate += 1;
    // p5.ortho();
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[101]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}