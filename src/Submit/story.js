import React from 'react';
import { storiesOf } from '@storybook/react';
import Submit from './Submit';

storiesOf('Submit', module)
    .add('with text', () => (
        <Submit />
    ));