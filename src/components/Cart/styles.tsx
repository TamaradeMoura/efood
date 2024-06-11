import styled from "styled-components";
import { Button1 } from "../ConteudoList/styles";
import lixeira from '../../assets/images/lixeira.png'


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  height: 100%;

  ${Button1} {
    max-width: 95%;
    width: 100%;
    margin-right: 16px;
`
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 8px 16px;

p {
  color: #fff;
}

`
export const CartItem = styled.li`
  display: flex;
  margin-left: -10%;
  margin-right: 8px;
  margin-top: 32px;
  margin-bottom: -16px;
  background-color: #FFEBD9;
  padding: 8px 8px 12px;
  position: relative;

  img {
  height: 80px;
  width: 80px;
  }

  h3 {
  margin-left: 8px;
  }

  p {
  margin-left: 8px;
  margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: relative;
    top: 69px;
    left: 80px;
    cursor: pointer;
  }
`


