import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  height: 186px;
  display: flex;

  .imgEsq {
    display: flex;
    align-items: center;
    margin-left: 450px;

    @media (min-width: 2506px) {
      margin-left: 740px;
    }

    @media (max-width: 1919px) {
      margin-left: 150px;
    }
  }

  .imgDir {
    display: flex;
    align-items: center;
    margin-right: 450px;

    @media (min-width: 2506px) {
      margin-right: 740px;
    }

    @media (max-width: 1919px) {
      margin-right: 150px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }


  `
