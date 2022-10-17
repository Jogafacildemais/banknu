import React from 'react'

import {
  Container,
  BoxText,
  Title,
  Text,
  Link,
  Icon,
  ImageCardNu,
} from './style'

export function CreditCard(){
  return (
    <Container>
          <BoxText>
            <Title>
            Cartão de Crédito
            </Title>
            <Text>
            Pode chamar ele de  roxinho. Além disso, pode  chamar ele de moderno,  gratuito e prático também.
            </Text>
            <Link>
            Saiba mais
            <Icon src={require('../../../assets/right-arrow-primary.png')}/>
            </Link>
          </BoxText>
          <ImageCardNu src={require('../../../assets/roxi-flutu.png')}/>
    </Container>
  );
}