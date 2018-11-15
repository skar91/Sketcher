var point = {
    xcor: 0,
    ycor: 0, 
    endxcor: 0,
    endycor: 0,
};

var circle = {
    xcor: 0,
    ycor: 0,
    radius: 0,
}

var rectangle = {
    xcor: 0,
    ycor: 0,
    width: 0,
    height: 0,
}

function initCanvas() {
    c = document.getElementById('myCanvas');
    ctx = c.getContext('2d');
}

function draw() {

    var shapeType = document.forms['myForm']['shape'].value;
    
    if(shapeType=="Line") {
        var xcor = document.forms['myForm']['xcor'].value;
        var ycor = document.forms['myForm']['ycor'].value;
        var endxcor = document.forms['myForm']['endxcor'].value;
        var endycor = document.forms['myForm']['endycor'].value;
        ctx.moveTo(xcor,ycor);
        ctx.lineTo(endxcor,endycor);
        ctx.stroke();    
    }
    else if(shapeType=="Circle") {
        circle.xcor = document.forms['myForm']['xcor'].value;
        circle.ycor = document.forms['myForm']['ycor'].value;
        circle.radius = document.forms['myForm']['radius'].value;
        ctx.beginPath();
        ctx.arc(circle.xcor,circle.ycor,circle.radius,0,2*Math.PI);
        ctx.stroke();
    }
    else if(shapeType=="Rectangle") {
        rectangle.xcor = document.forms['myForm']['xcor'].value;
        rectangle.ycor = document.forms['myForm']['ycor'].value;
        rectangle.width = document.forms['myForm']['width'].value;
        rectangle.height = document.forms['myForm']['height'].value;
        ctx.rect(rectangle.xcor,rectangle.ycor,rectangle.width,rectangle.height);
        ctx.stroke();
    }
    else {
        console.log("Wrong input");
    }
    return false;
}