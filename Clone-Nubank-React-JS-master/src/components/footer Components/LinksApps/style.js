import styled from 'styled-components'

export const Container = styled.div`
      width: max-content ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
     margin-left: 25px;

`;
export const Title = styled.span`
     font-size: 18px;
    color: ${({theme})=>theme.colors.shape_primary};
    margin-bottom: 34px;
`
export const Link = styled.a`
    margin-bottom: 16px;

`