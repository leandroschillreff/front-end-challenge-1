import { ThemeText } from '../../styles/typography';
import { StyledShowResult } from './styles';

type IShowResultProps = {
  text: string;
  value: number;
};

export const ShowResult = ({ text, value }: IShowResultProps) => (
  <StyledShowResult>
    <ThemeText className='' tag='p' titleSize='textResult1' color='blue-2'>
      {text}
    </ThemeText>
    <ThemeText className='' tag='p' titleSize='textResult2' color='blue-2'>
      {value
        ? (value / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        : '00,00'}
    </ThemeText>
  </StyledShowResult>
);
