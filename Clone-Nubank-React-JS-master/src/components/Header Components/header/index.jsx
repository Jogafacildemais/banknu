import React, { useEffect, useState } from 'react'

import { ModalComponent } from '../modal'

import {
  Container,
  BoxHeader,
  NavList,
  Logo,
  ItemList,
  Circle,
  Icon,
  ArrowDownIcon,
  Login,
  InicialItem,
  Modal,
  ButtonNubank,
  BoxLogin,
  ButtonOpenMenuScreen,
  IconMenu,
} from './style'

export function Header({ OpenScreenMenu, setOpenScreenMenu }) {


  const [MouseHover, setMouseHover] = useState('')
  const [OnModal, setOnModal] = useState(false)
  const [SelectedModal, setSelectedModal] = useState(MouseHover)
  const [ButtonVisibity, setButtonVisibity] = useState(false)

  useEffect(() => {
    if (MouseHover != '') { setSelectedModal(MouseHover) }

  }, [MouseHover])


  window.onscroll = function () {

    if (window.pageYOffset > 540)
      setButtonVisibity(true)
    else
      setButtonVisibity(false)
  }


  return (
    <>
      <Container>
        <BoxHeader>

          <Logo src={require('../../../assets/nubank-logo.png')} />

          <ButtonOpenMenuScreen
            setBackbackground={OpenScreenMenu}
            onClick={() => (OpenScreenMenu) ? setOpenScreenMenu(false) : setOpenScreenMenu(true)}>
            <IconMenu
              setWidth={OpenScreenMenu}
              src={require(!OpenScreenMenu ? "../../../assets/menu.png" : "../../../assets/closeScreen.png")} />
          </ButtonOpenMenuScreen>
          <NavList>

            <InicialItem >
              Página Inicial
              <Circle />
            </InicialItem>

            <ItemList
              onMouseEnter={() => setMouseHover('Para-você')}
              onMouseLeave={() => setMouseHover('')}>
              Para você
              <ArrowDownIcon
                src={require("../../../assets/arrow-Down.png")}
                flip={MouseHover}
                Type={'Para-você'} />
            </ItemList>

            <ItemList
              onMouseEnter={() => setMouseHover('Para-seu-negocio')}
              onMouseOut={() => setMouseHover('')} >
              Para seu negócio
              <ArrowDownIcon
                src={require("../../../assets/arrow-Down.png")}
                flip={MouseHover}
                Type={'Para-seu-negocio'} />
            </ItemList>

            <ItemList
              onMouseEnter={() => setMouseHover('Nubank')}
              onMouseOut={() => setMouseHover('')}>
              O Nubank
              <ArrowDownIcon
                src={require("../../../assets/arrow-Down.png")}
                flip={MouseHover}
                Type={'Nubank'} />
            </ItemList>

            <ItemList>
              Perguntas
            </ItemList>
          </NavList>
        </BoxHeader>
        <BoxLogin>

          <Login>
            Login
            <Icon 
            src={require("../../../assets/sign-in.png")} />
          </Login>
          {ButtonVisibity && <ButtonNubank>Quero ser Nubank</ButtonNubank>}

        </BoxLogin>

      </Container>

      <Modal 
        onMouseEnter={() => setOnModal(true)}
        onMouseLeave={() => setOnModal(false)}
        OnModal={OnModal}
        MouseHover={MouseHover}
      >
        {(MouseHover === 'Para-você' || SelectedModal === 'Para-você') &&
          <>
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
          </>
        }
        {
          (MouseHover === 'Para-seu-negocio' || SelectedModal === 'Para-seu-negocio') &&
          <>
            <ModalComponent
              title='Nubank PJ'
              text1='Conta PJ'
              text2='Cartão de crédito PJ'
            />
          </>
        }
        {
          (MouseHover === 'Nubank' || SelectedModal === 'Nubank') &&
          <>
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
          </>
        }
      </Modal>
    </>
  );
}


