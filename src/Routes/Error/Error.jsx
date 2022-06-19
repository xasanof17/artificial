import React from 'react'
import { Container } from '../../data/styles'
import { ErrorWrapper } from './errorStyled'

const Error = () => {
  return (
    <ErrorWrapper>
        <Container>
            Error 404! This page is not found
        </Container>
    </ErrorWrapper>
  )
}

export default Error