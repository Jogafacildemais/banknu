import styled from 'styled-components'

export const Container = styled.section`
width: 100%;
height: 100vh;
background-color: ${({theme})=> theme.colors.background_secundary};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media (max-width:900px) {
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 10% 4% 10% 4%;
  box-sizing: border-box;
}

`;
export const BoxText = styled.div`
margin-left: 12%;
width: 40%;
@media (max-width:900px) {
  margin: 0;
  width: auto;
}

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
export const SubTitle = styled.p`
  font-size: 7.5vh;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 32px;
  color: ${({theme})=>theme.colors.secundary};

  @media (max-width:900px) {
  font-size: 30px;
}


  `
export const Link = styled.a`
display: flex;
  align-items: center;
  color: ${({theme})=> theme.colors.primary};
  font-size: 18px;
  font-weight: bolder;
  background: rgb(245,245,245);
  background: linear-gradient(180deg, rgba(245,245,245,1) 90%, rgba(130,10,209,1) 90%); 
  background-repeat: no-repeat;
  background-size: 0%;
  transition: background-size 0.2s ease-in-out 0s;
  width: max-content;
  &:hover{
      cursor: pointer;
      background-size: 100%;
  }
  
  `
export const Icon = styled.img`
  width: 18;
height: 15px;
margin-left: 5px;
  `
export const CardImage = styled.img`
width: auto;
height:28vw;
margin-right: 12%;
@media (max-width:900px) {
  height: 75vw;
}
@media (max-height:400px) {
  height: 22vw;
}
  
  `