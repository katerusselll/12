let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 13;
  let EllipseY = height / 4;
  let EllipseSize = vol;

  //row1
  drawEllipse(EllipseX, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY, EllipseSize);
  //row2
  drawEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY * 2, EllipseSize);
  //row3
  drawEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY * 3, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    ellipse(EllipseX, EllipseY, random(vol * 20), random(vol * 5000));
    console.log(started);
    //look up lerp for smoothness
  }

  if (started == false) {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    text("12% of physical fears reported were due to entrapment. \n Facing possible entrapment, individuals would want to avoid or escape physically bounded areas. \n It refers to the difficulty a person would have escaping if confronted by a potential offender. When motivated to escape, how much energy must the person expend. \n \n Please click, and make noise to see the data.", width / 2, height / 2, width - 150, 
        height - 150);
  }
}
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  function mousePressed() {
    started = true;
    userStartAudio();
  }
