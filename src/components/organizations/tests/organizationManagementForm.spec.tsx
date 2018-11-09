import * as React from 'react';
import { mount } from 'enzyme';
import OrganizationManagementForm from '../organizationManagementForm';
import User from '../../../models/user';
import Organization from '../../../models/organization';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reduxForm } from 'redux-form';
import { PickerElement, TextboxElement, ButtonElement } from '@reperio/ui-components';

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

const organization: Organization = {
    id: "966f4157-934c-45e7-9f44-b1e5fd8b79a7",
    name: "Test Organization",
    personal: true,
    selectedUsers: [{
        label: 'd08a1f76-7c4a-4dd9-a377-83ffffa752f4',
        value: 'd08a1f76-7c4a-4dd9-a377-83ffffa752f4'
    }],
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
    ]
}

test('Checks to see back button works', () => {
    const mockNavigate = jest.fn();

    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={mockNavigate}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={() => {}} />
        </Provider>);

    wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Back').at(0).simulate('click');
    expect(mockNavigate).toHaveBeenCalledWith();
});

test('Checks to see submitting form passes correct params', () => {
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Save').at(0).simulate('submit');
    expect(submit).toHaveBeenCalled();
});

test('Checks to see if canUpdateOrganizations is false, save button disappears', () => {
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={false}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    expect(wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Save').length).toEqual(0);
});

test('Checks to see if canDeleteOrganizations is false, delete button disappears', () => {
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={false}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    expect(wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Delete').length).toEqual(0);
});

test('Checks to see if removeUser button works', () => {
    const mock = jest.fn();
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={mock}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Remove').at(0).simulate('click');
    expect(mock).toHaveBeenCalled();
});

test('Checks to see if deleteOrganization button works', () => {
    const mock = jest.fn();
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={mock}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    wrapper.find(ButtonElement).filterWhere(x=> x.text() == 'Delete').at(0).simulate('click');
    expect(mock).toHaveBeenCalled();
});

test('Checks to see if user grid dropdown + add button are not rendered without permission to update', () => {
    const mock = jest.fn();
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={false}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    expect(wrapper.find(PickerElement).length + wrapper.find(ButtonElement).findWhere(x=> x.text() == 'Add').length).toEqual(0);
});

test('Checks to see if text input is disabled without permission to update', () => {
    const mock = jest.fn();
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={false}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={null}
                        addUser={() => {}}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    let disabled = true;
    wrapper.find('fieldset').forEach(x => {
        if (x.prop('disabled') == false) {
            disabled = false;
        }
    });

    expect(disabled).toEqual(true);
});

test('Checks to see if adding a user calls a function with certain params', () => {
    const mock = jest.fn();
    const submit = jest.fn();
    const Decorated = reduxForm({ 
        form: 'testForm', onSubmit: submit
    })(OrganizationManagementForm);

    const store = createStore((state) => state)
    const wrapper = mount(
        <Provider store={store}>
            <Decorated  navigateToOrganizations={() => {}}
                        canUpdateOrganizations={true}
                        canDeleteOrganizations={true}
                        initialValues={organization}
                        isError={false}
                        errorMessage={null}
                        removeUser={() => {}}
                        deleteOrganization={() => {}}
                        selectedUser={{label: `${user.firstName} ${user.lastName} - ${user.primaryEmailAddress}`, id: user.id}}
                        addUser={mock}
                        selectUser={() => {}}
                        users={[user]}
                        onSubmit={submit} />
        </Provider>);

    wrapper.find(ButtonElement).filterWhere(x=> x.text() == 'Add').simulate('click');
    expect(mock).toHaveBeenCalledWith({label: `${user.firstName} ${user.lastName} - ${user.primaryEmailAddress}`, id: user.id});
});