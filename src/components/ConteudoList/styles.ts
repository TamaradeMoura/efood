import styled from "styled-components";

export const Card1 = styled.div`
    width: 320px;
    height: 338px;
    margin-top: 40px;
    background-color: #E66767;

    h2 {
      color: #FFEBD9;
      font-size: 16px;
      margin: -4px 8px 8px;
    }

    p {
      color: #FFEBD9;
      font-size: 14px;
      line-height: 22px;
      margin: 8px 8px;
    }
`

export const Img1 = styled.img`
  margin: 8px 8px;
`

export const Button1 = styled.button`
  color: #E66767;
  font-size: 14px;
  font-height: 700px;
  text-align: center;
  width: 304px;
  height: 24px;
  background-color: #FFEBD9;
  border: none;
  margin: 2px 8px 8px;
  cursor: pointer;
`

export const StyleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);


  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const Card2 = styled.div`
    width: 1024px;
    height: 344px;
    background-color: #E66767;
    z-index: 1;

    .title {
      display: flex;
    }
`

export  const Close = styled.div`
    display: flex;
    justify-content: right;
    position: relative;
    top: 8px;
    right: 8px;
    cursor: pointer;
`
export const Food = styled.div`
    margin-left: 24px;

    h2 {
      color: #FFFFFF;
      font-size: 16px;
      margin-top: 32px;
    }

    p {
      color: #FFFFFF;
      font-size: 14px;
      line-height: 22px;
      margin-top: 16px;
    }
`

export const Img2 = styled.img`
  width: 280px;
  height: 280px;
  object-fit: fill;
  margin-top: 16px;
  margin-left: 32px;
  margin-bottom: 16px;
`

export const Button2 = styled.img`
    margin-top: 16px;
    cursor: pointer;
`

