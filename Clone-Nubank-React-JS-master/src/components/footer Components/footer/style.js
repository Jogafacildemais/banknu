import styled from 'styled-components'

export const Container = styled.div`
  
    background-color: ${({theme})=> theme.colors.secundary};
    padding: 80px 56px;
   display: grid;
   grid-template: 1fr 1fr  /1fr 1fr 1fr 1fr;
   @media (max-width: 1300px) {
    grid-template: 1fr 1fr 1fr 1fr /1fr 1fr ;
   }
   @media (max-width:900px) {
    grid-template-rows: auto;
    grid-template-columns: none;
    padding: 50px 0;
    box-sizing: border-box;
}
box-sizing: border-box;
  
`;
export const BoxInformations = styled.div`
    
    padding: 0px 56px;
    height: 150px;
    padding-top: 80px;
    border-top: 1px solid rgb(25, 25, 25);
    border-bottom: 1px solid rgb(25, 25, 25);
    display: flex;
    justify-content: space-between;
    background-color: ${({theme})=> theme.colors.secundary} ;

    @media (max-width:1100px) {
       
      flex-direction: column;
      align-items: flex-start; 
      padding-right: 56px;
      padding: 0;
      height: 300px;
      padding-left: 30px;
      justify-content: center;
    }
    
    
`
export const Boxaddress = styled.div`
    @media (max-width:1100px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 40px;
     
    }


`
export const BoxSocialMedias = styled.div`
    display: grid;
    grid-template:  0 / 1fr 1fr 1fr 1fr 1fr ;
    gap: 32px;

`

export const Text = styled.span`

    display: inline-block;
    margin-left: 98px;
    color: ${({theme})=> theme.colors.shape_secundary};
    line-height: 24px;
    font-size: 3.2vh;
    font-weight: 500;
    @media(max-width:1100px) {
        margin: 0;
        margin-top: 40px;
        display: block;
        font-size: 2vh;
        
    }


`
