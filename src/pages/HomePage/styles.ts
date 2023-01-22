import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: flex;
  width: 100%;
  height: 100%; 
  /* align-items: center; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  justify-content: center;
  /* background: var(--color-negative); */
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
  }
  .homeContent {
    display: flex;
    /* margin-top:3rem; */
    /* flex-direction: row; */
    width: 608px;
    /* height: 390px; */
    background: var(--color-white);
    border-radius: 4px;
    border: 2px solid var(--color-gray-3);
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.2);
    padding: 0;
    @media (max-width: 760px) {
      flex-direction: column;
      /* justify-content:center: */
      width: 100%;
    }

    .resultMdrSection {
      display: flex;
      /* flex-direction: column; */
      min-width: 35%;
      background: var(--color-gray-2);
      /* padding: 2rem; */
      justify-content: center;
      align-items: center;

      @media (max-width: 760px) {
        /* flex-direction: column; */
        /* justify-content:center: */
        width: 100%;
      }
    }
  }
`;
