import { NextReactP5Wrapper } from "@p5-wrapper/next";

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

  let angleX = 0;
  let angleY = 0;
  let bubbleRadius = 100;

  let scale = 0.015;
  let myRate = -10 * p5.PI;

  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.perspective(p5.PI / 3, p5.width / p5.height, 0.1, 500);
    p5.noStroke();
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
    p5.background(0, 0);
    p5.camera(
      (120 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      // 0,
      -slider6.value(),
      250 + (50 * (window.innerHeight - p5.mouseY * 2)) / window.innerHeight,
      (80 * (window.innerWidth - p5.mouseX * 2)) / window.innerWidth,
      // 0,
      40 - slider7.value(),
      0,
      0,
      1,
      0
    );
  };

  p5.draw = () => {
    light(); // Apply camera settings

    // Get values from sliders and checkboxes
    const numVertices = slider.value();
    const rotationX = slider1.value();
    const rotationY = slider2.value();
    const scaleFactor = slider3.value() * 0.01;
    const noiseOffset = slider4.value();
    const noiseStrength = slider5.value();

    // Apply transformations
    p5.rotateX(rotationX);
    p5.rotateY(rotationY);
    p5.scale(scaleFactor);

    p5.fill(200, 40);

    // Create a colorful 3D bubble
    for (let i = 1; i < numVertices; i++) {
      for (let j = 1; j < numVertices; j++) {
        const lat = p5.map(i, 0, numVertices, 0, p5.PI);
        const lon = p5.map(j, 0, numVertices, 0, p5.TWO_PI);
        const radius =
          bubbleRadius +
          p5.noise(lon * noiseOffset, lat * noiseOffset) * noiseStrength;

        const x = radius * p5.sin(lat) * p5.cos(lon);
        const y = radius * p5.sin(lat) * p5.sin(lon);
        const z = radius * p5.cos(lat);

        p5.push(); // Push and pop to isolate translations
        p5.translate(x, y, z);
        p5.sphere(5); // Adjust the size of the vertices as needed
        p5.pop();
      }
    }
  };
};
export default function Sketch() {
  return (
    <div className={`fixed top-0 left-0 z-[100]`}>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
