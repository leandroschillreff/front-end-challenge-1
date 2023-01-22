import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  /* min-width: 100%;
  max-width: 500px; */
  padding: 2.5rem 3.4em;
  /* border-radius: 20px; */
  background: var(--color-white);
  gap: 0.5rem;
  @media (max-width: 760px) {
    min-width: 100%;
    max-width: 260px;
    padding: 1rem;
    }

`;

export const ThemeLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: auto;
  color: var(--color-gray-1);
`;

export const ThemeErrorForm = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: auto;
  color: var(--color-negative);
`;

export const ThemeTextForm = styled.p`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-black);
`;

interface IThemeInputProps {
  borderColor: string;
}

export const ThemeInput = styled.input<IThemeInputProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: var(--color-black);
  padding: 5px 15px;
  background: var(--color-white);
  /* border: 2px solid var(--color-gray-3); */  
  border-radius: 4px;
  /* &:focus {
    outline: 0;
    border: 2px solid var(--color-blue-3);
  }

  &:hover {
    border: 2px solid var(--color-blue-3);
  } */

  ${(props) => {
    switch (props.borderColor) {
      case 'error':
        return css`
          border: 2px solid var(--color-negative);
        `;
      case 'success':
        return css`
          border: 2px solid var(--color-gray-3);
        `;
      default:
        return false;
    }
  }}
`;
