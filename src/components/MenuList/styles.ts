
import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  height: 186px;
  display: flex;

  .imgEsq {
    display: flex;
    align-items: center;
    margin-left: 450px;
  }

  .imgDir {
    display: flex;
    align-items: center;
    margin-right: 350px;
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  `

export const Group = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 56px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

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


`

