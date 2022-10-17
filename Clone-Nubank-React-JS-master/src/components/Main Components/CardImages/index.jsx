import React from 'react'

import {
  Container,
  BoxText,
  Text,
  Link,
  Icon,
} from './style'

export function CardImages({text,link,image,icon}){


  return (
    <Container URL={image} >
        <BoxText>
            <Text>
                {text}
            </Text>
            <Link>
                {link}
            <Icon src={icon} />
            </Link>
        </BoxText>
    </Container>
  );
}

