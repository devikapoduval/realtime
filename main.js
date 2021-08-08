function setup() {
    canvas=createCanvas(300,250)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(300,250)
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YdELSV29q/model.json",modelloaded)
} 

function draw() {
    image(video,0,0,300,250)
classifier.classify(video,gotResult)
}

function modelloaded() {
    console.log("modelloaded")
}

function gotResult(error,result) {
    if(error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("result_object_name").innerHTML=result[0].label
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3)
        
    }
}