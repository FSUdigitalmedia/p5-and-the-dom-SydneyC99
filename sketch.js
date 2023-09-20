let myParagraph;
let button;
let panda;
let button2;
let slider;


function setup() {
  myParagraph = createP("red");
  myParagraph.position(0, 0);
  myParagraph.mousePressed(makeRed);
  button = createButton("red");
  button.mousePressed(makeRed); //this fixes makeRed so it works again
  panda = createImg("/assets/panda.png", "This is a panda");
  panda.size(80, 80);
  panda.position(20, 20);
  button2 = createButton("move panda");
  button2.mousePressed (movePanda);
  slider = createSlider(1, 100, 50,);
  panda.doubleClicked(hideText);

}

function draw() {
  myParagraph.position(mouseX, mouseY);
  //this seems to stop makeRed because you can't hit the
  //text itself
  myParagraph.style("font-size", slider.value()+"px");
}

function makeRed() {
  myParagraph.style("color", "red");
}

function movePanda() {
   panda.position(random(20, 100), random(20, 100));
}

function hideText() {
   myParagraph.hide();
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
2. Why is the text so large when it's just a "paragraph"?
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/