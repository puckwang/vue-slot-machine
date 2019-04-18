# SlotMachine Vue Component

[![npm](https://img.shields.io/npm/v/@puckwang/slot-machine-vue-component.svg?style=flat)](https://www.npmjs.com/package/@puckwang/slot-machine-vue-component)
[![npm](https://img.shields.io/npm/l/@puckwang/slot-machine-vue-component.svg?style=flat)](https://github.com/puckwang/slot-machine-vue-component/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/@puckwang/slot-machine-vue-component.svg?style=flat)](https://www.npmjs.com/package/@puckwang/slot-machine-vue-component)

A Vue component of a slot machine, made with an HTML5 canvas, RWD.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation
1. Use `npm` or `yarn` download `@puckwang/slot-machine-vue-component`.
```sh
npm install @puckwang/slot-machine-vue-component

// or

yarn add @puckwang/slot-machine-vue-component
```
2. Registered component.
Then register the plugin to globally install all components:
```js
import SlotMachine from '@puckwang/slot-machine-vue-component';

Vue.use(SlotMachine);
```

Or, import components individually for local registration:
```js
import {SlotMachine} from '@puckwang/slot-machine-vue-component';

export default {
    components: { "slot-machine": SlotMachine }
}
```

## Usage

[Demo](https://codepen.io/puckwang/pen/OGvrdM)

```vue
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
- Default: null

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
- Description: Color of the gift.
- Default: #000 (Black)

## Support

Please [open an issue](https://github.com/puckwang/slot-machine-vue-component/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/puckwang/slot-machine-vue-component/compare).
