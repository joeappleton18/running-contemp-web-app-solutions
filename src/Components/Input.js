import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'





const StyledInput = styled.input`
width: 100%;
height: 44px;
border: 1px solid ${({theme}) => theme.colors.darkShade[10]}};
box-sizing: border-box;
border-radius: 4px;
font-size: 20px;
margin-bottom: 2%;
`;

const Input = (props) => {

    const {type, ...rest} = props;

    return (
        <StyledInput type={type} {...rest}  /> 
    )
}
    
Input.propTypes = {
    type: PropTypes.string
}

Input.defaultPropTypes = {
    type: "text"
}

export default Input
