let arr = [];
let i = 0;
let j = 0;
let can;

function setup() {
  createCanvas(500, 400);
  radio = createRadio();
  radio.option("Bubble Sort");
  radio.option("Merge Sort");
  arr = new Array(50);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = random(height);
  }
}

function bubble() {
  background(0);

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

  
  merge(mergeSort(left), mergeSort(right));
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

  return res.concat(left.slice(leftX)).concat(right.slice(rightX));
};

function draw() {
  if (radio.value() == "Bubble Sort") {
    bubble();
    execute();
  } else if (radio.value() == "Merge Sort") {
    mergeSort(arr);
    execute();
  }
}

const execute = () => {
  for (let i = 0; i < arr.length; i++) {
    stroke(255);
    rect(i * 10, 0, 10, height - arr[i]);
  }
}
