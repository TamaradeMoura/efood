import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-left: 171px;
    margin-right: 121px;
    font-size: 18px;
    font-weight: bold;
  }
`

export const Group = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 200px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Img = styled.img`
  width: 100%;
`
