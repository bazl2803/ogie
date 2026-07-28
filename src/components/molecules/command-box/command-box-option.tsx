'use client'

import { Command } from 'cmdk'
import React from 'react'
import clsx from 'clsx'

interface CommandBoxOptionProps extends React.ComponentPropsWithRef<
	typeof Command.Item
> {}

export const CommandBoxOption: React.FC<CommandBoxOptionProps> = ({
	className,
	...props
}) => {
	return (
		<Command.Item
			{...props}
			className={clsx('command-box-option', className)}
		/>
	)
}
