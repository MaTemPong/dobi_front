import * as S from './styled'

const Quest = () => {

    return(
        <S.Container>
            <S.Index>{`문항 1/20`}</S.Index>
            <S.Form>
                <S.Section>
                    <S.Question>{`재원이의 성별은?`}</S.Question>
                    <S.AnswerInput />
                    <S.ButtonWrap>
                        <S.Button>{`정답 확인`}</S.Button>
                        <S.Button>{`다음 문제`}</S.Button>
                    </S.ButtonWrap>
                </S.Section>
            </S.Form>
        </S.Container>
    )

}

export default Quest;