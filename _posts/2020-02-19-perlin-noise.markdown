---
layout:     post
title:      "Perlin noise"
subtitle:   "Processing gifs"
date:       2020-02-19 20:00:00
author:     "alohaeee"
header-img: "img/post-bg-hello.png"
catalog: true
tags:
    - Blog
    - p5js
    - Perlin noise
---

<script>
var step = 0.001;
var start = 0;
var zoom = 1;
var noiseOff = 0;
var radius = 10;
var colore;

var speedSlider;
var stepSlider;
function setup()
{
    createCanvas(400, 400);
    colorMode(HSB,255);
    speedSlider = createSlider(0.001,1,1,0.001);
    createP("Zoom").position(0,height+10);
    speedSlider.position(0,height);
    stepSlider = createSlider(0.0001,1,0.001,0.0001);
    createP("Step").position(speedSlider.width + 20,height+10);
    stepSlider.position(speedSlider.width + 20,height);
    colore = random(255); 
}

function draw()
{
    background(51);
    zoom = speedSlider.value();
    step = stepSlider.value();
 
    let jump = 0;
    
    
    for(let x = 0; x < width; x++)
    {    
        let y = noise(noiseOff+jump)*height * 2 - height/2;
        stroke(25);
        fill(colore,255,255);
        ellipse(x, y, radius);
        jump+=zoom; 
        
    }
    colore = colore + 0.1;
    if(colore>255)
    {
        colore = 0;
    }
    noiseOff+=step; 
    
}
</script>