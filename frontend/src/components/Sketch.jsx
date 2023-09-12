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
  let mongodb;
  let c;
  let git;

  const spaceX = 50;
  const spaceY = 80;
  p5.preload = () => {
    css = p5.loadImage("/logo/css.svg");
    html = p5.loadImage("/logo/html.svg");
    js = p5.loadImage("/logo/js.svg");
    react = p5.loadImage("/logo/react.svg");
    redux = p5.loadImage("/logo/redux.svg");
    nodejs = p5.loadImage("/logo/nodejs.svg");
    expressjs = p5.loadImage("/logo/expressjs.svg");
    python = p5.loadImage("/logo/python.svg");
    django = p5.loadImage("/logo/django.svg");
    mongodb = p5.loadImage("/logo/mongodb.svg");
    c = p5.loadImage("/logo/c.svg");
    git = p5.loadImage("/logo/git.svg");
  };

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    // p5.noLoop();
  };

  const Logo = (item, color) => {
    p5.push();
    p5.rotateX(p5.PI / 6);
    p5.push();
    let scale = 0.03;
    switch (item) {
      case "react":
        react.resize(800, 800);
        p5.scale(scale);
        p5.image(react, -400, -400);
        break;
      case "css":
        css.resize(800, 800);
        p5.scale(scale);
        p5.image(css, -400, -400);
        break;
      case "html":
        html.resize(800, 800);
        p5.scale(scale);
        p5.image(html, -400, -400);
        break;
      case "git":
        git.resize(800, 800);
        p5.scale(scale);
        p5.image(git, -400, -400);
        break;
      case "js":
        js.resize(800, 800);
        p5.scale(scale);
        p5.image(js, -400, -400);
        break;
      case "nodejs":
        nodejs.resize(800, 800);
        p5.scale(scale);
        p5.image(nodejs, -400, -400);
        break;
      case "expressjs":
        expressjs.resize(800, 800);
        p5.scale(scale);
        p5.image(expressjs, -400, -400);
        break;
      case "django":
        django.resize(800, 800);
        p5.scale(scale);
        p5.image(django, -400, -400);
        break;
      case "python":
        python.resize(800, 800);
        p5.scale(scale);
        p5.image(python, -400, -400);
        break;
      case "mongodb":
        mongodb.resize(800, 800);
        p5.scale(scale);
        p5.image(mongodb, -400, -400);
        break;
      case "redux":
        redux.resize(800, 800);
        p5.scale(scale);
        p5.image(redux, -400, -400);
        break;
      case "c":
        c.resize(800, 800);
        p5.scale(scale);
        p5.image(c, -400, -400);
        break;
      case "django":
        django.resize(800, 800);
        p5.scale(scale);
        p5.image(django, -400, -400);
        break;
    }
    p5.pop();
    p5.pop();
  };

  const createLine = (v1, v2) => {
    p5.push();
    p5.stroke("#ffffff30");
    p5.strokeWeight(4);
    p5.line(
      v1[0] * spaceX,
      v1[4] ? 10 * p5.sin(myRate / 40) : 10 * p5.sin(myRate / 40 + p5.PI),
      v1[1] * spaceY,
      v2[0] * spaceX,
      v2[4] ? 10 * p5.sin(myRate / 40) : 10 * p5.sin(myRate / 40 + p5.PI),
      v2[1] * spaceY
    );
    p5.pop();
  };

  const createSphere = (vectorX, vectorY, vectorZ, color, logo) => {
    p5.push();
    p5.translate(vectorX, vectorY, vectorZ);
    p5.pointLight(250, 250, 250, vectorX + 50, vectorY - 50, vectorZ + 50);
    p5.pointLight(250, 250, 250, vectorX - 50, vectorY - 50, vectorZ + 50);
    p5.pointLight(250, 250, 250, vectorX, vectorY + 50, vectorZ + 50);
    // p5.pointLight(250, 250, 250, vectorX, vectorY + 200, vectorZ);
    p5.fill(p5.color(`${color}40`));
    Logo(logo, color);
    p5.noStroke();
    p5.sphere(22);
    // p5.push();
    // p5.translate(0, -100,0);
    // p5.pop();
    p5.pop();
  };

  let myRate = -10 * p5.PI;
  p5.draw = () => {
    p5.background(255, 0);
    p5.directionalLight(155, 155, 155, 0.5, 0.8, -1);
    p5.directionalLight(155, 155, 155, -0.5, 0.8, -1);
    p5.camera(100, -220, 400, 100, -100, 0, 0, 1, 0);

    const v1 = [0, 0, "#e34c26", "html", true];
    const v2 = [2, 0, "#264de4", "css", false];
    const v3 = [3, 1, "#f0db4f", "js", true];
    const v4 = [3, -1, "#61dbfb", "react", true];
    const v5 = [5, 1, "#764abc", "redux", false];
    const v6 = [5, -1, "#68a063", "nodejs", false];
    const v7 = [-1, 1, "#ffd343", "python", false];
    const v8 = [-1, -1, "#6b8279", "django", false];
    const v9 = [0, -2, "#f34f29", "git", true];
    const v10 = [2, -2, "#78cff5", "c", false];

    const v11 = [3, -3, "#e34c26", "html", true];
    const v12 = [5, -3, "#264de4", "css", false];
    const v13 = [6, -2, "#f0db4f", "js", true];
    const v14 = [3, -1, "#61dbfb", "react", true];
    const v15 = [2, -4, "#764abc", "redux", false];
    const v16 = [0, -4, "#68a063", "nodejs", false];
    const v17 = [-1, -3, "#ffd343", "python", false];
    const v18 = [-3, -3, "#6b8279", "django", true];
    const v19 = [-3, -1, "#f34f29", "git", true];
    const v20 = [-3, 1, "#78cff5", "c", false];

    const v21 = [-4, 0, "#e34c26", "html", true];
    const v22 = [-4, -2, "#264de4", "css", false];
    const v23 = [-4, -4, "#f0db4f", "js", true];
    const v24 = [6, 0, "#61dbfb", "react", true];
    const v25 = [8, 0, "#764abc", "redux", false];
    const v26 = [8, -2, "#68a063", "nodejs", false];
    const v27 = [9, -1, "#ffd343", "python", false];
    const v28 = [9, -3, "#6b8279", "django", true];
    const v29 = [6, -4, "#f34f29", "git", true];
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
    ];
    const render = v.map((item) => {
      return createSphere(
        item[0] * spaceX,
        item[4] ? 10 * p5.sin(myRate / 40) : 10 * p5.sin(myRate / 40 + p5.PI),
        item[1] * spaceY,
        item[2],
        item[3]
      );
    });
    createLine(v1, v2);
    createLine(v3, v2);
    createLine(v4, v2);
    createLine(v4, v6);
    createLine(v3, v5);
    createLine(v1, v7);
    createLine(v1, v8);
    createLine(v9, v8);
    createLine(v9, v10);
    createLine(v4, v10);
    createLine(v11, v10);
    createLine(v11, v12);
    createLine(v12, v29);
    createLine(v12, v13);
    createLine(v26, v13);
    createLine(v4, v10);
    myRate += 1;
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[-100]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
