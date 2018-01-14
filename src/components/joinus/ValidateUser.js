import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './validate/FirstNameChecker';
import LastNameChecker from './validate/LastNameChecker';
import EmailChecker from './validate/EmailChecker';
import ZipChecker from './validate/ZipChecker';
import USStatesChecker from './validate/USStatesChecker';

const StyledValidateUser = styled.div`
    position: absolute;
    top: 2vh;
    right 2vw;
    z-index: 4;
    color: #1c1841;
    & label {
        width: 10vw;
        height: 4.5vh;
        position: absolute;
        right: 0;
        border: 4px solid #858370;
        border-top-color: #99967b;
        border-right-color: #99967b;
        box-shadow: -2px 2px 3px 1px rgba(0,0,0,.3);
        border-radius: 2px;
        text-align: center;
        font-family: sans-serif;
        font-size: .6rem;
        color: #1d1c1c;
        line-height: 2;
        transition: all 1s ease;
    }
    & input {
        position: absolute;
        right: 12vw;
        height: 4vh;
        font-size: 1rem;
        background: grey;
        border: 2px solid tan;
    }
`

const ValidateUser = () => (
    <StyledValidateUser className="profile">
        <FirstNameChecker />
        <LastNameChecker />
        <EmailChecker />
        <ZipChecker />
        <USStatesChecker />
    </StyledValidateUser>
)

export default ValidateUser;


/*
.true {
  background-color: rgb(50, 76, 97);
  color: greenyellow;
}

.false {
  background-color: #420505;
  color: #b8b8b8;
}

*/