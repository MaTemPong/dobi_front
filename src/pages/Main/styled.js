import styled from "styled-components";
import { Label } from '../../components/CheckBox/styled';

export const Main = styled.div`
    width: calc(100vw - 350px);
    background-color: #FEF8E5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 80%;
    max-width: 600px;
    >${Label}{
        width: 100%;
        height: 50px;
        display: flex;
        padding: 0 15px;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        background: #ddd;
        box-shadow: 2px 2px 5px 1px #ccc;
        &:hover{
            transform: scale(1.05);
        }
    }
`;

export const Options = styled.label`
    
`;

export const Title = styled.div`
    font-size: 2rem;
`;

export const StareBtn = styled.button`
    background-color: D9D9D9;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #fff;
    font-weight: 600;
    box-shadow: 2px 2px 5px 1px #ddd;
    cursor: pointer;
    margin: 24px auto;
`;