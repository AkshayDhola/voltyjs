# Volty.js - Where Every Animation Sparks

![Volty.js](media/voltyjs.jpg)

Volty is an innovative React animation library designed to enhance user interfaces with smooth and visually appealing animations.

## Table of contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
   - Required Libraries
4. [Cool Effects](#cool-effects)
   - Cuberto

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
import { ImageTrail } from 'voltyjs';

function App() {
  return (
    <div className="w-full h-screen">
         <ImageTrail width={180} height={300} rounded={7}/>
    </div>
  );
}

export default App;
```

1. For `images` pass the array of images which you want to trail.
2. This defualt images is set in images props.

# License

Voltyjs is released under the [MIT License](license.md). Feel free to use it in both personal and commercial projects.

## Note

This package is still in development, so there may be issues. Please help us by submitting any problems to my GitHub profile.
[@AkshayDhola](https://github.com/AkshayDhola)


https://i.pinimg.com/474x/c6/2d/32/c62d3247f4ed4b3f0b39c0f48c4f57b5.jpg
https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg
https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg
https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg
https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg
