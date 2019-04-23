# <center>ant-desgin单选可取消组件</center>

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
import React, { PureComponent } from 'react';
import { RadioAbandon } from 'radio-abandon';

const options = [
  { lable: '选项一', value: 1 },
  { lable: '选项二', value: 1 },
];

class BasicComponent extends PureComponent {
  render () {
    return (
      <RadioAbandon options={options} />
    )
  }
}
```

### Options

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| disabled | 整组失效 | boolean | false |
| name | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string | - |
| options | 指定可选项 | string[] | [] |
| value | 指定选中的选项 | any | - |
| onChange | 变化时回调函数 | Function(checkedValue) | - |