import React from 'react';
import AllAlumnos from '../pages/AllAlumnos'
class ButtonCheckbox extends React.Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>Get all</button>
                {showing
                    ? <AllAlumnos />
                    : null
                }
            </div>
        )
    }
}
export default ButtonCheckbox;