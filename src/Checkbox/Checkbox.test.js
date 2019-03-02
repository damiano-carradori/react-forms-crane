jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import { kebab_case } from '../utils';

describe('Checkbox', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'checkbox-name';
        const value = 'Checkbox value';
        const label = 'Checkbox label';
        const id = `checkbox_${name}_${kebab_case(label)}`;

        const wrapper = shallow(
            <Checkbox
                name={name}
                value={value}
                label={label}
            />,
            { disableLifecycleMethods: true },
        );

        const c = wrapper.find('input');
        const l = wrapper.find('label');

        expect(c.prop('type')).toBe('checkbox');
        expect(c.prop('name')).toBe(name);
        expect(c.prop('defaultValue')).toBe(value);
        expect(c.prop('id')).toBe(id);
        expect(l.text()).toBe(label);
        expect(l.prop('htmlFor')).toBe(id);
    });

});