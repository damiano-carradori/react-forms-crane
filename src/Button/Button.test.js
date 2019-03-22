import React from 'react'
import { mount } from 'enzyme';
import Button from './Button'

describe('Button', () => {

    it('should create the input and set props correctly', function () {
        const value = 'Button value';
        const onClick = jest.fn();
        const wrapper = mount(<Button onClick={onClick} value={value} disabled/>);

        expect(wrapper.find('input').prop('type')).toBe('button');
        expect(wrapper.find('input').prop('value')).toBe(value);
        expect(wrapper.find('input').prop('onClick')).toEqual(onClick);
        expect(wrapper.find('input').prop('disabled')).toBeTruthy();
    });

});