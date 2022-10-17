import styled from 'styled-components'

export const Container = styled.div`
     width: max-content ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
     margin-left: 25px;

     @media (max-width: 1300px) {
          margin-top: 25px;
     }
     @media (max-width:900px) {
          margin-top: 35px;
}

`;
export const Title = styled.span`
     font-size: 18px;
    color: ${({theme})=>theme.colors.shape_primary};
    margin-bottom: 34px;
`
export const ListLinks = styled.ul`
     font-size: 18px;
     margin: 0;
     padding: 0;

`
export const Link = styled.li`   
     color: ${({theme})=>theme.colors.shape_primary};
     text-decoration: none;
     list-style: none;
     font-size: 18px;
     font-weight: bolder;
     margin-bottom: 10px;

     &:hover {
        color: ${({theme})=> theme.colors.primary};
        cursor: pointer;
     }
`