import * as React from 'react';
import { mount } from 'enzyme';
import OrganizationFieldArray from '../organizationFieldArray';
import Dropdown from '../../../models/dropdown';
import { ButtonElement } from '@reperio/ui-components';

test('Checks to see clicking delete button calls removeOrganization with 1 param', () => {
    const initialValues: Dropdown[] = [{
        label: 'test',
        value: '1'
    }];

    const mockDelete = jest.fn();
    const wrapper = mount(
        <OrganizationFieldArray removeOrganization={mockDelete} 
                                initialValues={initialValues} 
                                active={true} />
                    );

    wrapper.find(ButtonElement).at(0).simulate('click');
    expect(mockDelete).toHaveBeenCalledWith(0);

});