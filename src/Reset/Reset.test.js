import React from 'react'
import { mount } from 'enzyme';
import Reset from './Reset'

describe('Reset', () => {

    it('should create correctly the input with the right props', function () {
        const value = 'Reset value';

        const wrapper = mount(<Reset value={value} />);

        const i = wrapper.find('input');

        expect(i.prop('type')).toBe('reset');
        expect(i.prop('value')).toBe(value);
    });

});