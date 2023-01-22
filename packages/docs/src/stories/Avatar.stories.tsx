import type { Meta, StoryObj } from '@storybook/react'
import type { AvatarProps } from '@ignite-ui/react'
import { Avatar } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/heyloh.png',
    alt: 'Lohana Torres',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
