import React from 'react'
import tw from 'tailwind-styled-components'

import { RefreshIcon } from './Icons'

const Container = tw.div`
  flex items-center
  m-16
  animate-pulse
`

const Card = tw.div`
  flex flex-row
  items-center justify-center
  gap-3 p-3 m-auto
  text-slate-500
`

const Spinner = tw(RefreshIcon)`
  h-5 w-5
  animate-spin
`

type LoadingProps = React.HTMLAttributes<React.FC>

export default function Loading({ children }: LoadingProps) {
  return (
    <Container>
      <Card>
        <Spinner /> {children}
      </Card>
    </Container>
  )
}
