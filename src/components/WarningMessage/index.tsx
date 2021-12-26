import { ExclamationIcon } from '@heroicons/react/solid'
import React from 'react'
import tw from 'tailwind-styled-components'

const Container = tw.main`
  flex flex-col items-center
  m-10
  text-yellow-400 text-center
  animate-fade-in-up
`

const StyledExclamationIcon = tw(ExclamationIcon)`
  w-12 h-12
`

type WarningMessage = React.HTMLAttributes<React.FC>

export default function WarningMessage({ children }: WarningMessage) {
  return (
    <Container role="alert" aria-label="Warning">
      <StyledExclamationIcon /> {children}
    </Container>
  )
}
