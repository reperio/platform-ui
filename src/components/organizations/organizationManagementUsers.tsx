import React from 'react'
import { Grid, ButtonElement } from '@reperio/ui-components';
import User from '../../models/user';

interface OrganizationManagementUsersProps {
    removeUser(index: number): void;
    gridData: User[];
}

const OrganizationManagementUsers = (props: OrganizationManagementUsersProps) => (
    <Grid
        columns={
            [{
                Header: "First Name",
                accessor: "firstName",
                Placeholder: "First Name"
            },
            {
                Header: "Last Name",
                accessor: "lastName",
                Placeholder: "Last Name"
            },
            {
                Header: "Email",
                accessor: "primaryEmailAddress",
                Placeholder: "Email"
            },
            {
                Header: "Primary Phone",
                accessor: "primaryPhone",
                Placeholder: "Primary Phone"
            },
            { 
                Header: '', 
                maxWidth: 150,
                sortable: false,
                filterable: false,
                Cell: (row: any) => (
                    <ButtonElement type="button" color="danger" text="Remove" onClick={() => props.removeUser(row.index)} />
                )
            }]
        }
        defaultPageSize={10}
        data={props.gridData}
        filterable={true} />
);

export default OrganizationManagementUsers;