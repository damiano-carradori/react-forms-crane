import React from 'react';
import { storiesOf } from '@storybook/react';
import Password from './Password';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('Password', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('default', () => (
        <Password name="pass" placeholder="Write your password here..." />
    ))
    .add('disabled', () => (
        <Password name="pass" defaultValue="test" disabled />
    ));
