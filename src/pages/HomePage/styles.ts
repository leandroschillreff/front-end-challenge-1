import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
  }
  .homeContent {
    display: flex;
    width: 608px;
    background: var(--color-white);
    border-radius: 4px;
    border: 2px solid var(--color-gray-3);
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.2);
    padding: 0;
    @media (max-width: 760px) {
      flex-direction: column;
      width: 100%;
    }
    .buttonCalculate {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      border-radius: 4px;
      color: var(--color-gray-1);
      border: 2px solid var(--color-gray-3);
      background: var(--color-white);
      padding: 10px 10px;
      cursor: pointer;

      &:hover {
        border: 2px solid var(--color-blue-3);
        opacity: 0.8;
      }
    }

    .resultMdrSection {
      display: flex;
      min-width: 35%;
      background: var(--color-gray-2);
      justify-content: center;
      align-items: center;

      @media (max-width: 760px) {
        width: 100%;
      }
    }
  }
`;
