import React, { useEffect, useState } from 'react'

import {
  Container,
  TextBox,
  Title,
  SubTitle,
  FormNuBank,
  CPFForm,
  ButtonForm,
  TitleForm,
  IconButton,
  TextLabelInput,
  TextAlert,
} from './style'

export function InputCard(){
    const [CPF,setCPF] = useState('')
    const [FocusInput,setFocusInput] =  useState('')
    const [Message,setMessage] = useState(false)
    const [ResponseValidation,setResponseValidation] = useState('')


function ValidationCPF (CPF) {
   
  let PrimaryDigit = 0
  let SecondaryDigit = 0

  const CPFFormated = String(CPF).split('').filter((e)=> !isNaN(parseInt(e))).map((e)=> parseInt(e)).
  filter((v,i) => i<=8)

  let CPFMultiplicatedForTwo = CPFFormated.reverse().map((e,i) => (i+2)*e)
  
  let Soma = CPFMultiplicatedForTwo.reduce((ValueInicial,ValueFinal)=> ValueInicial + ValueFinal )

  if (Soma%11>=2) {
      PrimaryDigit = 11 - Soma%11
  }
   CPFFormated.reverse().push(PrimaryDigit)
  
   CPFMultiplicatedForTwo = CPFFormated.reverse().map((e,i) => (i+2)*e)

   Soma = CPFMultiplicatedForTwo.reduce((ValueInicial,ValueFinal)=> ValueInicial + ValueFinal )

   if (Soma%11>=2) {
      SecondaryDigit = (11 - Soma%11)
  }

  CPFFormated.reverse().push(SecondaryDigit)

  const CPFValid = CPFFormated.reduce((ValueI, ValueF)=> String(ValueI)+String(ValueF))

  const CPFFormartForComparation = String(CPF).split('').filter((e)=> !isNaN(parseInt(e))).
  reduce((ValueI, ValueF)=> String(ValueI)+String(ValueF))

  if ((CPFValid != CPFFormartForComparation && CPF) ) {
      setResponseValidation(false)
      setMessage('Precisamos de um CPF válido.')
  }
  else if (CPFValid === CPFFormartForComparation && CPF) {
    setResponseValidation(true)
    setMessage('')
  }
}
    
  return (
    <Container>
            <TextBox>
                <Title>
                O futuro é a razão que  a gente faz planos.
                </Title>
                <SubTitle>
                Escolha o futuro. Comece a controlar melhor  sua vida financeira com o Nubank.
                </SubTitle>

            </TextBox>
            <FormNuBank method='' onClick={(e)=>e.preventDefault()}>
                <TitleForm >Peça sua conta e cartão <br/> de crédito do Nubank</TitleForm>

               <TextLabelInput show={FocusInput} CPF={CPF}>Digite seu CPF</TextLabelInput>

                <CPFForm type="text"  
                placeholder='Digite seu CPF' 
                onFocus={()=>setFocusInput(true)} onBlur={()=>setFocusInput(false)}
                onChange={(e)=>ValidationCPF(e.target.value,setCPF(e.target.value))}
                ValidCPF={ResponseValidation}
                />

                <TextAlert>{!FocusInput && Message}</TextAlert>

                <ButtonForm  ValidCPF={ResponseValidation} >
                    Continuar
                    <IconButton src={require('../../../assets/right-arrow.png')}/>
                    </ButtonForm>
            </FormNuBank>
    </Container>
  );
}