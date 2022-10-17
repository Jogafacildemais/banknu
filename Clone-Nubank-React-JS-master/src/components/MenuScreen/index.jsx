import React, { useState } from 'react'

import { ModalComponent } from '../Header Components/modal/'

import {
  Container,
  Nav,
  List,
  ItemList,
  Border,
  Box,
  Icon,
  BoxLinksNav,
} from './style'

export function MenuScreen() {

  const [link, setLink] = useState(['', '', ''])

  function HandleClickLink(id) {

    setLink(link.map((value, index) => {
      if (index === id) {
        (value === true) ? value = false : value = true
      }
      else {
        value = false
      }
      return value

    }))
  }

  return (
    <Container>
      <Nav>
        <List>
          <ItemList>
            Página Inicial
            <Border />
          </ItemList>

          <ItemList
            onClick={() => HandleClickLink(0)}
          >
            <Box>
              Para Você
              <Icon
                flip={link[0]}
                src={require("../../assets/arrow-Down.png")} />
            </Box>
            {link[0] &&
              <BoxLinksNav>
                <ModalComponent
                  title='Nubank'
                  text1='Cartão de crédito'
                  text2='Conta do Nubank'
                  text3='Tudo sobre Pix'
                />
                <ModalComponent
                  title='Nubank Ultravioleta'
                  text1='Cartão de crédito'
                />
                <ModalComponent
                  title='Outros produtos'
                  text1='Empréstimo Pessoal'
                  text2='Seguro de Vida'
                  text3='Seguro de Celular'
                  text4='Investimentos'
                />
              </BoxLinksNav>
            }
            <Border />
          </ItemList>

          <ItemList
            onClick={() => HandleClickLink(1)}
          >
            <Box>
              Para seu Negócio
              <Icon
                flip={link[1]}
                src={require("../../assets/arrow-Down.png")} />
            </Box>
            {link[1] &&
              <BoxLinksNav>
                <ModalComponent
                  title='Nubank PJ'
                  text1='Conta PJ'
                  text2='Cartão de crédito PJ'
                />
              </BoxLinksNav>
            }
            <Border />
          </ItemList>

          <ItemList
            onClick={() => HandleClickLink(2)}
          >
            <Box>
              O Nubank
              <Icon
                flip={link[2]}
                src={require("../../assets/arrow-Down.png")} />
            </Box>
            {link[2] &&
              <BoxLinksNav>
                <ModalComponent
                  title='Sobre nós'
                  text1='O Nu'
                  text2='Sala de imprensa'
                  text3='Carreiras'
                  text4='Nu Impacto'
                  text5='Investidores'
                />
                <ModalComponent
                  title='Outros canais'
                  text1='Blog'
                  text2='Newsletter'
                  text3='Comunidade'
                  text4='InvestNews'
                />
                <ModalComponent
                  title='Nubank pelo mundo'
                  text1='México'
                  text2='Colômbia'
                  text3='Argentina'
                  text4='Nu Internacional'
                />
              </BoxLinksNav>
            }
            <Border />
          </ItemList>

          <ItemList>
            Perguntas
            <Border />
          </ItemList>
          <ItemList>Login</ItemList>
        </List>
      </Nav>
    </Container>
  );
}