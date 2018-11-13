import * as React from 'react';
import { mount } from 'enzyme';
import Permissions from '../permissions';
import { Permission } from '../../../models/permission';
import moment from 'moment';

const permissionData : Permission[] = [
    {
        applicationId: null,
        deleted: false,
        description: "This be a test",
        displayName: 'Test',
        isSystemAdminPermission: false,
        lastModified: moment().toDate(),
        name: 'test',
        rolePermissions: []
    }
];

test('Checks if grid has data in it', () => {
    const wrapper = mount(
        <Permissions    navigateToManagement={() => {}}
                        gridData={permissionData} />
                    );

    expect(wrapper.find('.rt-td').first().text()).toEqual(permissionData[0].name);
});

test('Check if clicking row calls function', () => {
    const mockManage = jest.fn();
    const wrapper = mount(
        <Permissions    navigateToManagement={mockManage}
                        gridData={permissionData} />
                    );

    wrapper.find('.rt-td').first().simulate('click');
    expect(mockManage).toHaveBeenCalled();
});