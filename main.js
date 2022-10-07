title = "square move";

description = `
testing square 
movement 

and dots moving
`;

characters = [];

options = {};
// typedef for for vec
/** @type {Vector[]} */
let pins;

// typedef for cord
/** @type {{angle: number, length: number, pin: Vector}} */
let cord;
const cordLength = 7;

function update() {
  if (!ticks) {
    pins = [vec(50, 5)];
    nextPinDist = 5;
    cord = {angle: 0, length: cordLength, pin:pins[0]};
  }
  // setting up the walls
  color("blue");
  let left_wall = line(0, 0, 0, 100, 10);
  let right_wall = line(100, 0, 100, 100, 10);

  let scr = 0.02;
  // input for square
  color("black")
  if (cord.pin.y < 80){
    scr += (80 - cord.pin.y) * 0.1;
  }
  if (input.isPressed){
    cord.length += 1;
  } else {
    cord.length += (cordLength - cord,length) * 0.1;
  }
  // drawing for square
  cord.angle += 0.05;
  line(cord.pin, vec(cord.pin).addWithAngle(cord.angle, cord.length))
  if (cord.pin.y > 98){
    end();
  }
  // deleting dot that is off the screen
  remove(pins, (p) => { 
    p.y += scr;
    box(p,3);
    return p.y > 102;
  });
  // add pin and scroll down
  nextPinDist -= scr;
  while (nextPinDist < 0){
    pins.push(vec(rnd(10,90), -2 - nextPinDist));
    nextPinDist += rnd(5, 15);
  }

}
addEventListener("load", onLoad);