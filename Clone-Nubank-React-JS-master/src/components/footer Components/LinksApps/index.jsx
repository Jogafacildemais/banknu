import React from 'react'


import {ReactComponent as Google }from '../../../assets/Google.svg'
import {ReactComponent as AppStore} from '../../../assets/appstore.svg'

import {
  Container,
  Title,
  Link,
} from './style'

export function LinksApps(){
  return (
    <Container>
        <Title>
        Baixe o app
        </Title>
        <Link>
        <Google />
        </Link>
       
        <Link>
        <AppStore />
        </Link>
        
        
    </Container>
  );
}
