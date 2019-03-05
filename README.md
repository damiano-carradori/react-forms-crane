# React Forms-crane 🏗️ [![Build Status](https://travis-ci.com/damiano-carradori/react-forms-crane.svg?branch=master)](https://travis-ci.com/damiano-carradori/react-forms-crane)

![npm bundle size](https://img.shields.io/bundlephobia/min/react-forms-crane.svg?style=for-the-badge) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/damiano-carradori/react-forms-crane/master.svg?style=for-the-badge) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/damiano-carradori/react-forms-crane/HOOKS.svg?style=for-the-badge)

## Installation

#### Latest
```javascript
$ npm install react-forms-crane
```
#### With hooks
```javascript
$ npm install react-forms-crane@hooks
```

## How to use

```javascript
import React from 'react';
import Form from 'react-forms-crane';

function App(){
    const onSubmit = ({firstName, lastName}) => {
        alert(`Hello ${firstName} ${lastName}!`)
    };
    
    return(
        <Form onSubmit={onSubmit}>
            <Form.Text name="firstName" placeholder="Insert your first name"/>
            <Form.Text name="lastName" placeholder="Insert your last name"/>
            <Form.Submit/>
        </Form>
    )
}
```

## Available Fields

- [x] Text
- [x] Checkbox
- [x] RadioButton
- [x] Password
- [x] Select
- [x] TextArea
- [x] File
- [x] Button
- [x] Submit
- [x] Reset

## Missing fields

- [ ] Search
- [ ] Number
- [ ] Email
- [ ] Hidden
- [ ] Color
- [ ] Image
- [ ] Range
- [ ] Url
- [ ] Date
- [ ] DateTime
- [ ] DateTimeLocal
- [ ] Time
- [ ] Month
- [ ] Week

## Other elements

- [ ] Fieldset
- [ ] Legend
