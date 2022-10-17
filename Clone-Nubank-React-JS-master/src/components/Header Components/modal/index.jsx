import React from 'react'

import {
  Container,
  Title,
  List,
  ItemList,
} from './style'

export function ModalComponent({title,text1,text2,text3,text4,text5}){
  return (
    <Container>
        <Title>{title}</Title>
        <List>
            <ItemList>{text1}</ItemList>
            <ItemList>{text2}</ItemList>
            <ItemList>{text3}</ItemList>
            <ItemList>{text4}</ItemList>
            <ItemList>{text5}</ItemList>
        </List>
    </Container>
  )
}


