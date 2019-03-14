import React from 'react';
import { storiesOf } from '@storybook/react';
import File from './File';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('File', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('default', () => (
        <File name="test" value="test" />
    ))
    .add('multiple values', () => (
        <File name="test" value="test" multiple/>
    ))
    .add('disabled', () => (
        <File name="test" value="test" disabled />
    ));