import * as React from 'react';
import { mount } from 'enzyme';
import Organizations from '../organizations';
import Organization from '../../../models/organization';
import OrganizationManagementUsers from '../organizationManagementUsers';
import User from '../../../models/user';
import { PickerElement, ButtonElement } from '../../../../node_modules/@reperio/ui-components';

const user: User = {
    firstName: "admin",
    id: "d08a1f76-7c4a-4dd9-a377-83ffffa752f4",
    lastName: "user",
    password: null,
    permissions: ["AddEmail", "CreateOrganizations", "CreateRoles", "CreateUsers", "DeleteEmail", "DeleteOrganizations"],
    primaryEmailAddress: "support@reper.io",
    userEmails: [],
    userOrganizations: [
        {
            organization: {id: "966f4157-934c-45e7-9f44-b1e5fd8b79a7", name: "Test Organization", personal: true, selectedUsers: [], userOrganizations: []},
            organizationId: "966f4157-934c-45e7-9f44-b1e5fd8b79a7",
            user: null,
            userId: "d08a1f76-7c4a-4dd9-a377-83ffffa752f4"
        },
        {
            organization: {id: "fbcb4a99-1fe0-4fec-b5f7-64efbeeb1893", name: "bbbb", personal: false, selectedUsers: [], userOrganizations: []},
            organizationId: "fbcb4a99-1fe0-4fec-b5f7-64efbeeb1893",
            user: null,
            userId: "d08a1f76-7c4a-4dd9-a377-83ffffa752f4"
        }
    ],
    userRoles: [],
    selectedOrganizations: [],
    selectedRoles: []
};

test('Checks if grid has data in it', () => {
    const userData : User[] = [
        user
    ];

    const wrapper = mount(
        <OrganizationManagementUsers    canUpdateOrganizations={true} 
                                        removeUser={() => {}} 
                                        gridData={userData} />
                    );

    expect(wrapper.find('.rt-td').first().text()).toEqual(userData[0].firstName);
});

test('Checks to see if user grid dropdown + add button are not rendered without permission to update', () => {
    const userData : User[] = [
        user
    ];

    const wrapper = mount(
        <OrganizationManagementUsers    canUpdateOrganizations={false}
                                        removeUser={() => {}} 
                                        gridData={userData} />
                    );

    expect(wrapper.find(ButtonElement).filterWhere(x => x.text() == 'Remove').length).toEqual(0);
});