import styled from "styled-components";

export const Container = styled.div`
    width: calc(100vw - 350px);
    background-color: #FEF8E5;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    
    export const Form = styled.form`
        width: 80%;
        height: 50%;
    `;

    export const Section = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid #000;
    text-align: center;
    margin: 0 auto;
`;

export const Index = styled.span`
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 1.4em;
    font-weight: bold;
`;

export const Question = styled.h1`
    padding: 40px;
`;

export const AnswerInput = styled.input`
    width: 20%;
    margin: 4%;
    padding: 2%;
    font-size: 1.2em;
`;

export const ButtonWrap = styled.div`
    position: absolute;
    bottom: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin: 0 3%;
    background: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px #ddd;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
`;

