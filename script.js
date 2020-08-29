let val = [];
let i = 0;
let j = 0;

function setup() {
  createCanvas(600, 400);
  val = new Array(width);
  for (let i = 0; i < val.length; i++) {
    val[i] = random(height);
  }
//   bubbleSort(val);
}

// const bubbleSort = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - i - 1; j++) {
     
//     }
//   }
// };

const swap = (val, y, z) => {
    let temp = val[y];
    val[y] = val[z];
    val[z] = temp;
}

function draw() {
  background(0);
  let y = val[j];
  let z = val[j+1];
  if(y > z){
      swap(val, j, j+1)
  }
  j++;
  for (let i = 0; i < val.length; i++) {
    stroke(255);
    line(i, height, i, height - val[i]);
  }
}
