import styled from 'styled-components'

export const Container = styled.nav`
  margin-left: 48px;
  margin-right: 200px;
  margin-top: 48px;

`;
export const Title = styled.span`
    font-size:16px ;

`
export const List = styled.ul`
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  `
export const ItemList = styled.li`
    font-size:24px ;
    margin-top: 20px;
    font-weight: bolder;
    cursor: pointer;
    &:hover{
        color: ${({theme})=>theme.colors.primary};
    }

  `