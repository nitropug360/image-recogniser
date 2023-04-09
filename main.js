Webcam.set({
    width : 275, height : 275, image_format : "png" , png_quality : 90,
})

camera = document.getElementById("camera");
Webcam.attach("#camera")

function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='capimage' src = "+data_uri+">"
})

}

console.log("ML5 version :", ml5.version )
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xnioFs7AO/model.json",modelLoaded)

function modelLoaded(){
        console.log("model has loaded successfully")
}

function identify(){
    img = document.getElementById("capimage");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("object").innerHTML="Object: "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy: "+ results[0].confidence.toFixed(2);
    }
}