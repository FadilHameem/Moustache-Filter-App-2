function preload(){
}

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function modelLoaded(){
    console.log('Posenet Is Initialized');
}

function take_snapshot(){
    save('Moustache_Image.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('Nose X = ' + results[0].pose.nose.x);
        console.log('Nose Y  = ' + results[0].pose.nose.y);
    }
}