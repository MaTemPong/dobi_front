import * as S from './styled';

const CheckBox = ({text}) => {
    return (
        <S.Label>
            <S.Input type="checkBox" name='subject' value={text} hidden />
            {text}
        </S.Label>
    );
}

export default CheckBox;