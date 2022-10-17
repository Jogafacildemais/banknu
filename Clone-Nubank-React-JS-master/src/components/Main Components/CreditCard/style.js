import styled from 'styled-components'

export const Container = styled.section`


width: 100%;
height: 100vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media (max-width:900px) {
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

`;
export const BoxText = styled.div`
  margin-left: 5%;

`
export const Title = styled.h1`
  color: ${({theme})=> theme.colors.primary};
  font-size: 7.5vh;
  margin: 0;
  &:hover {
      cursor: pointer;
      text-decoration: underline 0.5px;
  }
  font-weight: bolder;
  @media (max-width:900px) {
  font-size: 30px;
}
`
export const Text = styled.p`
font-size: 7.5vh;
font-weight: 500;
margin-top: 0;
margin-bottom: 32px;
color: ${({theme})=>theme.colors.secundary};
@media (max-width:900px) {
  font-size: 30px;
}
`
export const  Link = styled.a`
  display: flex;
  align-items: center;
  color: ${({theme})=> theme.colors.primary};
  font-size: 3.5vh;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 90%, rgba(130,10,209,1) 90%);
  background-repeat: no-repeat;
  background-size: 0%;
  transition: background-size 0.2s ease-in-out 0s;

  &:hover{
      cursor: pointer;
      background-size: 19%;
  }
  font-weight: bolder;

`
export const ImageCardNu = styled.img`
width: auto;
height:31vw;
margin-right: 11%;
@media (max-width:900px) {
  margin: 0;
  height: 40vh;
}
@media (max-height:400px) {
  height: 22vw;
}

`
export const Icon = styled.img`
width: 18;
height: 15px;
margin-left: 5px;

`