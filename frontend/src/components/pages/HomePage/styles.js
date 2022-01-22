import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #6d6d66;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`
export const SButton = styled(Button)`
  padding-top: 12px 32px !important;
  border: 1px solid #fff !important;
  color: ${({ index, selected }) => (index + 1) === selected ? 'black' : 'white'} !important;
  background-color: ${({ index, selected }) => (index + 1) === selected ? 'white' : 'black'} !important;
  transition: all 0.5s ease-in-out !important;
  opacity: ${({ disabled }) => disabled === true && 0.5};

`
