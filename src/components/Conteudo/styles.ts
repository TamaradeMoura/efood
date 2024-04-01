import { Link } from "react-router-dom";


import styled from "styled-components";


export const Card = styled.div`
  width: 472px;
  height: 410px;
  margin-top: 48px;
  border: 1px solid #E66767;
  position: relative;

  .titulo {
    margin-top: 8px;
    margin-left: 8px;
  }

  .conteudo {
    width: 456px;
    font-size: 14px;
    margin-top: 46px;
    margin-left: 8px;
    font-weight: 400px;
  }
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Score = styled.div`
img {
  margin-left: 8px;
  margin-right: 8px;
  position: relative;
  top: 1px;
}
`

export const Botao = styled.div`
  margin-left: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Button = styled(Link)`
  background-color: #E66767;
  border: none;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700px;
  padding: 4px 6px;
  cursor: pointer;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
