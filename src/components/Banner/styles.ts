import styled from "styled-components";

export const Header2 = styled.header`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`
export const Titulo1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 450px;


  h1 {
    color: #fff;
    font-weight: 100;
    font-size: 32px;
    margin-top: 24px;
  }

  .segundo {
    color: #fff;
    font-weight: 900;
    font-size: 32px;
    margin-top: 156px;
  }

  @media (min-width: 2506px) {
    margin-left: 740px;
  }

  @media (max-width: 1879px) {
    margin-left: 130px;
  }
`
