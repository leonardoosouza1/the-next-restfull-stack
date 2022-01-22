import React, { useCallback, useState } from 'react'
import { useMyContext } from 'hooks'
import { MainTemplate, Div, SelectDate } from 'components'
import { Container, SButton } from './styles'

const HomePage = () => {
  const { history } = useMyContext()

  const handleLogout = useCallback(() => {
    localStorage.clear()
    history.push('/signin')
  })
  const show = (value) => {
    console.log(value.toLocaleDateString('pt-BR'))
  }

  const hours = ['08:00', '10:00', '13:00', '15:00', '17:00', '19:00']
  console.log(hours)

  const [btnS, setBtnS] = useState(0)
  return (
    <MainTemplate
      header={<Div>Header</Div>}
      footer={<Div>Footer</Div>}
      id="homepage"
    >
      <SelectDate handleDate={show} />
      <Container>
        {hours.map((hour, index) => {
          return (
            <>
              <SButton
                index={index}
                selected={btnS}
                disabled={hour === '13:00'}
                onClick={() => setBtnS(index + 1)}
              >
                {hour}
              </SButton>
            </>
          )
        })}
      </Container>
    </MainTemplate>
  )
}

export default HomePage
