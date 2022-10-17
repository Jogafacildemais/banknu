import styled from 'styled-components'
import { css } from 'styled-components';

export const Container = styled.section`

    background-image: url(${require('../../../assets/InicialImgMain.png')});
    background-position: bottom bottom;
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content:space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: flex-end;
        background-position: bottom right;
        background-size: max-content;
        height: 110vh; 
    }

`

export const TextBox = styled.div`
    margin-left:  158px;
    margin-top: 2%;
    width: 37%;

    @media (max-width: 900px) {
        margin: 0;
        margin-left: 5%;
        width: auto;
    }
   
`
export const Title = styled.h1`
    font-size: 7.5vh;
    color: ${({theme})=>theme.colors.shape_primary};
    margin-bottom: 0;
    @media (max-width: 900px) {
        font-size:30px;
    };
    font-weight: 500;


`
export const SubTitle = styled.h2`
    margin-top: 10px;
    font-size: 3.5vh;
    color: ${({theme})=>theme.colors.shape_secundary};
    @media (max-width: 900px) {
        font-size:20px;
    }
    font-weight: 500;


`
export const FormNuBank = styled.form`
    margin-top: 5%;
    margin-right: 3.5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({theme})=> theme.colors.shape_secundary};
    padding: 20px;
    border-radius:18px;
    @media (max-width: 900px) {
        margin-bottom:10%;
        padding: 20px;
        box-sizing: border-box;
        margin-left: 10px;
    }
    
`
export const TitleForm = styled.h2`
    font-size: 4vh;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 32px;

`
export const TextLabelInput = styled.span`
    font-size: 2.5vh;
    width: 100%;
    color: transparent;
    font-weight: bolder;

    ${({show,CPF})=> (show === true || CPF != '' )&& css`
        transition: all 250ms;
        color: ${({theme})=>theme.colors.text_placeHouders};

    `}
`
export const CPFForm = styled.input`
    margin-top: 16px;
    margin-bottom: 25px;
    font-size: 3.5vh;
    font-weight: 500;
    letter-spacing: -0.05em;
    padding-bottom: 10px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    outline:none;
    white-space: nowrap;
    color: ${({ValidCPF,theme})=> ValidCPF ? theme.colors.text_sucess : '#D72923' };
    &:focus::placeholder {
        color: transparent;
    }
    &::placeholder {
        font-size: 15px;
        color: #111111;
    }

    ${({ValidCPF}) => ValidCPF && css`
    background-image:url(${require('../../../assets/accept.png')});
    ` };

    ${({ValidCPF}) => ValidCPF === false && css`
    background-image: url(${require('../../../assets/cross.png')});
    ` };

    background-position: right;
    background-repeat: no-repeat;
    background-size: 16px;

`
export const ButtonForm = styled.button`
    padding:23px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 16px;
    border-radius: 20px;
    border: none;
    height: 40px;
    background-color: ${({theme,ValidCPF})=> ValidCPF ? theme.colors.primary : '#e6e6e6'};
    color:  ${({theme,ValidCPF})=> ValidCPF ? theme.colors.shape_primary : '#c9c9c9'};
    font-weight: bolder;
    font-size: 2.5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${({ValidCPF})=> ValidCPF ? 'pointer' : 'not-allowed'};

`
export const IconButton = styled.img`
width: 16px;
height: 16px;

`
export const TextAlert = styled.span`
    color: #D72923;
    font-size: 2.5vh;
    font-weight: 500;

`