jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';
import { kebab_case } from '../utils';

describe('RadioButton', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'radio-name';
        const value = 'RadioButton value';
        const label = 'RadioButton label';
        const id = `radio_${name}_${kebab_case(label)}`;

        const wrapper = shallow(
            <RadioButton
                name={name}
                value={value}
                label={label}
            />,
            { disableLifecycleMethods: true },
        );

        const i = wrapper.find('input');
        const l = wrapper.find('label');

        expect(i.prop('type')).toBe('radio');
        expect(i.prop('name')).toBe(name);
        expect(i.prop('defaultValue')).toBe(value);
        expect(i.prop('id')).toBe(id);
        expect(l.text()).toBe(label);
        expect(l.prop('htmlFor')).toBe(id);
    });

});