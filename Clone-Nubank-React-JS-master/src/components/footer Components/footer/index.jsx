import React,{useState} from 'react'


import { BoxText } from '../BoxText';
import { LinksApps } from '../LinksApps';

import { ReactComponent as Nu } from '../../../assets/Nu.svg'
import { ReactComponent as Face } from '../../../assets/face.svg'
import { ReactComponent as Insta } from '../../../assets/insta.svg'
import { ReactComponent as In } from '../../../assets/linkedin.svg'
import { ReactComponent as Twiter } from '../../../assets/twiter.svg'
import { ReactComponent as You } from '../../../assets/you.svg'


import {
  Container,
  BoxInformations,
  BoxSocialMedias,
  Boxaddress,
  Text,
} from './style'

export function Footer() {

  const [AnimationSvg,setAnimationSvg] = useState(null)

  return (
    <>
      <Container>

        <BoxText
          title='NuBank'
          text1='Sobre nós'
          text2='Carreiras'
          text3='Perguntas frequentes'
          text4='Contato'
          text5='Imprensa'
          text6='Nu Impacto'
          text7='Investidores'
        />
        <BoxText
          title='Produtos'
          text1='Conta digital'
          text2='Cartão de crédito'
          text3='Nubank Ultravioleta'
          text4='Empréstimo'
          text5='Conta PJ'
          text6='Cartão de crédito PJ'
          text7='Nubank Vida'
          text8='Investimentos'
        />
        <BoxText
          title='Explore'
          text1='Comunidade'
          text2='Blog'
          text3='InvestNews'
          text4='Newsletter'
          text5='México'
          text6='Argentina'
          text7='Colômbia'
        />
        <BoxText
          title='Veja também'
          text1='Auxílio Emergencial e FGTS'
          text2='Tudo sobre o Pix'
        />
        <BoxText
          title='Transparência'
          text1='Política de Privacidade'
          text2='Política de Compliance'
          text3='Contratos'
          text4='Política de Segurança'
          text5='Relatórios Financeiros'
          text6='Ética & Compliance'
          text7='Dados Abertos'
          text8='SCR'
          text9='Convenção de Boletos'
        />
        <BoxText
          title='Ouvidoria'
          text1='0800 887 0463'
          text2='ouvidoria@nubank.com.br'
          text3='Atendimento das 9h às 18h (dias úteis)'
        />
        <BoxText
          title='Fale com a gente'
          text1='0800 608 6236'
          text2='meajuda@nubank.com.br'
          text3='Atendimento 24h'
        />
        <LinksApps />
      </Container>
      <BoxInformations>
        <Boxaddress>
          <Nu fill='white' />
          <Text>
            © 2021  Nu Pagamentos S.A - Instituição de Pagamento.  18.236.120/0001-58 <br />
            Rua Capote Valente, 39 - São Paulo, SP - 05409-000
          </Text>

        </Boxaddress>
        
        <BoxSocialMedias>
          <Face fill={AnimationSvg === 1 ? '#820AD1' : '#ffff'}  height='23' width='23'
          onMouseEnter={()=>setAnimationSvg(1)} onMouseLeave={()=> setAnimationSvg(null)}
          style={{
            cursor: 'pointer',
           }}/>

          <Insta fill={AnimationSvg === 2 ? '#820AD1' : '#ffff'}  height='23' width='23'
          onMouseEnter={()=>setAnimationSvg(2)} onMouseLeave={()=> setAnimationSvg(null)}
          style={{
            cursor: 'pointer',
           }}
          />
          
          <In  fill={AnimationSvg === 3 ? '#820AD1' : '#ffff'}  height='23' width='23'
          onMouseEnter={()=>setAnimationSvg(3)} onMouseLeave={()=> setAnimationSvg(null)}
          style={{
            cursor: 'pointer',
           }}/>
          <Twiter  fill={AnimationSvg === 4 ? '#820AD1' : '#ffff'}  height='23' width='23'
          onMouseEnter={()=>setAnimationSvg(4)} onMouseLeave={()=> setAnimationSvg(null)}
          style={{
            cursor: 'pointer',
           }}/>
          <You  fill={AnimationSvg === 5 ? '#820AD1' : '#ffff'}  height='23' width='23'
          onMouseEnter={()=>setAnimationSvg(5)} onMouseLeave={()=> setAnimationSvg(null)}
          style={{
            cursor: 'pointer',
           }}/>

        </BoxSocialMedias>
      </BoxInformations>
    </>
  );
}

