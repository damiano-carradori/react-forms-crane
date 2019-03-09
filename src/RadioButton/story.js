import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('RadioButton', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <RadioButton name="test" value="test" label="test"/>
    ));