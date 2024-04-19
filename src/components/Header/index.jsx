import * as S from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <S.Header>
            <S.Logo>도비</S.Logo>
            <S.ListSet>
                <S.List>문제 풀기</S.List>
            </S.ListSet>
        </S.Header>
    );
}

export default Header;