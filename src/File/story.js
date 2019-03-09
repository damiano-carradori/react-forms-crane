import React from 'react';
import { storiesOf } from '@storybook/react';
import File from './File';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('File', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <File name="test" value="test" label="test"/>
    ));