import styled from "styled-components";
import { Header } from './components/Header/styled';
import { Main } from './pages/Main/styled';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    @media screen and (max-width: 800px){
        flex-direction: column;
        >${Header}{
            width: 100%;
            height: 100px;
        }
        >${Main}{
            width: 100%;
            height: calc(100vh - 100px);
        }
    }
`;