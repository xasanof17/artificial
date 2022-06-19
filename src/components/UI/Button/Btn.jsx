import React from 'react'
import { BtnBox } from './buttonStyled'

const Btn = ({children}) => {
  return (
    <BtnBox>{children}</BtnBox>
  )
}

export default Btn