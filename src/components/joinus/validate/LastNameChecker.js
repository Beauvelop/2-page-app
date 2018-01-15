import React from 'react';
import styled from 'styled-components';

import validator from 'validator';


const StyledLastNameChecker = styled.div`
    height: 10vh;
    // background: #cfcfcf;
    color: #1c1841;
`
const LastNameLabel = styled.label`
    background-color: ${props =>(props.isTrue? "green":"orangered")};
`
class LastNameChecker extends React.Component {
    constructor(props) {
        super(props);
        this.handleLastName = this.handleLastName.bind(this);
        this.state = {
            LastNameBool: ''
        }
    }

    handleLastName(e) {
        const verifiedLastName = /(^[a-zA-Z-']*$)/.test(e.target.value.trim());
        this.setState({
            LastNameBool: verifiedLastName
        });
    }
    render() {
        return (
        <StyledLastNameChecker className="LastNameChecker">
    {console.log(`
        this.state.LastNameBool: ${this.state.LastNameBool}
    `)}
            <LastNameLabel isTrue={this.state.LastNameBool} 
            >Last Name 
                <input onChange={this.handleLastName} type="text" />
            </LastNameLabel>
        </StyledLastNameChecker>
        )
    }
}
export default LastNameChecker;