import styled ,{css}from 'styled-components'

export const Container = styled.header`
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape_secundary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  border-bottom: 2.5px solid ${({theme})=>theme.colors.shape_primary};
`;
export const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  @media (max-width:1000px) {
    width: 100%;
    justify-content: space-between;
  }
`
export const Logo = styled.img`

width: 44px;
height: 24px;
margin-right: 28px;
margin-left: 48px;
cursor: pointer;
@media (max-width:900px) {
  margin-left: 30px;
}

`
export const ButtonOpenMenuScreen = styled.button`
  display: none;
  margin-right: 15px;
  border: 0;
  background-color: ${({setBackbackground})=> setBackbackground ? '#F4E7FF' : 'transparent'};
  cursor: pointer;
  border-radius: 50%;
  padding: 15px;
  transition: all 300ms ease;
  :hover{
    background-color: #F4E7FF;
  };
  @media (max-width:1000px) {
    display: flex;
    align-items: center;
    justify-content: center;

  }


`
export const IconMenu = styled.img`
  width: ${({setWidth})=> (!setWidth) ? '18px' : '10px'}
`
export const NavList = styled.nav`

    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    @media (max-width:1000px) {
        display: none;
    }
`

export const ItemList = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    padding: 25px 28px 25px 0;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: -0.5px;

`
export const InicialItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7px;
    list-style: none;
    margin-right: 30px;
    padding: 5px;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: -0.5px;
    

`
export const Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: #820AD1;
  border-radius: 2px;
  margin-top: 3px;

`

export const ArrowDownIcon = styled.img`
width: 12px;
height: 12px;
margin-left: 10px;

${({flip,Type})=> flip === Type && css`
    transform: rotateZ(180deg);
    transition: 150ms;
`} 
    &:hover{
      transform: rotateZ(180deg);
      transition: 150ms;
    }
;
`

export const Login = styled.span`

color: ${({theme})=>theme.colors.primary};
font-size: 18px;
font-weight: 500;
display: flex;
align-items: center;
cursor: pointer;
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 90%, rgba(130,10,209,1) 90%); 
background-repeat: no-repeat;
background-size: 0%;
transition: background-size 0.2s ease-in-out 0s;


&:hover {
  background-size: 100%;
  
}

`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  
`

export const Modal = styled.div`
  margin-top: 50px;
  height: 330px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.shape_secundary};
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
  
  ${({MouseHover,OnModal})=>  (MouseHover != "" || OnModal === true) && css`
      height: 330px; 
      transition: all ease 700ms;
  `  }

  ${({MouseHover,OnModal})=>  (MouseHover === "" && OnModal === false) && css`
      height: 0;
      transition: all ease 400ms;
  `  }

`
export const BoxLogin = styled.div`
  margin-right: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:1000px) {
        display: none;
    }

`
export const ButtonNubank = styled.button`
  border: none;
  color: ${({theme})=> theme.colors.shape_secundary};
  background-color : ${({theme})=> theme.colors.primary};
  padding: 0 20px;
  height: 40px;
  border-radius: 6.25em;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-left: 16px;
  @media (max-width:800px) {
      display: none;
  }

`