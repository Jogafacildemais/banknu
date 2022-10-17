import React from 'react'

import {
  Container,
  BoxText,
  Title,
  SubTitle,
  Link,
  Icon,
  ImageDevice,
} from './style'

export  function DeviceCard(){
  return (
    <Container>
        <BoxText>
            <Title>
            Conta do Nubank
            </Title>
            <SubTitle>
            A conta que vai levar você  ao controle da sua vida  financeira.
            </SubTitle>
            <Link>
            Sem tarifas e sem complicações
            <Icon src={require('../../../assets/right-arrow-primary.png')}/>
            </Link>
        </BoxText>
        <ImageDevice src={require('../../../assets/device.png')}/>
    </Container>
  );
}