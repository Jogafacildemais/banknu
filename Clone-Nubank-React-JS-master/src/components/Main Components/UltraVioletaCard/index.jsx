import React from 'react'

import {
  Container,
  BoxText,  
  Title,
  SubTitle,
  Link,
  Icon,
  CardImage,
} from './style'

export function UltraVioletaCard(){
  return (
    <Container>
        <BoxText>
          <Title>
          Nubank Ultravioleta
          </Title>
          <SubTitle>
          O cartão pensado para  quem quer ver além
          </SubTitle>
          <Link>
          Saiba mais
          <Icon src={require('../../../assets/right-arrow-primary.png')}/>
          </Link>
        </BoxText>
        <CardImage src={require('../../../assets/ultraviolet-card.png')}/>
    </Container>
  );
}