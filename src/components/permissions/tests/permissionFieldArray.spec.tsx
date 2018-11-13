import * as React from 'react';
import { mount } from 'enzyme';
import PermissionsArray from '../permissionsArray';
import Dropdown from '../../../models/dropdown';
import { ButtonElement } from '@reperio/ui-components';

test('Checks to see clicking delete button calls removePermission with 1 param', () => {
    const initialValues: Dropdown[] = [{
        label: 'test',
        value: '1'
    }];

    const mockDelete = jest.fn();
    const wrapper = mount(
        <PermissionsArray   canUpdateRoles={true}
                            removePermission={mockDelete}
                            initialValues={initialValues} />
                    );

    wrapper.find(ButtonElement).at(0).simulate('click');
    expect(mockDelete).toHaveBeenCalledWith(0);
});

test('Checks to see if not having updateRole permission hides delete button', () => {
    const initialValues: Dropdown[] = [{
        label: 'test',
        value: '1'
    }];

    const mockDelete = jest.fn();
    const wrapper = mount(
        <PermissionsArray   canUpdateRoles={false}
                            removePermission={mockDelete}
                            initialValues={initialValues} />
                    );

    
    expect(wrapper.find(ButtonElement).at(0).length).toEqual(0);
});