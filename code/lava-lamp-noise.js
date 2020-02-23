
var offsetInc = 0.001;
var start = 0;
var step = 1;
var noiseOff = 0;
var radius = 30;
var sphereColor;

var colorSpeedChange = 0.1;

var yoff=0;


var stepSlider;
var offsetSlider;
var xoffSlider;
var yoffSlider;
var radiusSlider;
var colorSlider;

function setup()
{
    
    let canvas = createCanvas(1000, 794);
  

    colorMode(HSB,255);
    stepSlider = createSlider(0.001,1,1,0.001);
    
    createP("Step").position(width + stepSlider.width,10);
    stepSlider.position(width + stepSlider.width,0);

    offsetSlider = createSlider(0.0001,1,0.001,0.0001);
    createP("Offset").position(stepSlider.width + width,110);
    offsetSlider.position(stepSlider.width + width,100);

    sphereColor = random(255); 

    xoffSlider = createSlider(0,1,0.01,0.001);
    createP("Sphere Offset").position(width + stepSlider.width,210);
    xoffSlider.position(width + stepSlider.width,200);

    yoffSlider = createSlider(0,1,0.002,0.001);
    createP("Radius Change Speed").position(width + stepSlider.width,310);
    yoffSlider.position(width + stepSlider.width,300);

    radiusSlider = createSlider(2,130,30,1);
    createP("Radius").position(width + stepSlider.width,410);
    radiusSlider.position(width + stepSlider.width,400);

    colorSlider = createSlider(0,10,0.1,0.1);
    createP("Color Speed Change").position(width + stepSlider.width,510);
    colorSlider.position(width + stepSlider.width,500);

    
    


    
}

function draw()
{
    background(51);
    step = stepSlider.value();
    offsetInc = offsetSlider.value();
 
    let jump = 0;
    
    let xoff=0;
    let xoffDelta = xoffSlider.value();
    let yoffDelta = yoffSlider.value();
    radius = radiusSlider.value();

    colorSpeedChange = colorSlider.value();
    
   
    for(let x = 0; x < width; x++)
    {    
        let y = noise(noiseOff+jump)*height * 2 - height/2;
        //stroke(25);
        //noStroke();
        let inter = map(x, 0, width, 0, 1);
       
        let c= lerp(0, 255, inter);
        
        fill((c+sphereColor)%255,255,255);
        let n = noise(xoff,yoff);
        ellipse(x, y, radius*n,radius*n);
        jump+=step; 
        xoff+=xoffDelta;
        
        
       
    }

    yoff+=yoffDelta;
    sphereColor += colorSpeedChange;
    if(sphereColor>255)
    {
        sphereColor = 0;
    }
    noiseOff+=offsetInc;    
}
