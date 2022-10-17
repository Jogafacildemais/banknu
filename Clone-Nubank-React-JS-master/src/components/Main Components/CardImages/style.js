import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  background-image: url(${({URL}) => (URL)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  align-items: center;
  @media (max-width:900px) {
  padding-bottom: 10%;
  height: 400px;
  background-size: cover;
  background-position: center;
  align-items: flex-start;
  justify-content: center;
}
`
export const BoxText = styled.div`
    margin-left: 170px;
    width: 39vw;
    @media (max-width:900px) {
    width: auto;
   margin-left: 5%;
   
    
}

`
export const Text = styled.p`
  color: ${({theme})=>theme.colors.shape_secundary};
  font-size: 7.5vh;
  font-weight: 500;
  @media (max-width:900px) {
  font-size: 30px;
}
  `
export const Link = styled.a`
  font-size: 2.5vh;
  color: ${({theme})=>theme.colors.shape_secundary};
  font-weight: bolder;
  background: rgb(245,245,245);
  background: linear-gradient(180deg, rgba(245,245,245,0) 90%, rgba(255,255,255,1) 90%); 
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
margin-left: 8px;
  `