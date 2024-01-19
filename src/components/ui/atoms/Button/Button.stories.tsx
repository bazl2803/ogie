import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	args: {
		...Button.defaultProps,
		children: 'Button',
	},
	tags: ['autodocs'],
} as Meta<typeof Button>

const Template: StoryObj<typeof Button> = {}

export const Default = { ...Template }
