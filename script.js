
function make_face() {
  const eyes = [":","|","="];
  const nose = ["-","^","*"];
  const mouth = ["(",")","|","[","]","p"];

var fresh_eye = eyes[Math.floor(Math.random()*eyes.length)];
var fresh_nose = nose[Math.floor(Math.random()*nose.length)];
var fresh_mouth = mouth[Math.floor(Math.random()*mouth.length)];

var nu_face = fresh_eye + fresh_nose + fresh_mouth;
//render nu_face to the DOM?
alert(nu_face)
}
