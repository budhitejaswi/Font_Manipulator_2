function setup(){
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(200,180);

    canvas= createCanvas(480,480);
    canvas.position(680,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotPoses)
}

function draw() {
background("#5c0938");
}

function modelLoaded(){
console.log("Model Loaded :)");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}