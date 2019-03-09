import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('TextArea', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <TextArea name="test" />
    ));