import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$ignite300',
  color: '$gray900',
})

export const App = () => {
  return <Button>Hello World</Button>
}
