import styled from 'styled-components'


export const Container = styled.div`    
display: flex;
flex-direction: column;

`; 

export const ButtonNubank = styled.button`
  display: none;
  border: none;
  color: ${({theme})=> theme.colors.shape_secundary};
  background-color : ${({theme})=> theme.colors.primary};
  padding: 0 25px;
  height: 45px;
  border-radius: 6.25em;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  width: 90vw;
  align-self: center;
  position: fixed;
  bottom:18px;
  @media (max-width: 800px ) {
      display: inline-block;
  }

`