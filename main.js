Webcam.set(
{
    width: 300,
    height: 300,
    img_format:"png",
    png_quality:100,

    constraints:{
     facingMode:"enviroment"
    }
});
webcam = document.getElementById("webcam");
Webcam.attach(webcam);

function button1click()
{
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}
console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier("MobileNet",modelloded)

function modelloded()
{
    console.log("modelllllllllll loooooded")
}

function button2click()
{
    img = document.getElementById("captured_image")
    classifier.classify(img,gotresult)
}

function gotresult(error,result)
{
    
    if (error)
    {
        console.log(error);
    }else
    {
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
    }
}