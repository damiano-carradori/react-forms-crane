jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import Password from './Password';

describe('Password', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'password-name';

        const wrapper = shallow(
            <Password
                name={name}
            />,
            { disableLifecycleMethods: true },
        );

        const i = wrapper.find('input');

        expect(i.prop('type')).toBe('password');
        expect(i.prop('name')).toBe(name);
    });

});