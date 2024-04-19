import styled from "styled-components";

export const Input = styled.input`
    width: 25px;
    height: 25px;
    `;
    export const Label = styled.label`
    cursor: pointer;
    transition: .2s;
    &:has(${Input}:checked) {
        transform: scale(1.05);
        background: #1c1f42;
        opacity: .8;
        color: #fff;
    }
`;