var nums = [100,25,36,67];
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(60);
  fill(200);
  noStroke();
  for (var i =0; i<nums.length;i++){
    ellipse(i*100+100,200,nums[i],nums[i]);
  }
}