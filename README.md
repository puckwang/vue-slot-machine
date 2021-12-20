# Vue-SlotMachine

![Banner](https://github.com/puckwang/vue-slot-machine/blob/master/screenshots/banner.png?raw=true)
[![npm](https://img.shields.io/npm/v/@puckwang/vue-slot-machine.svg?style=flat)](https://www.npmjs.com/package/@puckwang/vue-slot-machine)
[![npm](https://img.shields.io/npm/l/@puckwang/vue-slot-machine.svg?style=flat)](https://github.com/puckwang/vue-slot-machine/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/@puckwang/vue-slot-machine.svg?style=flat)](https://www.npmjs.com/package/@puckwang/vue-slot-machine)

A Vue component of a slot machine, made with an HTML5 canvas, RWD.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

### In NPM
1. Use `npm` or `yarn` download `@puckwang/vue-slot-machine`.
```sh
npm install @puckwang/vue-slot-machine

// or

yarn add @puckwang/vue-slot-machine
```
2. Registered component.
Then register the plugin to globally install all components:
```js
import SlotMachine from '@puckwang/vue-slot-machine';

Vue.use(SlotMachine);
```

Or, import components individually for local registration:
```js
import {SlotMachine} from '@puckwang/vue-slot-machine';

export default {
    components: { "slot-machine": SlotMachine }
}
```

### In Browser
```html
<div id="app">
    <div>
        <slot-machine></slot-machine>
    </div>
</div>

<script src="https://unpkg.com/@puckwang/vue-slot-machine@latest"></script>

<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: { "slot-machine": VueSlotMachine.SlotMachine }
})
</script>
```

## Usage

[Demo](https://codepen.io/puckwang/pen/OGvrdM)

```html
<template>
    <slot-machine
        :list="list"
        :trigger="trigger"
        :height="300"
        :width="300"
        @onComplete="onComplete">
    </slot-machine>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {text: '1', color: '#668CFF'},
                {text: '2', color: '#FF6666'},
                {text: '3', color: '#B366FF'},
            ],
            trigger: null,
        };
    },
    methods: {
        start() { // Trigger to let the machine start
            this.trigger = new Date();
        },
        onComplete(data) { // Run complete callback
            console.log(data);
        }
    }
}
</script>
```

## Configuration

### Component props

##### `list`
- Type: [Object](#gift-object)[]
- Description: A list of gift object.
- Default: 0~9

##### `trigger`
- Type: Date
- Description: Use to trigger to let the machine start.
- Default: null

##### `currentIndex`
- Type: Integer
- Description: Specify the index the result.
- Default: -1

##### `width`
- Type: Date
- Description: Width of canvas.
- Default: 300

##### `height`
- Type: Date
- Description: Height of canvas.
- Default: 300

##### `responsive`
- Type: Boolean
- Description: Responsive Canvas, width and height will be filled parent element, it's according to the set ratio (height / width).
- Default: false

### Gift Object
##### `text`
- Type: String
- Description: Text of the gift.
- Required

##### `color`
- Type: ColorHex
- Description: Color for gift text.
- Default: #000 (Black)

##### `fontFamily`
- Type: String
- Description: Font family for gift text.
- Default: Arial

##### `fontStyle`
- Type: String
- Description: Font style for gift text. can be `normal`, `bold`, `italic` or even `italic bold`.
- Default: normal

##### `align`
- Type: String
- Description: Text align for gift text. can be `left`, `center`, or `right`.
- Default: `center`

##### `verticalAlign`
- Type: String
- Description: Text vertical align for gift text. can be `top`, `middle` or `bottom`.
- Default: `middle`

> Changing the `fontFamily`, `fontStyle` and `verticalAlign` will cause the layout to break!
> It is recommended to use the default value.

## Support

Please [open an issue](https://github.com/puckwang/vue-slot-machine/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/puckwang/vue-slot-machine/compare).
