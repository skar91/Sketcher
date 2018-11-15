//Basic point object
var point = {
    xcor: 0,
    ycor: 0
};

Object.seal(point);

//Inherit point object
var line = Object.create(point, {
    endxcor: {
        value: 0,
        writable: true,
        enumerable: true
    },
    endycor: {
        value: 0,
        writable: true,
        enumerable: true
    }
});

//Inherit point object + create radius property for a circle
var circle = Object.create(point, {
    radius: {
        value: 0,
        writable: true,
        enumerable: true
    }
});

//Inherit point object + create height/width property for a rectangle
var rectangle = Object.create(point, {
    width: {
        value: 0,
        writable: true,
        enumerable: true
    },
    height: {
        value: 0,
        writable: true,
        enumerable: true
    }
});

function initCanvas() {
    c = document.getElementById('myCanvas');
    ctx = c.getContext('2d');
}

function draw() {

    var shapeType = document.forms['myForm']['shape'].value;
    
    if(shapeType=="Line") {
        line.xcor = document.forms['myForm']['xcor'].value;
        line.ycor = document.forms['myForm']['ycor'].value;
        line.endxcor = document.forms['myForm']['endxcor'].value;
        line.endycor = document.forms['myForm']['endycor'].value;
        ctx.moveTo(line.xcor,line.ycor);
        ctx.lineTo(line.endxcor,line.endycor);
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