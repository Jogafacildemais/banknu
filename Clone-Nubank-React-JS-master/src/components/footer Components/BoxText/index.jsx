import React from 'react'

import {
  Container,
  Title,
  ListLinks,
  Link,
} from './style'

export function BoxText({title,text1,text2,text3,text4,text5,text6,text7,text8,text9}){
  return (
    <Container>
        <Title>
        {title}
        </Title>
        <ListLinks>
            <Link>{text1}</Link>
            <Link>{text2}</Link>
            <Link>{text3}</Link>
            <Link>{text4}</Link>
            <Link>{text5}</Link>
            <Link>{text6}</Link>
            <Link>{text7}</Link>
            <Link>{text8}</Link>
            <Link>{text9}</Link>
        </ListLinks>
    </Container>
  );
}