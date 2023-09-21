import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch = (p5) => {
  let html;
  let css;
  let js;
  let nodejs;
  let react;
  let redux;
  let expressjs;
  let python;
  let django;
  let git;

  let mongodb;
  let c;
  let csharp;
  let unity;
  let docker;
  let kubernetes;
  let nginx;
  let postgres;
  let rest;
  let graphql;

  let next;
  let jwt;
  let bootstrap;
  let tailwind;
  let redis;
  let firebase;
  let aws;
  let php;
  let ts;
  let p5js;

  let spaceX = 50;
  let spaceY = 30;
  let spaceZ = 5;

  let scale = 0.015;

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
  let radio1;
  let radio2;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.perspective(p5.PI / 3, p5.width / p5.height, 0.1, 500);
    p5.noStroke();
    slider = p5.createSlider(0, 99, 20);
    slider.position(10, 10);
    slider.style("width", "65px");
    slider1 = p5.createSlider(0, 99, 50);
    slider1.position(10, 30);
    slider1.style("width", "65px");
    slider2 = p5.createSlider(0, 99, 30);
    slider2.position(10, 50);
    slider2.style("width", "65px");
    slider3 = p5.createSlider(0, 10, 5);
    slider3.position(10, 70);
    slider3.style("width", "65px");
    slider4 = p5.createSlider(0, 30, 10);
    slider4.position(10, 90);
    slider4.style("width", "65px");
    slider5 = p5.createSlider(0, 30, 10);
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
    checkbox5.position(10, 300);

    slider6 = p5.createSlider(0, 500, 100);
    slider6.position(10, 320);
    slider6.style("width", "65px");

    slider7 = p5.createSlider(0, 300, 100);
    slider7.position(10, 340);
    slider7.style("width", "65px");

    slider8 = p5.createSlider(0, 12, 6);
    slider8.position(10, 360);
    slider8.style("width", "65px");

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

  const Logo = (item, color) => {
    p5.push();
    p5.rotateX(p5.PI / 6);
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

  const createLine = (v1, v2) => {
    p5.push();
    p5.stroke("#ffffff50");
    p5.strokeWeight(2);
    p5.line(
      v1[0] * spaceX +
        (v1[1] % 2 ? spaceX * 1.5 : 0) +
        Math.floor(v1[0] / 2) * spaceX,
      // v1[4] ? spaceZ * p5.sin(myRate / 40) : spaceZ * p5.sin(myRate / 40),
      v1[1] % 2
        ? v1[0] % 2
          ? spaceZ * p5.sin(myRate / 20 + p5.PI)
          : spaceZ * p5.sin(myRate / 20)
        : (v1[0] + 1) % 2
        ? spaceZ * p5.sin(myRate / 20)
        : spaceZ * p5.sin(myRate / 20 + p5.PI),
      v1[1] * -spaceY,
      v2[0] * spaceX +
        (v2[1] % 2 ? spaceX * 1.5 : 0) +
        Math.floor(v2[0] / 2) * spaceX,
      // v2[4] ? spaceZ * p5.sin(myRate / 40) : spaceZ * p5.sin(myRate / 40),
      v2[1] % 2
        ? v2[0] % 2
          ? spaceZ * p5.sin(myRate / 20 + p5.PI)
          : spaceZ * p5.sin(myRate / 20)
        : (v2[0] + 1) % 2
        ? spaceZ * p5.sin(myRate / 20)
        : spaceZ * p5.sin(myRate / 20 + p5.PI),
      v2[1] * -spaceY
    );
    p5.pop();
  };

  const createSphere = (vectorX, vectorY, vectorZ, color, logo) => {
    p5.push();
    p5.translate(vectorX, vectorY, vectorZ);

    if (checkbox4.checked()) {
      p5.lightFalloff(0.97, 0.03, 0);
      p5.pointLight(
        p5.color(`${color}`),
        vectorX + 250,
        vectorY - 250,
        vectorZ + 200
      );
      p5.pointLight(
        p5.color(`${color}`),
        vectorX - 250,
        vectorY - 250,
        vectorZ + 200
      );
      p5.pointLight(
        p5.color(`#${color}`),
        vectorX,
        vectorY + 150,
        vectorZ + 250
      );
      p5.pointLight(p5.color(`#${color}`), vectorX, vectorY, vectorZ);
    }
    p5.fill(p5.color(256, slider.value()));
    // p5.fill(p5.color(`${color}10`));

    Logo(logo, color);
    p5.sphere(slider4.value());
    p5.drawingContext.shadowBlur = 320;
    p5.drawingContext.shadowColor = p5.color(255, 255, 0);
    p5.pop();
  };

  let myRate = -10 * p5.PI;
  p5.draw = () => {
    // spaceX = 60 + p5.mouseY / 20;
    // spaceY = 80 + p5.mouseY / 20;

    p5.background(0, 0);
    if (checkbox1.checked()) {
      p5.directionalLight(100, 100, 100, 0.5, 0.8, -1);
    }
    if (checkbox2.checked()) {
      p5.directionalLight(100, 100, 100, -0.5, 0.8, -1);
    }
    if (checkbox3.checked()) {
      p5.lights();
    }
    if (checkbox4.checked()) {
    }
    if (radio1.value() === " cam1") {
      p5.perspective(
        p5.PI / slider8.value(),
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
    }
    if (radio1.value() === " cam2") {
      p5.frustum();
    }
    if (radio1.value() === " cam3") {
      p5.ortho();
    }
    p5.camera(
      (120 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      -slider6.value(),
      250 + (50 * (window.innerHeight - p5.mouseY * 2)) / window.innerHeight,
      (80 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      240 - slider7.value(),
      0,
      0,
      1,
      0
    );

    const v1 = [0, 0, "#e34c26", "html", true];
    const v2 = [1, 0, "#264de4", "css", false];
    const v3 = [2, 0, "#f0db4f", "js", true];
    const v4 = [-1, 0, "#61dbfb", "react", false];
    const v5 = [-2, 0, "#764abc", "redux", true];
    const v6 = [0, 1, "#68a063", "nodejs", false];
    const v7 = [1, 1, "#ffd343", "python", true];
    const v8 = [-3, 1, "#6b8279", "django", false];
    const v9 = [-1, 1, "#f34f29", "git", true];
    const v10 = [-2, 1, "#78cff5", "c", false];

    const v11 = [0, 2, "#e34c26", "csharp", true];
    const v12 = [1, 2, "#eeeeee", "expressjs", false];
    const v13 = [2, 2, "#0cd45b", "mongodb", true];
    const v14 = [-1, 2, "#eeeeee", "unity", true];
    const v15 = [-2, 2, "#0db7ed", "docker", false];
    const v16 = [0, -1, "#047adc", "kubernetes", true];
    const v17 = [1, -1, "#009900", "nginx", false];
    const v18 = [-3, -1, "#336791", "postgres", true];
    const v19 = [-1, -1, "#ffffff", "rest", true];
    const v20 = [-2, -1, "#e535ab", "graphql", false];

    const v21 = [0, -2, "#eeeeee", "next", true];
    const v22 = [1, -2, "#ffffff", "jwt", false];
    const v23 = [2, -2, "#563d7c", "bootstrap", true];
    const v24 = [-1, -2, "#5bc0de", "tailwind", true];
    const v25 = [-2, -2, "#A41E11", "redis", false];
    const v26 = [0, -3, "#FFA611", "firebase", false];
    const v27 = [1, -3, "#999999", "aws", false];
    const v28 = [-3, -3, "#8993be", "php", true];
    const v29 = [-1, -3, "#007acc", "ts", true];
    const v30 = [-2, -3, "#ED225D", "p5js", true];
    const v = [
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
    ];
    spaceX = slider1.value();
    spaceY = slider2.value();
    spaceZ = slider3.value();

    const render = v.map((item) => {
      return createSphere(
        item[0] * spaceX +
          (item[1] % 2 ? spaceX * 1.5 : 0) +
          Math.floor(item[0] / 2) * spaceX,
        // item[4] ? spaceZ * p5.sin(myRate / 40) : spaceZ * p5.sin(myRate / 40),
        item[1] % 2
          ? item[0] % 2
            ? spaceZ * p5.sin(myRate / 20 + p5.PI)
            : spaceZ * p5.sin(myRate / 20)
          : (item[0] + 1) % 2
          ? spaceZ * p5.sin(myRate / 20)
          : spaceZ * p5.sin(myRate / 20 + p5.PI),
        item[1] * -spaceY,
        item[2],
        item[3]
      );
    });
    if (checkbox5.checked()) {
      createLine(v1, v2);
      createLine(v2, v6);
      createLine(v6, v7);
      createLine(v9, v10);
      createLine(v12, v11);
      createLine(v9, v11);
      createLine(v14, v10);
      createLine(v12, v6);
      createLine(v1, v19);
      createLine(v20, v19);
      createLine(v21, v19);
      createLine(v20, v4);
      createLine(v10, v4);
      createLine(v20, v24);
      createLine(v16, v22);
      createLine(v16, v2);
      createLine(v16, v17);
      createLine(v21, v22);
    }
    myRate += 1;
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[100]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
