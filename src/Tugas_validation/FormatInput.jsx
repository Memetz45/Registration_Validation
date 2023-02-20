import React from "react";
import styled from "styled-components";

const StyleInput = styled.input`
margin: 5px 0px;
font-size: 20px;
`
const Input = ({label, type, name, placeholder, onChange}) => {
    return(
        <div>
            <label>{label}:</label>
            <br />
            <StyleInput type={type} name={name} placeholder={placeholder} onChange={e => onChange(e.target.value)} size="24" font-size="50px"/>
            <br />
        </div>
    )
}

export default Input;