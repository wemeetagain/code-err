# CodeError

> create error instances with a code (and props)<br/>
> a more intuitive [err-code](https://github.com/IndigoUnited/js-err-code)<br/>

## Description

Extends the builtin Error class with `.code` and `.props` properties for better error handling.

## Install

### npm:

`npm install code-err`

## Import

### ESM

`import { CodeError } from 'code-err'`

<!--
### CJS

`const { CodeError } = require('code-err')`
-->

## Usage

```ts
const message = 'this is an error message'
const code = 'THIS_IS_AN_ERROR_CODE'
interface Props { ... }
const props: Props = { ... }

// typescript without props
new CodeError(message, code)

// typescript with props
new CodeError<Props>(message, code, props)

// javascript
new CodeError(message, code, props)
```

## API

### CodeError Class

#### constructor\<T\>(code: string, props?: T extends Record<string, any>)

### CodeError Instance

#### message: string

The error message provided to the constructor

#### code: string

The error code provided to the constructor

#### props: T extends Record<string, any>

If undefined in constructor it is an empty record/object `{}`.

