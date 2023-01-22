import styled, { css } from 'styled-components';
import { BaseTitle } from './components/BaseTitle';

interface IThemeTitleProps {
  titleSize: string;
  color: string;
}

export const ThemeText = styled(BaseTitle)<IThemeTitleProps>`
  ${(props) => {
    switch (props.titleSize) {
      case 'title1':
        return css`
          font-weight: 700;
          font-size: 24px;
          line-height: auto;
        `;
      case 'title2':
        return css`
          font-weight: 700;
          font-size: 16px;
          line-height: auto;
          font-style: italic;
          text-decoration: underline var(--color-blue-1);
        `;
      case 'textResult1':
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 46px;
          font-style: italic;
        `;
      case 'textResult2':
        return css`
          font-weight: 700;
          font-size: 16px;
          line-height: 46px;
          font-style: italic;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'gray-1':
        return css`
          color: var(--color-gray-1);
        `;
      case 'blue-1':
        return css`
          color: var(--color-blue-1);
        `;
      case 'blue-2':
        return css`
          color: var(--color-blue-2);
        `;
      default:
        return false;
    }
  }}
`;
