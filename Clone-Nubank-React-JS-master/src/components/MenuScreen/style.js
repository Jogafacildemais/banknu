import styled,{keyframes,css} from 'styled-components'

const height = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100vh;
  }

`

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  align-items: flex-start;
  width: 100vw;
  transition: all 500ms ease;
  margin-top: 56px;
  margin-left: -20px;
  animation: ${height} 1s ease ;
  background-color: white;
  
`;
export const Nav = styled.nav`
overflow: hidden;

`
  
export const List = styled.ul`
list-style: none;

`
  
export const ItemList = styled.li`
margin-top: 25px ;
text-decoration: none;
font-size: 32px;
font-weight: 500;
color: ${({theme})=> theme.colors.secundary};
cursor: pointer;


  `
export const Border = styled.div`
border-bottom: #E6E6E6 0.5px solid;
margin: 22.3px;
margin-left: -20px;
width: 100vw;
display: ${({Display})=> !Display ? 'block' : 'none'};
`
export const Box = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Icon = styled.img`

width: 12px;
margin-right: 20px;

${({flip})=> flip && css`
  transform: rotateZ(180deg);

`}

`
export const BoxLinksNav = styled.div`

margin-left: -45px;
font-size: 10px;

`