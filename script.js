let arr = [];
let i = 0;
let j = 0;
let can;

function setup() {
  createCanvas(500, 400);
  background(0);
  radio = createRadio();
  radio.option("Bubble Sort");
  radio.option("Merge Sort");
  arr = new Array(50);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = random(height);
    stroke(255);
    rect(i * 10, 0, 10, height - arr[i]);
  }
}

function bubble(array) {

  let y = arr[j];
  let z = arr[j + 1];
  if (y > z) {
    swap(arr, j, j + 1);
  }
  j++;
  if (j >= arr.length - i - 1) {
    j = 0;
    i++;
  }
  return arr;
}

const swap = (arr, y, z) => {
  let temp = arr[y];
  arr[y] = arr[z];
  arr[z] = temp;
};

const mergeSort = (arr) => {
  if(arr.length <= 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let res = [];
  let leftX = 0;
  let rightX = 0;

  while (leftX < left.length && rightX < right.length) {
    if (left[leftX] < right[rightX]) {
      res.push(left[leftX]);
      leftX++;
    } else {
      res.push(right[rightX]);
      rightX++;
    }
  }
  if(res.length >= 49) console.log(res);

  arr = res.concat(left.slice(leftX)).concat(right.slice(rightX));
  return arr;
};

function draw() {
  if (radio.value() == "Bubble Sort") {
    bubble(arr);
    execute(arr);
  } else if (radio.value() == "Merge Sort") {
    let res = mergeSort(arr);
    execute(arr);    
  }
}

const execute = (array) => {
  background(0);

  for (let i = 0; i < array.length; i++) {
    stroke(255);
    rect(i * 10, 0, 10, height - array[i]);
  }
}
