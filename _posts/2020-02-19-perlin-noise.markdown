---
layout:     post
title:      "Perlin noise"
subtitle:   "Processing visualization"
date:       2020-02-19 20:00:00
author:     "alohaeee"
header-img: "img/post-perlin-noise.png"
catalog: true
tags:
    - p5js
    - Perlin noise
---

### Foreword

I have finally found time to play with [p5js library](https://p5js.org/). In short, this library really helps a lot with drawing into html's canvas. 
Thank a lot to [Coding train challenges](https://thecodingtrain.com/) made by incredible [Daniel Shiffman](https://shiffman.net/) for exciting videos on this topic. 

## Perlin noise

Often random generator produces numbers that don't depend on each other. And it's quite useful in many cases. But let's challenge us to procedulrally generate some terrain, for example like in [Terraria](https://en.wikipedia.org/wiki/Terraria) or [Starbound](https://en.wikipedia.org/wiki/Starbound). 
The main idea is to use random number as height of our ground. Unfortunately, straightforward implementation does not solve the problem:

<img src="img/in-post/random.png" width=400 height=400></img>

Of course, we can play a little bit more with this technique, making rules, like how often we must generate new numbers and etc. But this way only makes everything more complicated.


To get more natural result you can use gradient noise instead of pure noise. In p5js this functions simply calls [noise()](https://p5js.org/reference/#/p5/noise). Perlin noise generates “smooth” sequence of random numbers. Here you can see Perlin noise changing values over time.
<iframe src="https://player.vimeo.com/video/393112363" width="640" height="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<br>

As you can see, we've got almost what we needed. You also can adjust noise with other math functions or even other noises.

### What else?

Perlin noise is widely used in computer graphic and game development. Textures, modeles, animations, height map for 2d and 3d terrarian, shapes of caves, particles. I am sure that the list does not end there. And as always you are free to make your own way to use perlins noise.
<iframe src="https://player.vimeo.com/video/393246860" width="640" height="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>





