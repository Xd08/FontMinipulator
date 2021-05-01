noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
finaldifference=0;

function setup() {
    canvas=createCanvas(450, 450);
    canvas.position(700, 100);
    video=createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100 );

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("POSENET MODEL LOADED")
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result)
        console.log(noseX, noseY);
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        console.log(leftWristX, rightWristX);
        difference=floor(leftWristX-rightWristX)
        finaldifference=(difference-100);
        console.log(difference);
        console.log("Calculated Difference is " + finaldifference);
    }
}

function draw() {
    background("aliceblue");
    textSize(finaldifference);
    fill("blue");
    text("Hello", 10, 100);
    document.getElementById("text_size").innerHTML="The font size is " + finaldifference;
}