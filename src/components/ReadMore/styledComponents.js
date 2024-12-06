// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const MainHeading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  color: #1e293b;
`
export const MainPara = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #334155;
`
export const Image = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const HiddenPara = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #334155;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  text-align: justify;
`

export const ReadMoreandLessButton = styled.button`
  width: auto;
  height: 36px;
  border: 0 solid;
  background: #1f81ff;
  font-family: Roboto;
  color: #fff;
  border-radius: 4px;
`
