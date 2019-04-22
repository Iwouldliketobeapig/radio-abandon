<center>单选可取消组件</center>

[![NPM version](https://img.shields.io/npm/v/radio-abandon.svg)](https://www.npmjs.org/package/radio-abandon)
[![NPM Downloads](https://img.shields.io/npm/dm/radio-abandon.svg)](https://www.npmjs.org/package/radio-abandon)
[![Build Status](https://travis-ci.org/cahamilton/radio-abandon.svg?branch=master)](https://travis-ci.org/cahamilton/radio-abandon)

这是一个基于react、ant-desgin的可以取消的单选组件

## 安装

```npm
npm i --S radio-abandon
```

## 使用

```javascript
import { RadioAbandon } from 'radio-abandon';

const options = [
  { lable: '选项一', value: 1 },
  { lable: '选项二', value: 1 },
];
<RadioAbandon options={options} />
```