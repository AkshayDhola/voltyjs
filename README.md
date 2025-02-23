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


# License

Voltyjs is released under the [MIT License](license.md). Feel free to use it in both personal and commercial projects.

## Note

This package is still in development, so there may be issues. Please help us by submitting any problems to my GitHub profile.
[@AkshayDhola](https://github.com/AkshayDhola)