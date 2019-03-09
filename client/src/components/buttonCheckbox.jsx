import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


function ButtonCheckbox(props) {
    return (
        <>
            <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
                <ToggleButton value={1}>{props.method}
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default ButtonCheckbox;