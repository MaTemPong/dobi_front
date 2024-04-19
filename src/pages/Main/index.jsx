import * as S from './styled'
import CheckBox from '../../components/CheckBox'

const Main = () => {
    
    return(
    <S.Main>
        <S.Content>
            <S.Title>응시 과목을 선택해주세요.</S.Title>
            <S.Form action='#' method='post'>
                <CheckBox text={'개발자환경구축'} />
                <CheckBox text={'프로그래밍언어응용'} />
                <CheckBox text={'프로그래밍언어활용'} />
                <CheckBox text={'응용SW기초기술활용'} />
                <CheckBox text={"애플리케이션 배포"}/>
            <S.StareBtn type="submit">응시하기</S.StareBtn>   
            </S.Form>
        </S.Content>
    </S.Main>
    )
}

export default Main;
