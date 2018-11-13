import {ButtonElement} from '@reperio/ui-components';
import React from 'react';
import Dropdown from '../../models/dropdown';

interface PermissionsArrayProps {
    removePermission(index: number): void;
    canUpdateRoles: boolean;
    initialValues: Dropdown[];
}

const PermissionsArray: React.SFC<PermissionsArrayProps> = (props: PermissionsArrayProps) => {
    return (
        <div>
            <div className="r-row-child">
                {props.initialValues.map((member:any, index:number) =>
                    <div key={index}>
                        <hr />
                        <div className="r-row-child">
                            <div className="row">
                                <div className="r-row-child">
                                    {props.initialValues[index].label}
                                </div>
                                <div className="r-row-child">
                                    {props.canUpdateRoles ? 
                                        <ButtonElement type="button" color="danger" text="Remove" onClick={() => props.removePermission(index)} />
                                    : null }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default PermissionsArray;