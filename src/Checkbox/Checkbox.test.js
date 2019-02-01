import React from 'react'
import { mount } from 'enzyme';
import Checkbox from './Checkbox'
import Form, { FormContext } from '../Form';
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import { FormContextProvider } from '../Form/FormContext';

describe('Checkbox', () => {

    it('should create the input and set props correctly', function () {

        // const element = getElementWithContext(FormContext, <Checkbox name="test" value={value} disabled/>);
        // const component = renderer.create(element)

        // console.log(element)

        // const value = 'Button value';
        // const onClick = jest.fn();
        const wrapper = mount(<FormContextProvider>
            <Checkbox name="test" value={value} disabled/>
        </FormContextProvider>);


        // expect(wrapper.find('input').prop('type')).toBe('button');
        // expect(wrapper.find('input').prop('value')).toBe(value);
        // expect(wrapper.find('input').prop('onClick')).toEqual(onClick);
        // expect(wrapper.find('input').prop('disabled')).toBeTruthy();
    });

});