# Volty.js - Where Every Animation Sparks

![Volty.js](media/voltyjs.jpg)

Volty is an innovative React animation library designed to enhance user interfaces with smooth and visually appealing animations.

## Table of contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
   - Required Libraries
4. [Cool Effects](#cool-effects)
   - Cuberto Effect
   - Text Effect
   - Image Trail Effect
   - 3D Slider Effect
   - Infinite Scrolling Effect

## Introduction

Voltyjs is a quick and efficient way to enhance the user experience with minimal effort.

## Installation

To use Volty.js in your project, you can include it in your `react project` by using node.

When using node or browserify install

```bash
npm install voltyjs
```

## Getting Started

Once you have included Volty.js in your react project

```javascript

import React from 'react';
import { Cuberto } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen">
         <Cuberto />
    </div>
  );
}

export default App;

```

### Required Libraries

To successfully run with CDN, you'll need some libraries.

```bash
npm install gsap
```

## Cool Effects

These are effects are implemented with the help of Gsap and Css to offer a unique experience with single function.

### Cuberto

The feature creates smooth mouse follower, creating an engaging user experience.

```javascript
import React from 'react';
import { Cuberto } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen">
         <Cuberto size={20} color={"#B9B28A"} smooth={true} radial={true} text={"sitaram"} />
    </div>
  );
}

export default App;
```

1. For `radial` use size more then 60 for better experience.
2. In `text` property give text you want to print.

### Text Effect

The feature creates smooth text effect, creating an engaging user experience.

```javascript
import React from 'react';
import { TextBentoo } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen">
         <TextBentoo color={"#B9B28A"} text={"sitaram"} min={50} max={300} bottom={20} left={20} />
    </div>
  );
}

export default App;
```

1. `bottom` and `left` is used to set position.
2. `min` and `max` is used to set max amd min size of text size;

### Image Trail Effect

The feature creates smooth image trail effect with mouse-move, creating an engaging user experience.

```javascript
import React from 'react';
import { Trail } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen">
         <Trail width={180} height={300} rounded={7}/>
    </div>
  );
}

export default App;
```

1. For `images` pass the array of images which you want to trail.
2. This defualt images is set in images props.


![images](media/image_trail.png)


### 3D Slider

The feature creates smooth 3D slider, creating an engaging user experience.

```javascript
import React from 'react';
import { ThreeSlider } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-[300vh] overflow-hidden">  {/* give proper height, how much you want to scoll? */}
         <ThreeSlider size={200}/>
    </div>
  );
}

export default App;
```

1. For `images` pass the array of images which you want to trail.


![images](media/three.png)


### Infinite Scrolling

The feature creates smooth Infinite scrolling effect, creating an engaging user experience.

```javascript
import React from 'react';
import { Infinite } from 'voltyjs';

function App() {
  return (
    <Infinite smoothFactor={0.08}>
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <h1 className="text-9xl">VoltyJS</h1>
        </div>
        <div className="w-[100vw] h-full flex justify-center items-center overflow-hidden">
            
        </div>
    </Infinite>
  );
}

export default App;
```

# License

Voltyjs is released under the [MIT License](license.md). Feel free to use it in both personal and commercial projects.

## Note

This package is still in development, so there may be issues. Please help us by submitting any problems to my GitHub profile.
[@AkshayDhola](https://github.com/AkshayDhola)
