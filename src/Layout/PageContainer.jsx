import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './PageContainer.css'
import Searchbar from './Searchbar'


function PageContainer() { 

  return ( 

    <Container > 

      <div className='PageContainer'>     

      <Searchbar></Searchbar>
      </div>

    </Container>  
            
  )
}

export default PageContainer
