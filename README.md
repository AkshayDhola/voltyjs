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
   - Wheel Scrolling Effect
5. [Canvas Effects](#canvas-effects)
   - Draw Canvas Effect
6. [3D Effects with React](#3d-effects-with-react)
   - 3D Box Geometry with R3F
   - 3D Glass Effect with R3F TorusGeometry
7. [License](#license)
8. [Note](#note)
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

These are effects are implemented with the help of GSAP and CSS to offer a unique experience with single function.

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
         <TextBentoo color={"#B9B28A"} text={"sitaram"} min={50} max={300}/>
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
    {/* give proper height, how much you want to scoll? */}
    <div className="w-full h-[300vh] overflow-hidden">  
         <ThreeSlider size={200}/>
    </div>
  );
}

export default App;
```

1. For `images` pass the array of images which you want to trail.


![images](media/three.png)


### Wheel Scrolling Effect

The feature creates smooth wheel scrolling effect, creating an engaging user experience.

```javascript
import React from 'react';
import { Wheel } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Wheel width={"140px"} height={"270px"} />
    </div>
  );
}

export default App;
```

1. For `images` pass the array of images which you want to show.


## Canvas Effects

These are effects are implemented with the help of GSAP and CANVAS to offer a unique experience with single function.

### Draw Canvas Effect

The feature creates canvas effect, creating an engaging user experience.

```javascript
import React from 'react';
import { DrawCanvas } from 'voltyjs';

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="absolute w-4/5 leading-tight flex flex-col text-6xl uppercase items-start">
        <p>Experience Volty</p>
        <p className="self-end">with cool sparks</p>
        <p>Npm Package</p>
        <p className="self-end">Discover the features</p>
      </div>
      <DrawCanvas />
   </div>
  );
}

export default App;
```


## 3D Effects with React

These are effects are implemented with the help of react-three/fiber, react-three/drei and three.js  to offer a unique experience with single function.

### 3D Box Geometry with R3F

The feature creates 3D Box Geometry Effect with React Three Fiber, creating an engaging user experience.

```javascript
import React from 'react';
import { BoxThreeD } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen bg-slate-300 relative overflow-hidden">
      <BoxThreeD boxColor="white" />
   </div>
  );
}

export default App;
```

1. For `show` pass the array of images with fixed length 6 which you want to show.

### 3D Glass Effect with R3F TorusGeometry

The feature creates 3D Box Geometry Effect with React Three Fiber, creating an engaging user experience.

```javascript
import React from 'react';
import { GlassEffect } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen bg-slate-300 relative overflow-hidden">
      <GlassEffect text="hello voltyjs" size={1.4} />
   </div>
  );
}

export default App;
```

1. For `show` pass the array of images with fixed length 6 which you want to show.

# License

Voltyjs is released under the [MIT License](license.md). Feel free to use it in both personal and commercial projects.

## Note

This package is still in development, so there may be issues. Please help us by submitting any problems to my GitHub profile.
[@AkshayDhola](https://github.com/AkshayDhola)
