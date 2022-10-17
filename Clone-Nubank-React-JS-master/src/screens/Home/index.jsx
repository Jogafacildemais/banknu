import React, { useState } from 'react'

import { Header } from '../../components/Header Components/header';
import { UltraVioletaCard } from '../../components/Main Components/UltraVioletaCard';
import { CreditCard } from '../../components/Main Components/CreditCard';
import { InputCard } from '../../components/Main Components/InputCard';
import { DeviceCard } from '../../components/Main Components/DeviceCard';
import { CardImages } from '../../components/Main Components/CardImages';
import { Footer } from '../../components/footer Components/footer';
import { MenuScreen } from '../../components/MenuScreen';

import {
  Container,
  ButtonNubank,
} from './style'


export function Home() {

  const [ButtonVisibity, setButtonVisibity] = useState(false)
  const [OpenScreenMenu, setOpenScreenMenu] = useState(false)


  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 540)
      setButtonVisibity(true)
    else
      setButtonVisibity(false)
  })

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900)
      setOpenScreenMenu(false)
  })



  return (
    <Container >
      <Header
        OpenScreenMenu={OpenScreenMenu}
        setOpenScreenMenu={setOpenScreenMenu} />
      {!OpenScreenMenu
        ?
        <>
          <InputCard />
          <CreditCard />
          <UltraVioletaCard />
          <DeviceCard />
          <CardImages
            text={'Nós acreditamos que só uma pessoa pode ter controle sobre sua  vida financeira: você.'}
            link={'Saiba mais sobre como fazemos isso'}
            image={require('../../assets/primary.png')}
            icon={require('../../assets/right-arrow.png')}
          />
          <CardImages
            text={'NuCommunit A comunidade oficial do Nubank para você tirar dúvidas e compartilhar ideias.'}
            link={'Faça parte'}
            image={require('../../assets/secundary.png')}
            icon={require('../../assets/top-right.png')}
          />
          <CardImages
            text={'Muita informação e conteúdo para você encontrar a melhor versão da sua vida financeira'}
            link={'Fala, Nubank'}
            image={require('../../assets/third.png')}
            icon={require('../../assets/top-right.png')}
          />
          <Footer />
          {ButtonVisibity && <ButtonNubank>Quero ser Nubank</ButtonNubank>}
        </>
        :
        <MenuScreen />
      }
    </Container>
  );
}






