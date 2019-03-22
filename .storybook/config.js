import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700');
  
  *, ::after, ::before{
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
  }
`;

const req = require.context('../src', true, /story.js$/);

function loadStories() {
    addDecorator(storyFn => <Fragment><GlobalStyle/>{storyFn()}</Fragment>);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
