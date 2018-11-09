import * as React from 'react';
import { mount } from 'enzyme';
import Organizations from '../organizations';
import Organization from '../../../models/organization';
test('Checks to see if organization create button calls a function', () => {
    const mockCreate = jest.fn();
    const wrapper = mount(
        <Organizations  navigateToManagement={() => {}} 
                        navigateToCreate={mockCreate} 
                        gridData={[]} />
                    );

    wrapper.find('button').at(0).simulate('click');
    expect(mockCreate).toHaveBeenCalled();
});

test('Checks if grid has data in it', () => {
    const orgData : Organization[] = [
        {
            id: "966f4157-934c-45e7-9f44-b1e5fd8b79a7",
            name: "Test Organization",
            personal: true,
            selectedUsers: [],
            userOrganizations: []
        }
    ];

    const wrapper = mount(
        <Organizations  navigateToManagement={() => {}} 
                        navigateToCreate={() => {}} 
                        gridData={orgData} />
                    );

    expect(wrapper.find('.rt-td').first().text()).toEqual(orgData[0].name);
});

test('Check if clicking row calls function', () => {
    const orgData : Organization[] = [
        {
            id: "966f4157-934c-45e7-9f44-b1e5fd8b79a7",
            name: "Test Organization",
            personal: true,
            selectedUsers: [],
            userOrganizations: []
        }
    ];

    const mockManage = jest.fn();
    const wrapper = mount(
        <Organizations  navigateToManagement={mockManage} 
                        navigateToCreate={() => {}} 
                        gridData={orgData} />
                    );

    wrapper.find('.rt-td').first().simulate('click');
    expect(mockManage).toHaveBeenCalled();
});