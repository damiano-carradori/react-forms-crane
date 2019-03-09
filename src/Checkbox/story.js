import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('Checkbox', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <Checkbox name="test" value="test" label="test"/>
    ));