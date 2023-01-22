import type { Meta, StoryObj } from '@storybook/react'
import type { TextProps } from '@ignite-ui/react'
import { Text } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum velit, rerum iusto facilis quis perferendis saepe nobis, et aspernatur est necessitatibus culpa corporis similique sunt sed, maxime veniam a.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
